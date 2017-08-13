const restful = require('node-restful')
const mongoose = restful.mongoose

const clienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  telefone: { type: Number, min: 0, required: true },
  dataNascimento : {type: Date, required: false}
})

module.exports = restful.model('cliente', clienteSchema)