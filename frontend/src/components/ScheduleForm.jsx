import { useState } from "react";
import { createSchedule } from "../services/api";

function ScheduleForm() {
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    priority: "medium",
    category: "work"
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await createSchedule({
        title: form.title,
        schedule_date: form.date,
        schedule_time: form.time,
        priority: form.priority,
        category: form.category
      });

      setForm({
        title: "",
        date: "",
        time: "",
        priority: "medium",
        category: "work"
      });

      window.location.reload();
    } catch (error) {
      console.error("Failed to create schedule:", error);
    }
  };

  return (
    <section className="card">
      <h2>Add Schedule</h2>

      <form className="schedule-form" onSubmit={handleSubmit}>
        <div className="form-group full">
          <label htmlFor="title">Task</label>
          <input
            id="title"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter task"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            id="time"
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            value={form.priority}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
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
        </div>

        <button type="submit" className="btn-primary">
          Add Schedule
        </button>
      </form>
    </section>
  );
}

export default ScheduleForm;