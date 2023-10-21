const express = require('express')
const database = require('./configs/database')

// conexão com o banco de dados
database.mongoose
  .connect(database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("Conexão estabelecida com o banco de dados.");
  }).catch(err => {
    console.log("Não conseguiu conectar com o banco de dados.", err);
    process.exit();
  });

// criando uma aplicação express
const app = express();

// definindo que vamos enviar e receber JSON na requisição
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// definindo nossas rotas
var promocaoRoute = require('./routes/promocaoRoute');
app.use('/', promocaoRoute);

var clienteRoute = require('./routes/clienteRoute');
app.use('/', clienteRoute);

var funcionarioRoute = require('./routes/funcionarioRoute');
app.use('/', funcionarioRoute);

var carroRoute = require('./routes/carroRoute');
app.use('/', carroRoute);

var esportivoRoute = require('./routes/esportivoRoute');
app.use('/', esportivoRoute);

var utilitarioRoute = require('./routes/utilitarioRoute');
app.use('/', utilitarioRoute);

var reservaRoute = require('./routes/reservaRoute');
app.use('/', reservaRoute);

// definindo nossa porta e host
const PORT = 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Servidor executando na porta ${PORT}.`);
});
