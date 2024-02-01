import { Router } from "express";
import upload from "../config/multer.config";
import { searchBike } from "../controller/search.controller";
import { validator } from "../middleware";
import { searchSchema } from "../schema";

const router = Router();

router.post("/search", upload.single("audio"), validator(searchSchema), searchBike);

export default router;
