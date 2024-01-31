import { Schema, SchemaTypes, model } from "mongoose";
import { IBike } from "./types";

const bikeSchema = new Schema<IBike>(
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
      type: SchemaTypes.Date,
      required: true,
    },
    type: {
      type: SchemaTypes.String,
      required: true,
    },
    engine: {
      type: SchemaTypes.String,
      required: true,
    },
    power: {
      type: SchemaTypes.String,
    },
    top_speed: {
      type: SchemaTypes.String,
    },
    gearbox: {
      type: SchemaTypes.String,
    },
    frame: {
      type: SchemaTypes.String,
    },
    front_suspension: {
      type: SchemaTypes.String,
      required: true,
    },
    rear_suspension: {
      type: SchemaTypes.String,
      required: true,
    },
    front_tire: {
      type: SchemaTypes.String,
      required: true,
    },
    rear_tire: {
      type: SchemaTypes.String,
      required: true,
    },
    front_brakes: {
      type: SchemaTypes.String,
      required: true,
    },
    rear_brakes: {
      type: SchemaTypes.String,
      required: true,
    },
    dry_weight: {
      type: SchemaTypes.String,
    },
    starter: {
      type: SchemaTypes.String,
      required: true,
    },
    compression: {
      type: SchemaTypes.String,
      required: true,
    },
    cooling: {
      type: SchemaTypes.String,
      enum: {
        values: ["Air", "Liquid"],
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const bike = model("bike", bikeSchema);

export default bike;
