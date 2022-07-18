import mongoose from "mongoose";

const revenuSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
    },

    montant: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },

    user: { type: mongoose.Types.ObjectId, ref: "user", required: true },
  },
  { timestamps: true }
);

const revenuModel = mongoose.model("revenu", revenuSchema);
// module.exports = revenuModel;

export default revenuModel;
