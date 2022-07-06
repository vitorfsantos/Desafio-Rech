const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://admin:admin@pestana.e5lf1su.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDB Atlas conectado."))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
