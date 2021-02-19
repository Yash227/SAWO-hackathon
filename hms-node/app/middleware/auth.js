const db = require("../models");
const axios = require("axios");

const Patient = db.patient;

verifyToken = (req, rep, next) => {
  let token = req.body;

  if (!token) {
    return rep.status(403).send({ msg: "No token" });
  }

  axios
    .post("https://api.sawolabs.com/api/v1/userverify/", { user_id: token.user_id })
    .then((rep) => {
      if (rep.status === 200 && rep.data.verification_token === token.verification_token) {
        Patient.findOne({
          email: token.identifier,
        }).exec((err, pat) => {
          if (err) {
            return rep.status(403).send({ msg: "Error" });
          }

          if (!pat) {
            return rep.status(401).send({ msg: "Unauthorized" });
          }

          req.uid = pat.id;
          req.urole = "patient";
          next();
        });
      } else {
        return rep.status(401).send({ msg: "Unauthorized" });
      }
    })
    .catch((err) => {
      console.log(err);
      return rep.status(403).send({ msg: "Error" });
    });
};

const auth = {
  verifyToken,
};

module.exports = auth;
