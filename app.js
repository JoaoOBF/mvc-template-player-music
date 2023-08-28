const express = require('express');
const app = express();
const port = 3000;

const musicController = require('./controllers/musicController');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/assets', express.static('assets'));
app.use('/views', express.static('views'));

app.get('/', musicController.getIndex);
app.get('/:id', musicController.getById);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});