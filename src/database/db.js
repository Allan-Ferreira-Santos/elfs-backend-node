const mongoose = require('mongoose');
const url = 'mongodb+srv://Elfs:elfs1234@elfs.t18lqj4.mongodb.net/';

const connectDB = async () => {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conectado ao MongoDB com sucesso!');
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
  }
};

module.exports = connectDB;