const mongoose = require("mongoose");

const moradorSchema = new mongoose.Schema({
  apartamento: {
    type: Number,
    require: true,
  },
  nome: {
    type: String,
    require: true,
  },
  cpf: {
    type: Number,
    require: true,
  },
  data_nascimento: {
    type: String,
    require: true,
  },
  telefone: {
    type: Number,
    require: true,
  },
  vaga: {
    type: Number,
    require: true,
  },
  marca: {
    type: String,
    require: true,
  },
  modelo: {
    type: String,
    require: true,
  },
  ano: {
    type: Number,
    require: true,
  },
  placa: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Morador", moradorSchema);
