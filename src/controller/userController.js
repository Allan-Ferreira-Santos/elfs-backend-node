import userServices from "../services/userServices.js";

async function create(req, res) {

  const { name,
    email,
    password,
    endereco,
    carrinho } = req.body;


  if (!name || !email || !password || !endereco || !carrinho) {
    return res.status(400).send({ message: "error" });
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

async function findAll(req, res) {

  const users = await userServices.findAllServices();

  if (users == null || users.length === 0) {
    return res.status(400).send({ message: "error ao achar usuarios" });
  }

  res.status(200).send({ message: "sucesso", users })

}

async function findById(req, res) {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Usuario nao existe" })
  }

  const user = await userServices.findByServices(id)

  if (!user) {
    return res.status(400).send({ message: "erro ao achar usuario" })
  }

  res.send(user);
}

async function userUpdate(req, res) {

  const { name,
    email,
    password,
    endereco,
    carrinho } = req.body;

  if (!name && !email && !password && !endereco && !carrinho) {
    return res.status(400).json({ message: "error" });
  }

  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Usuario nao existe" })
  }

  const user = await userServices.findByServices(id);

  console.log("log" + user);

  if (!user) {
    return res.status(400).send({ message: "erro ao achar usuario" })
  }

  await userServices.userUpdateServices(
    id,
    name,
    email,
    password,
    endereco,
    carrinho
  );

  res.status(200).send({
    message: "sucesso",
  })



}

export default { create, findAll, findById, userUpdate };
