var express = require('express');
var app = express();
const castelli = require('./lego.json');
app.set('view engine', 'pug');   //Dico a express di usare pug come motore di template

app.use(express.static(__dirname + '/public')); // Dico ad express dove recuperare i file statici

app.get('/', (req, res) => {
  res.render('index', {
    castelli: castelli.castles //Passa il vettore profiles alla pagina index.pug
  });
});

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});