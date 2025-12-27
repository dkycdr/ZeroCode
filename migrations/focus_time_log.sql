-- Focus Time Per-Item Logging
-- Created: 2025-12-28
-- Purpose: Track focus time per learning item for detailed breakdown

CREATE TABLE IF NOT EXISTS focus_time_log (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    item_id VARCHAR(100) NOT NULL,
    course_id VARCHAR(50) NOT NULL,
    unit_id VARCHAR(100),
    content_type VARCHAR(20), -- 'doc', 'lab', 'quiz', 'project'
    duration_minutes INTEGER DEFAULT 0,
    started_at TIMESTAMP WITH TIME ZONE,
    ended_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for fast queries
CREATE INDEX IF NOT EXISTS idx_focus_log_user ON focus_time_log(user_id);
CREATE INDEX IF NOT EXISTS idx_focus_log_course ON focus_time_log(user_id, course_id);
CREATE INDEX IF NOT EXISTS idx_focus_log_item ON focus_time_log(user_id, item_id);

-- Example queries for modal:
-- 
-- Get total focus per course:
-- SELECT course_id, SUM(duration_minutes) as total_minutes
-- FROM focus_time_log WHERE user_id = ? GROUP BY course_id;
--
-- Get focus per unit in a course:
-- SELECT unit_id, content_type, SUM(duration_minutes) as total_minutes
-- FROM focus_time_log WHERE user_id = ? AND course_id = ? 
-- GROUP BY unit_id, content_type;
