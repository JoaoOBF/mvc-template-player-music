const fs = require('fs');
const path = require('path');

const Item = require('../models/music');
const items = [];

function addItem(name) {
    const id = items.length + 1;
    const newItem = new Item(id, name);
    items.push(newItem);
}

const folderPath = "../assets/musics/";

const projectFolderPath = path.join(__dirname, folderPath);


async function getItems() {
    try {
      console.log(projectFolderPath);
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
  
      return items;
    } catch (error) {
      console.error('Erro ao listar itens da pasta:', error);
      return [];
    }
  }

module.exports = {
    getItems,
};