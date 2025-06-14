const mongoose = require('mongoose');

const NOME_DA_COLECAO_PRIMEIRA_LETRA_MINUSCULASchema = new mongoose.Schema({
  customId: {
    type: Number,
    unique: true,
    required: true
  },
  nomeInput1: {
    type: String,
    required: true
  },
  nomeInput2: {
    type: Number,
    required: true
  },
  nomeInput3: {
    type: Number,
    required: true
  }
}, {
  timestamps: true // Isso adiciona createdAt e updatedAt automaticamente
});

module.exports = mongoose.model('NOME_DA_COLECAO_PRIMEIRA_LETRA_MAIUSCULA', NOME_DA_COLECAO_PRIMEIRA_LETRA_MINUSCULASchema);
//POR EXEMPLO, SE O NOME FOR 'Medida' SERÁ CONVERTIDO PARA medidas (MINÚSCULO E NO PLURAL) COMO NOME DA COLEÇÃO.
