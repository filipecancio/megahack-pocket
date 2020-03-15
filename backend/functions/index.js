/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
const functions = require("firebase-functions");
const app = require("express")();
const admin = require("firebase-admin");

//Initialize the firebase functions
admin.initializeApp();

//Initialize the firestore
const db = admin.firestore().collection("base");

app.get("/inicio", (request, response) => {
  db.get().then(docs => {
    let base = [];

    docs.forEach(doc => {
      base.push(doc.data());
    });

    response.json(base);
  });
});
app.post("/inicio", (request, response) => {
  const newBase = request.body;
  db.add(newBase).then(() => {
    response.status(200).json(null);
  });
});

exports.api = functions.https.onRequest(app);
