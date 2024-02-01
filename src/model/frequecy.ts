import { Schema, SchemaTypes, model } from "mongoose";
import { IFrequency } from "./types/index";

const frequencySchema = new Schema<IFrequency>(
  {
    make: {
      type: SchemaTypes.String,
      required: true,
    },
    model: {
      type: SchemaTypes.String,
      required: true,
    },
    year: {
      type: SchemaTypes.Number,
      required: true,
    },
    frequencies: [
      {
        type: SchemaTypes.String,
        required: true,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Frequency = model("Frequency", frequencySchema);

export default Frequency;
