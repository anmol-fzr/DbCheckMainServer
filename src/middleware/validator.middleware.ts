import { Request, Response, NextFunction } from "express";
import { Schema, ValidationError } from "yup";

const validate = (schema: Schema) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validate(req.body);
    next();
  } catch (err) {
    res.status(400).json({ error: (err as ValidationError).errors });
  }
};

export default validate;
