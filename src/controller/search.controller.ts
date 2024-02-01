import { Request, Response } from "express";
import FREQ from "../service/service";
import Frequency from "../model/frequecy";
import { compareDominantFreqs } from "../util/method";

async function searchBike(req: Request, res: Response): Promise<Response> {
  try {
    const { make, model, year } = req.body;
    const audioFile = req.file;

    if (!audioFile) {
      return res.status(400).json({ error: "No audio file uploaded" });
    }

    const audioBuffer = audioFile.buffer;
    try {
      const foundBike = await Frequency.findOne({
        year,
        model: { $regex: model, $options: "i" },
        make: { $regex: make, $options: "i" },
      });
      console.log(foundBike);
      if (!foundBike) {
        return res.status(404).json({
          message: "Bike not found Try Another one",
        });
      }
      const response = await FREQ.GET_DOMINANT(audioBuffer);
      const parsedFreqs = response.data.data;
      const db = response.data.db;
      const result = compareDominantFreqs(foundBike.frequencies, parsedFreqs);
      return res.json({
        difference: result.difference,
        prediction: db > 80 ? "custom" : result.prediction,
      });
    } catch (error) {
      // console.log(error);
      return res.status(500).json({
        message: "Unable to search",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
}

export { searchBike };
