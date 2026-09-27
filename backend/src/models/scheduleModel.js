import pool from "../config/database.js";

export async function getAllSchedules() {
  const result = await pool.query(
    `SELECT *
     FROM schedules
     ORDER BY schedule_date, schedule_time`
  );

  return result.rows;
}

export async function getScheduleById(id) {
  const result = await pool.query(
    `SELECT *
     FROM schedules
     WHERE id = $1`,
    [id]
  );

  return result.rows[0];
}

export async function createSchedule(schedule) {
  const {
    title,
    schedule_date,
    schedule_time,
    priority,
    category
  } = schedule;

  const result = await pool.query(
    `INSERT INTO schedules
      (title, schedule_date, schedule_time, priority, category)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [
      title,
      schedule_date,
      schedule_time,
      priority,
      category
    ]
  );

  return result.rows[0];
}

export async function updateSchedule(id, schedule) {
  const {
    title,
    schedule_date,
    schedule_time,
    priority,
    category,
    completed
  } = schedule;

  const result = await pool.query(
    `UPDATE schedules
     SET
       title = $1,
       schedule_date = $2,
       schedule_time = $3,
       priority = $4,
       category = $5,
       completed = COALESCE($6, completed),
       updated_at = CURRENT_TIMESTAMP
     WHERE id = $7
     RETURNING *`,
    [
      title,
      schedule_date,
      schedule_time,
      priority,
      category,
      completed,
      id
    ]
  );

  return result.rows[0];
}

export async function deleteSchedule(id) {
  const result = await pool.query(
    `DELETE FROM schedules
     WHERE id = $1
     RETURNING *`,
    [id]
  );

  return result.rows[0];
}