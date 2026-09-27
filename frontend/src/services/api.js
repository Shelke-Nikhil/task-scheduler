const API_URL = "/api/schedules";

export async function getSchedules() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch schedules");
  }

  return response.json();
}

export async function createSchedule(schedule) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(schedule)
  });

  if (!response.ok) {
    throw new Error("Failed to create schedule");
  }

  return response.json();
}

export async function updateSchedule(id, schedule) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(schedule)
  });

  if (!response.ok) {
    throw new Error("Failed to update schedule");
  }

  return response.json();
}

export async function deleteSchedule(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  if (!response.ok) {
    throw new Error("Failed to delete schedule");
  }

  return response.json();
}