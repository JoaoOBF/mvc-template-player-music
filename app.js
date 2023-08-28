const express = require('express');
const app = express();
const port = 3000;
const itemController = require('./controllers/musicController');
itemController.loadAndAddItems();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/assets', express.static('assets'));
app.use('/views', express.static('views'));

app.get('/', async (req, res) => {
    try {
        const items = await itemController.getItems();
        res.render('index', { items });
    } catch (error) {
        console.error('Erro ao renderizar a página:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

app.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const item = itemController.getById(id);
        console.log(item)
        res.render('details', { item });
    } catch (error) {
        console.error('Erro ao renderizar a página:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});