import { Router } from "express";
import todoRoutes from "./todos.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the Root page for Todos API"));
router.use("/", todoRoutes);

export default router;
