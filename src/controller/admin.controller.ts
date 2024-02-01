import { Request, Response } from "express";
import Frequency from "../model/frequecy";
import FREQ from "../service/service";

async function addNewBike(req: Request, res: Response): Promise<Response> {
  try {
    const make = req?.body?.make;
    const model = req?.body?.model;
    const year = req?.body?.year;

    if (!make || !model || !year) {
      return res.json({
        message: "make, model, year are required",
      });
    }

    const audioFile = req.file;

    if (!audioFile) {
      return res.status(400).json({ message: "No audio file uploaded" });
    }

    const audioBuffer = audioFile.buffer;

    try {
      const response = await FREQ.GET_DOMINANT(audioBuffer);
      console.log(response);
      console.log(response.data.data);

      const frequecy = new Frequency({
        make,
        model,
        year,
        frequencies: response.data.data,
      });
      const savedFreq = await frequecy.save();
      if (savedFreq) {
        return res.json({
          data: savedFreq,
        });
      }
      return res.json({
        message: "Unable to add new Bike Data",
      });
    } catch (error) {
      console.log(error);
      return res.json({
        message: "Something Went Wrong",
        error,
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
}

export { addNewBike };
