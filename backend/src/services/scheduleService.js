import {
  getAllSchedules,
  getScheduleById,
  createSchedule,
  updateSchedule,
  deleteSchedule
} from "../models/scheduleModel.js";

export async function fetchSchedules() {
  return getAllSchedules();
}

export async function fetchSchedule(id) {
  return getScheduleById(id);
}

export async function addSchedule(schedule) {
  return createSchedule(schedule);
}

export async function modifySchedule(id, schedule) {
  return updateSchedule(id, schedule);
}

export async function removeSchedule(id) {
  return deleteSchedule(id);
}