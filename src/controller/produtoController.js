import produtoServices from "../services/produtoServices.js";
import mongoose from "mongoose";

async function create(req, res) {
    const { name, type, preco, description, disponibilidade, user } = req.body;

    if (!name || !type || !preco || !description || !disponibilidade || !user) {
        return res.status(400).send({ message: "Campos obrigatórios não preenchidos." });
    }

    try {
        const produto = await produtoServices.createServices(req.body);

        if (!produto) {
            return res.status(400).send({ message: "Erro ao criar produto." });
        }

        res.status(201).send({
            message: "Produto criado com sucesso.",
            produto,
        });
    } catch (error) {
        res.status(500).send({ message: "Erro interno do servidor." });
        console.log(error);
    }
}

async function findAll(req, res) {
    try {
        const produtos = await produtoServices.findAllServices();

        if (!produtos || produtos.length === 0) {
            return res.status(404).send({ message: "Nenhum produto encontrado." });
        }

        res.status(200).send({ message: "Sucesso", produtos });
    } catch (error) {
        res.status(500).send({ message: "Erro interno do servidor." });
        console.log(error);
    }
}

async function findById(req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "ID de produto inválido." });
    }

    try {
        const produto = await produtoServices.findByServices(id);

        if (!produto) {
            return res.status(404).send({ message: "Produto não encontrado." });
        }

        res.status(200).send(produto);
    } catch (error) {
        res.status(500).send({ message: "Erro interno do servidor." });
        console.log(error);
    }
}

async function produtoUpdate(req, res) {
    const { name, type, preco, description, disponibilidade, user } = req.body;
    const id = req.params.id;

    if (!name || !type || !preco || !description || !disponibilidade || !user) {
        return res.status(400).send({ message: "Campos obrigatórios não preenchidos." });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "ID de produto inválido." });
    }

    try {
        const produto = await produtoServices.findByServices(id);

        if (!produto) {
            return res.status(404).send({ message: "Produto não encontrado." });
        }

        await produtoServices.updateServices(id, name, type, preco, description, disponibilidade, user);

        res.status(200).send({ message: "Produto atualizado com sucesso.", produto });
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
        const produto = await produtoServices.deleteServices(id);

        if (!produto) {
            return res.status(404).send({ message: "Produto não encontrado." });
        }

        res.status(200).send({ message: "Produto deletado com sucesso.", produto });
    } catch (error) {
        res.status(500).send({ message: "Erro interno do servidor." });
        console.log(error);
    }
}

async function search(req, res) {
    const { name } = req.query;

    if (!name) {
        return res.status(400).send({ message: "Nome do produto não fornecido." });
    }

    try {
        const produtos = await produtoServices.searchName(name);

        if (produtos.length === 0) {
            return res.status(404).send({ message: "Nenhum produto encontrado." });
        }

        res.status(200).send({ message: "Produtos encontrados.", produtos });
    } catch (error) {
        res.status(500).send({ message: "Erro interno do servidor." });
        console.log(error);
    }
}

export default { create, findAll, findById, produtoUpdate, deleteById, search };
