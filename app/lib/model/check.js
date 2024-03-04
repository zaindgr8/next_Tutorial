import mongoose from "mongoose";

const checkModel = new mongoose.Schema({
  name: String,
});

export const Check =
  mongoose.models.checks || mongoose.model("check", checkModel);
