import loginServices from "../services/loginServices.js";

async function login(req, res) {
  const { password, email } = req.body;

  if (!password || !email) {
    return res.status(400).send({ message: "Campos obrigatórios não preenchidos." });
  }

  try {
    const user = await loginServices.loginServices(email);

    if (!user) {
      return res.status(404).send({ message: "Usuário não encontrado." });
    }

    console.log(req.body)
    console.log(user.email , user.password)

    if (email != user.email || password != user.password) {
      return res.status(400).send({ message: "E-mail ou senha inválido." });
    }

    const token = loginServices.generateToken(user.id);

    res.status(200).send({ message: "Sucesso! Seja bem-vindo.", user, token });
  } catch (error) {
    res.status(500).send({ message: "Erro interno do servidor." });
  }
}

export default { login };
