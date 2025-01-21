import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  views: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    maxlength: [40, "Use only 40 characters to write description"],
    required: true,
  },
  details: {
    type: String,
    default: "",
  },
});

const ProjectModel =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);
export default ProjectModel;
