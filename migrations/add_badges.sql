-- Achievement Badges Schema
-- Run this migration in your PostgreSQL database

-- User Badges table to store unlocked badges
CREATE TABLE IF NOT EXISTS user_badges (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  badge_id TEXT NOT NULL,
  unlocked_at TIMESTAMP DEFAULT NOW(),
  notified BOOLEAN DEFAULT FALSE, -- whether user has seen the unlock notification
  UNIQUE(user_id, badge_id)
);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_user_badges_user ON user_badges(user_id);
CREATE INDEX IF NOT EXISTS idx_user_badges_badge ON user_badges(badge_id);

-- Add max_streak column to users table if not exists
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'users' AND column_name = 'max_streak') THEN
    ALTER TABLE users ADD COLUMN max_streak INTEGER DEFAULT 0;
  END IF;
END $$;

-- Add sections_visited to track explorer badge
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'users' AND column_name = 'sections_visited') THEN
    ALTER TABLE users ADD COLUMN sections_visited TEXT[] DEFAULT '{}';
  END IF;
END $$;

-- Function to update max_streak when streak increases
CREATE OR REPLACE FUNCTION update_max_streak()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.streak > COALESCE(NEW.max_streak, 0) THEN
    NEW.max_streak = NEW.streak;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update max_streak
DROP TRIGGER IF EXISTS update_max_streak_trigger ON users;
CREATE TRIGGER update_max_streak_trigger
  BEFORE UPDATE ON users
  FOR EACH ROW
  WHEN (NEW.streak IS DISTINCT FROM OLD.streak)
  EXECUTE FUNCTION update_max_streak();
