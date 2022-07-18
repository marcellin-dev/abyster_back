// const router = require("express").Router();
import { Router } from "express";
import {
  addRevenu,
  Delete,
  getOneRevenu,
  getRevenu,
  updateRevenu,
} from "../controllers/revenu.controller.js";

const router = Router();

router.post("/", addRevenu);
router.get("/", getRevenu);
router.patch("/:id", updateRevenu);
router.get("/:id", getOneRevenu);
router.delete("/:id", Delete);

export default router;
