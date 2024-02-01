import { Router } from "express";
import upload from "../config/multer.config";
import { addNewBike } from "../controller/admin.controller";
import { validator } from "../middleware";
import { addBikeSchema } from "../schema";

const adminRouter = Router();

adminRouter.post("/add", upload.single("audio"), validator(addBikeSchema), addNewBike);

export default adminRouter;
