-- OPTIMIZATION: User Dashboard Stats Cache
-- Created at: 2025-12-24
-- Purpose: Cache expensive calculations (Module Count, Focus Time) for instant dashboard loading.

-- 1. Create the stats table
CREATE TABLE IF NOT EXISTS user_dashboard_stats (
    -- FIXED: Changed UUID to INTEGER to match your 'users' table definition (SERIAL)
    user_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    
    -- Fast Access Stats
    modules_cleared INTEGER DEFAULT 0,
    total_modules_available INTEGER DEFAULT 123, -- Sync this with content updates
    completion_percentage DECIMAL(5,2) DEFAULT 0.00,
    
    -- Activity Tracking
    current_streak_days INTEGER DEFAULT 0,
    max_streak_days INTEGER DEFAULT 0,
    total_focus_minutes INTEGER DEFAULT 0,
    last_activity_at TIMESTAMP WITH TIME ZONE,
    
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Indexes for performance
CREATE INDEX IF NOT EXISTS idx_user_stats_modules ON user_dashboard_stats(modules_cleared);

-- 3. Trigger Function to auto-create stats on new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user_stats()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_dashboard_stats (user_id)
  VALUES (NEW.id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 4. Apply Trigger to 'users' table
DROP TRIGGER IF EXISTS on_user_created_stats ON users;
CREATE TRIGGER on_user_created_stats
  AFTER INSERT ON users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user_stats();

-- 5. Backfill for existing users (Run once)
INSERT INTO user_dashboard_stats (user_id)
SELECT id FROM users
ON CONFLICT (user_id) DO NOTHING;
