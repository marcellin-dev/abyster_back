// const router = require("express").Router();
import { Router } from "express";
import {
  adddepense,
  Delete,
  getdepense,
  getOneDepense,
  updatedepense,
} from "../controllers/depense.controller.js";

const router = Router();

router.post("/", adddepense);
router.get("/", getdepense);
router.get("/:id", getOneDepense);
router.patch("/:id", updatedepense);
router.delete("/:id", Delete);

export default router;
