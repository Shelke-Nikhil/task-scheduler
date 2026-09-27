import { useEffect, useState } from "react";
import ScheduleItem from "./ScheduleItem";
import { getSchedules } from "../services/api";

function ScheduleList() {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadSchedules() {
    try {
      const data = await getSchedules();
      setSchedules(data);
    } catch (error) {
      console.error("Failed to load schedules:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSchedules();
  }, []);

  const handleUpdated = (updatedSchedule) => {
    setSchedules((current) =>
      current.map((schedule) =>
        schedule.id === updatedSchedule.id
          ? updatedSchedule
          : schedule
      )
    );
  };

  const handleDeleted = (deletedId) => {
    setSchedules((current) =>
      current.filter((schedule) => schedule.id !== deletedId)
    );
  };

  if (loading) {
    return <p>Loading schedules...</p>;
  }

  return (
    <section className="schedule-section">
      <div className="section-header">
        <h2>Schedules</h2>
        <span>{schedules.length} tasks</span>
      </div>

      <div className="schedule-list">
        {schedules.length === 0 ? (
          <p>No schedules yet.</p>
        ) : (
          schedules.map((schedule) => (
            <ScheduleItem
              key={schedule.id}
              schedule={schedule}
              onUpdated={handleUpdated}
              onDeleted={handleDeleted}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default ScheduleList;