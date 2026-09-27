import express from "express";

import {
  getSchedules,
  getSchedule,
  addSchedule,
  editSchedule,
  removeSchedule
} from "../controllers/scheduleController.js";

const router = express.Router();

router.get("/", getSchedules);

router.get("/:id", getSchedule);

router.post("/", addSchedule);

router.put("/:id", editSchedule);

router.delete("/:id", removeSchedule);

export default router;