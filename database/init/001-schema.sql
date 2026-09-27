CREATE TABLE IF NOT EXISTS schedules (
    id SERIAL PRIMARY KEY,

    title VARCHAR(255) NOT NULL,

    schedule_date DATE NOT NULL,

    schedule_time TIME NOT NULL,

    priority VARCHAR(20) NOT NULL
        CHECK (priority IN ('low', 'medium', 'high')),

    category VARCHAR(50) NOT NULL
        CHECK (category IN ('work', 'study', 'personal', 'health', 'other')),

    completed BOOLEAN NOT NULL DEFAULT FALSE,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_schedules_date
ON schedules(schedule_date);

CREATE INDEX idx_schedules_completed
ON schedules(completed);

