import { connect } from "mongoose";
import env from "../util/env";

const { DB_URL } = env;

function connectDb() {
  try {
    connect(DB_URL);
    console.log("Connected to Database Successfully");
  } catch (err) {
    console.error("Can't Connect to Database");
    console.log(err);
  }
}

export default connectDb;
