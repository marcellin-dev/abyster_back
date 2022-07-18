import { Router } from "express";
import { checkUser } from "../middlewares/auth.middleware.js";
const router = Router();
import authRoutes from "./auth.route.js";
import revenuRoutes from "./revenu.route.js";
import depenseRoutes from "./depense.route.js";

//homme route
router.get("/", (req, res) => {
  console.log("yes");
  res.status(200).json({ message: "welcome yoo" });
});

//auh routes
router.use("/auth", authRoutes);
router.use("/revenu", checkUser, revenuRoutes);
router.use("/depense", checkUser, depenseRoutes);

export default router;
