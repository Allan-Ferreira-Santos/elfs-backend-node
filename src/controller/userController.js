import userServices from "../services/userServices.js";
import mongoose from "mongoose";

async function create(req, res) {
  const { name, email, password, endereco, typeUser } = req.body;

  if (!name || !email || !password || !endereco || !typeUser) {
    return res.status(400).send({ message: "Campos obrigatórios não preenchidos." });
  }
  

  try {
    const user = await userServices.createServices(req.body);

    if (!user) {
      return res.status(400).send({ message: "Erro ao criar usuário." });
    }

    res.status(201).send({
      message: "Usuário criado com sucesso.",
      user: {
        id: user._id,
        name,
        email,
        password,
        endereco,
        typeUser,
      },
    });
  } catch (error) {
    res.status(500).send({ message: "Erro interno do servidor." });
    console.log(error);
  }
}

async function findAll(req, res) {
  try {
    const users = await userServices.findAllServices();

    if (!users || users.length === 0) {
      return res.status(404).send({ message: "Nenhum usuário encontrado." });
    }

    res.status(200).send({ message: "Sucesso", users });
  } catch (error) {
    res.status(500).send({ message: "Erro interno do servidor." });
    console.log(error);
  }
}

async function findById(req, res) {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "ID de usuário inválido." });
  }

  try {
    const user = await userServices.findByServices(id);

    if (!user) {
      return res.status(404).send({ message: "Usuário não encontrado." });
    }

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: "Erro interno do servidor." });
    console.log(error);
  }
}

async function userUpdate(req, res) {
  const { name, email, password, endereco, typeUser } = req.body;
  const id = req.params.id;

  if (!name && !email && !password && !endereco && !typeUser) {
    return res.status(400).json({ message: "Nenhum campo para atualizar foi fornecido." });
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "ID de usuário inválido." });
  }

  try {
    const user = await userServices.findByServices(id);

    if (!user) {
      return res.status(404).send({ message: "Usuário não encontrado." });
    }


    await userServices.userUpdateServices(
      id,
      name,
      email,
      password,
      endereco,
      typeUser
    );

    res.status(200).send({ message: "Usuário atualizado com sucesso.", user });
  } catch (error) {
    res.status(500).send({ message: "Erro interno do servidor." });
    console.log(error);
  }
}

async function deleteById(req, res) {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "ID de produto inválido." });
  }

  try {
    const user = await userServices.deleteServices(id);

    if (!user) {
      return res.status(404).send({ message: "Produto não encontrado." });
    }

    res.status(200).send({ message: "Produto deletado com sucesso.", user });
  } catch (error) {
    res.status(500).send({ message: "Erro interno do servidor." });
    console.log(error);
  }
}

export default { create, findAll, findById, userUpdate, deleteById };
