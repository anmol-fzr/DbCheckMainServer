import { Router, Request, Response } from "express";
import axios from "axios";
import upload from "../config/multer.config";
import FREQ from "../service/service";

const router = Router();

router.post("/upload-audio", upload.single("audio"), (req: Request, res: Response) => {
  const audioFile = req.file;

  if (!audioFile) {
    return res.status(400).json({ error: "No audio file uploaded" });
  }

  console.log("Audio file uploaded:", audioFile.originalname);
  console.log("File size:", audioFile.size);
  console.log("Buffer:", audioFile.buffer); // Access the audio data

  const audioBuffer = audioFile.buffer;

  FREQ.GET_DOMINANT(audioBuffer)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  return res.json({
    name: "Anmol",
  });
});

export default router;
