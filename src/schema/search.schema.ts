import { string, number, object } from "yup";

const searchSchema = object({
  make: string().required(),
  model: string().required(),
  year: number()
    .positive()
    .required()
    .test("isYear", "Enter a valid year", (val) => val.toString().length === 4),
});

export default searchSchema;
