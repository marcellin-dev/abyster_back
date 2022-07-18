import depenseModel from "../models/depense.js";

const adddepense = async (req, res) => {
  const user = res.locals.user;

  console.log("user ", user);
  const { nom, montant, description } = req.body;

  try {
    const depense = await depenseModel.create({
      nom,
      montant,
      description,
      user: user.id,
    });

    res.status(201).json({ message: "depense ajouté avec success" });
  } catch (error) {
    console.log("error -----", error);
    res.status(500).json({ message: "une erreur est survenu" });
  }
};

const getdepense = async (req, res) => {
  const user = res.locals.user;

  try {
    let depenses = await depenseModel.find({ user: user.id });
    res.status(200).json({ depenses, message: "ok" });
  } catch (err) {
    res.status(500).json({ message: "une erreur est survenu" });
  }
};

const updatedepense = async (req, res) => {
  const user = res.locals.user;
  const id = req.params.id;

  const { nom, montant, description } = req.body;

  try {
    let depenses = await depenseModel.findByIdAndUpdate(
      id,

      {
        $set: {
          nom: nom,
          description: description,
          montant: montant,
        },
      },
      { new: true, upsert: true }
    );

    res.status(200).json({ depenses, message: "ok" });
  } catch (err) {
    res.status(500).json({ message: "une erreur est survenu" });
  }
};

const getOneDepense = async (req, res) => {
  const user = res.locals.user;
  const id = req.params.id;

  const { nom, montant, description } = req.body;

  try {
    let depenses = await depenseModel.findById(id);

    res.status(200).json({ depenses, message: "ok" });
  } catch (err) {
    res.status(500).json({ message: "une erreur est survenu" });
  }
};
const Delete = async (req, res) => {
  const user = res.locals.user;
  const id = req.params.id;

  const { nom, montant, description } = req.body;

  try {
    let depenses = await depenseModel.findByIdAndDelete(id);

    res.status(200).json({ depenses, message: "ok" });
  } catch (err) {
    res.status(500).json({ message: "une erreur est survenu" });
  }
};
export { adddepense, getdepense, updatedepense, getOneDepense, Delete };
