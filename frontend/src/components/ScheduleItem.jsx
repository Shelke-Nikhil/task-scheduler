import { useState } from "react";
import { deleteSchedule, updateSchedule } from "../services/api";

function ScheduleItem({ schedule, onUpdated, onDeleted }) {
  const [editing, setEditing] = useState(false);

  const [form, setForm] = useState({
    title: schedule.title,
    schedule_date: schedule.schedule_date?.slice(0, 10),
    schedule_time: schedule.schedule_time?.slice(0, 5),
    priority: schedule.priority,
    category: schedule.category
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleUpdate = async () => {
    const updated = await updateSchedule(schedule.id, {
      ...form,
      completed: schedule.completed
    });

    setEditing(false);
    onUpdated(updated);
  };

  const handleToggleComplete = async () => {
    const updated = await updateSchedule(schedule.id, {
      ...form,
      completed: !schedule.completed
    });

    onUpdated(updated);
  };

  const handleDelete = async () => {
    await deleteSchedule(schedule.id);
    onDeleted(schedule.id);
  };

  if (editing) {
    return (
      <div className="schedule-item editing">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          type="date"
          name="schedule_date"
          value={form.schedule_date}
          onChange={handleChange}
        />

        <input
          type="time"
          name="schedule_time"
          value={form.schedule_time}
          onChange={handleChange}
        />

        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
        >
          <option value="work">Work</option>
          <option value="study">Study</option>
          <option value="personal">Personal</option>
          <option value="health">Health</option>
          <option value="other">Other</option>
        </select>

        <button onClick={handleUpdate}>Save</button>
        <button onClick={() => setEditing(false)}>Cancel</button>
      </div>
    );
  }

  return (
    <div className={`schedule-item ${schedule.completed ? "completed" : ""}`}>
      <div className="schedule-time">
        {schedule.schedule_time?.slice(0, 5)}
      </div>

      <div className="schedule-details">
        <h3>{schedule.title}</h3>

        <div className="schedule-meta">
          <span>{schedule.category}</span>
          <span>{schedule.priority}</span>
        </div>
      </div>

      <div className="schedule-actions">
        <button onClick={handleToggleComplete}>
          {schedule.completed ? "Undo" : "Complete"}
        </button>

        <button onClick={() => setEditing(true)}>
          Edit
        </button>

        <button onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ScheduleItem;