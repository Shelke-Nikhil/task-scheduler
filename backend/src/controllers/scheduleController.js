import {
  getAllSchedules,
  getScheduleById,
  createSchedule,
  updateSchedule,
  deleteSchedule
} from "../models/scheduleModel.js";

export async function getSchedules(req, res, next) {
  try {
    const schedules = await getAllSchedules();

    res.json(schedules);
  } catch (error) {
    next(error);
  }
}

export async function getSchedule(req, res, next) {
  try {
    const schedule = await getScheduleById(req.params.id);

    if (!schedule) {
      return res.status(404).json({
        message: "Schedule not found"
      });
    }

    res.json(schedule);
  } catch (error) {
    next(error);
  }
}

export async function addSchedule(req, res, next) {
  try {
    const schedule = await createSchedule(req.body);

    res.status(201).json(schedule);
  } catch (error) {
    next(error);
  }
}

export async function editSchedule(req, res, next) {
  try {
    const schedule = await updateSchedule(
      req.params.id,
      req.body
    );

    if (!schedule) {
      return res.status(404).json({
        message: "Schedule not found"
      });
    }

    res.json(schedule);
  } catch (error) {
    next(error);
  }
}

export async function removeSchedule(req, res, next) {
  try {
    const schedule = await deleteSchedule(req.params.id);

    if (!schedule) {
      return res.status(404).json({
        message: "Schedule not found"
      });
    }

    res.json({
      message: "Schedule deleted",
      schedule
    });
  } catch (error) {
    next(error);
  }
}