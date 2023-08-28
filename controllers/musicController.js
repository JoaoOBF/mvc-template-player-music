const fs = require('fs');
const path = require('path');

const folderPath = "../assets/musics/";
const projectFolderPath = path.join(__dirname, folderPath);

const Item = require('../models/music');
const musics = [];

function addItem(name) {
    const id = musics.length + 1;
    const itemNameWithoutExtension = name.split('.').slice(0, -1).join('.');
    const newItem = new Item(id, itemNameWithoutExtension, `/assets/musics/${name}`, `/assets/imgs/${itemNameWithoutExtension}.webp`);
    musics.push(newItem);
}

async function getItems() {
    try {
        return musics;
    } catch (error) {
        console.error('Erro ao listar itens da pasta:', error);
        return [];
    }
}

function getById(id) {
    try {
        return musics[id];
    } catch (error) {
        console.error('Erro ao listar itens da pasta:', error);
        return [];
    }
}

async function loadAndAddItems() {
    try {
        const items = await new Promise((resolve, reject) => {
            fs.readdir(projectFolderPath, (err, items) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(items);
            });
        });

        for (const item of items) {
            addItem(item);
        }
    } catch (error) {
        console.error('Erro ao carregar itens:', error);
    }
}

const routesController = {
    getIndex: async (req, res) => {
        try {
            const items = await getItems();
            res.render('index', { items });
        } catch (error) {
            console.error('Erro ao renderizar a página:', error);
            res.status(500).send('Erro interno do servidor');
        }
    },

    getById: async (req, res) => {
        try {
            const id = req.params.id;
            const item = await getById(id);
            res.render('details', { item });
        } catch (error) {
            console.error('Erro ao renderizar a página:', error);
            res.status(500).send('Erro interno do servidor');
        }
    }
};

loadAndAddItems()

module.exports = routesController;

