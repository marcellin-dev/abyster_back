import mongoose from "mongoose";

const depenseSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
    },

    montant: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },

    user: { type: mongoose.Types.ObjectId, ref: "user", required: true },
  },
  { timestamps: true }
);

const depenseModel = mongoose.model("depense", depenseSchema);
// module.exports = depenseModel;

export default depenseModel;
