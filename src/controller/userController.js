const { default: mongoose } = require("mongoose");
const userServices = require("../services/userServices")

const create = async (req, res) => {
  var { name,
    email,
    password,
    endereco,
    carrinho } = req.body;


  if (!name || !email || !password || !endereco || !carrinho) {
    return res.status(400).json({ message: "error" });
  }

  const user = await userServices.create(req.body);

  if (!user) {
    return res.status(400).send({ message: "error ao criar usuario" });
  }

  res.status(201).send({
    message: "Sucesso",
    user: {
      id: user._id,
      name,
      email,
      password,
      endereco,
      carrinho
    }
  });
};

async function findAll (req , res)  {
  
  const users = await userServices.findAllServices();

  if(users == null || users.length === 0){
    return res.status(400).send({ message: "error ao achar usuarios"});
  }

  res.status(200).send({message: "sucesso" , users})

}

async function findById (req ,res){
  const id  = req.params.id;

  if(mongoose.Types.ObjectId.isValid(id) ){
    return res.status(400).send({message: "Usuario nao existe"})
  }

  const user = await userServices.findByServices(id)

  if(!user){
    return res.status(400).send({message: "erro ao achar usuario"})
  }

  res.send(user);
}

module.exports = { create , findAll , findById};
