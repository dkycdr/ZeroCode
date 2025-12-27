-- Focus Time Breakdown by Content Type
-- Created: 2025-12-28
-- Purpose: Track focus time separately for different content types

-- Add new columns to user_dashboard_stats (run each separately in PostgreSQL)
ALTER TABLE user_dashboard_stats ADD COLUMN IF NOT EXISTS focus_minutes_doc INTEGER DEFAULT 0;
ALTER TABLE user_dashboard_stats ADD COLUMN IF NOT EXISTS focus_minutes_lab INTEGER DEFAULT 0;
ALTER TABLE user_dashboard_stats ADD COLUMN IF NOT EXISTS focus_minutes_quiz INTEGER DEFAULT 0;
ALTER TABLE user_dashboard_stats ADD COLUMN IF NOT EXISTS focus_minutes_project INTEGER DEFAULT 0;

-- The existing total_focus_minutes now becomes the sum of all types
-- You can calculate it as: focus_minutes_doc + focus_minutes_lab + focus_minutes_quiz + focus_minutes_project

-- Example query to get all focus data:
-- SELECT 
--     total_focus_minutes,
--     focus_minutes_doc,
--     focus_minutes_lab,
--     focus_minutes_quiz,
--     focus_minutes_project
-- FROM user_dashboard_stats 
-- WHERE user_id = ?;
