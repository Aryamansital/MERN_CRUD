import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.models.Topic || mongoose.model("Task", taskSchema);

export default Task;