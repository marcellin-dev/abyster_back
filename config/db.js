import mongoose from "mongoose";
const { connect } = mongoose;

let LINK_LOCAL = "mongodb://localhost:27017/abyster";
let LINK_ONLINE =
  "mongodb+srv://marc:AcsTN9V5qUL6qUzD@cluster0.txtzh.mongodb.net/abyster_bd";
connect(LINK_ONLINE).then(
  () => {
    console.log("connexion reussi a mongo db ");
  },
  (err) => {
    console.log("erreur de connexion " + err);
  }
);
