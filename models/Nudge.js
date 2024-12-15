const mongoose = require("mongoose");

const NudgeSchema = new mongoose.Schema(
  {
    eventTag: { type: String, required: true },
    title: { type: String, required: true, maxlength: 60 },
    imageUrl: { type: String, required: true },
    scheduleDate: { type: Date, required: true },
    timings: {
      from: { type: String, required: true },
      to: { type: String, required: true },
    },
    description: { type: String, required: true },
    icon: { type: String, required: true },
    oneLineInvite: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Nudge", NudgeSchema);

