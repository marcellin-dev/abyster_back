import revenuModel from "../models/revenu.js";

const addRevenu = async (req, res) => {
  const user = res.locals.user;

  console.log("user ", user);
  const { nom, montant, description } = req.body;

  try {
    const revenu = await revenuModel.create({
      nom,
      montant,
      description,
      user: user.id,
    });

    res.status(201).json({ message: "revenu ajouté avec success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "une erreur est survenu" });
  }
};

const getRevenu = async (req, res) => {
  const user = res.locals.user;

  try {
    let revenus = await revenuModel.find({ user: user.id });
    res.status(200).json({ revenus, message: "ok" });
  } catch (err) {
    res.status(500).json({ message: "une erreur est survenu" });
  }
};

const updateRevenu = async (req, res) => {
  const user = res.locals.user;
  const id = req.params.id;

  const { nom, montant, description } = req.body;

  try {
    let revenus = await revenuModel.findByIdAndUpdate(
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

    res.status(200).json({ revenus, message: "ok" });
  } catch (err) {
    res.status(500).json({ message: "une erreur est survenu" });
  }
};

const getOneRevenu = async (req, res) => {
  const user = res.locals.user;
  const id = req.params.id;

  try {
    let depenses = await revenuModel.findById(id);

    res.status(200).json({ depenses, message: "ok" });
  } catch (err) {
    res.status(500).json({ message: "une erreur est survenu" });
  }
};
const Delete = async (req, res) => {
  const user = res.locals.user;
  const id = req.params.id;

  try {
    let depenses = await revenuModel.findByIdAndDelete(id);

    res.status(200).json({ depenses, message: "ok" });
  } catch (err) {
    res.status(500).json({ message: "une erreur est survenu" });
  }
};
export { addRevenu, getRevenu, updateRevenu, getOneRevenu, Delete };
