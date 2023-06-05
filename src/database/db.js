import mongoose from "mongoose";
console.log(process.env.MONGO_DB)
const url = process.env.MONGO_DB

const connectDB = async () => {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conectado ao MongoDB com sucesso!');
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
  }
};

export default connectDB;