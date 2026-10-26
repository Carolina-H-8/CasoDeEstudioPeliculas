require("dotenv").config();

const express = require("express");
const prisma = require("../prisma");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "API funcionando correctamente" });
});

app.get("/genres", async (req, res) => {
    try {
        const genres = await prisma.genre.findMany();
        res.json(genres);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al consultar géneros" });
    }
});

app.post("/genres", async (req, res) => {
    try {
        const genre = await prisma.genre.create({
            data: {
                name: req.body.name,
                description: req.body.description
            }
        });

        res.status(201).json(genre);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear el género" });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});