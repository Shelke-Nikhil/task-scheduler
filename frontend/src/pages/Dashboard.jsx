import Header from "../components/Header";
import ScheduleForm from "../components/ScheduleForm";
import ScheduleList from "../components/ScheduleList";

function Dashboard() {
  return (
    <div className="app">
      <Header />

      <main className="container">
        <section className="welcome">
          <div>
            <p className="eyebrow">MY SCHEDULE</p>
            <h1>Today's Schedule</h1>
            <p className="date">
              {new Date().toLocaleDateString("en-IN", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
              })}
            </p>
          </div>
        </section>

        <ScheduleForm />
        <ScheduleList />
      </main>
    </div>
  );
}

export default Dashboard;