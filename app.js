const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlebars = require('express-handlebars');
const app = express();
const moment = require("moment");


const current_data = moment();



//Passar os dados do formulário para o banco de dados
const urlencoderParser = bodyParser.urlencoded({ extended: false });

//cria a conexao com o banco de dados
const sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306
});
sql.query("use ptview");
//Template Engine

app.engine("handlebars", handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')
app.use('/css', express.static('css'))//render do css, o mesmo vale para script externos. 
app.use('/img', express.static('img'))





//Routes
app.get("/", function (req, res) {
    res.render('login');
});
app.get("/insert", function (req, res) {
    res.render("insert");
});
app.get("/select", function (req, res) {
    if(!req.params.id){
        sql.query("select * from permissao_trabalho" , function(err,results,fields){
            res.render('select', {data:results});
        });

    }
  
});
//Obtém data e hora atual
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
today.toISOString();

app.post("/controllerForm", urlencoderParser, function (req, res) {
    sql.query("insert into permissao_trabalho values (?,?,?,?,?,?,?)",
        [req.body.cod,
        req.body.emitente,
        req.body.requisitante,
        req.body.participantes,
        req.body.localizacao,
        req.body.descricao,
        today,
        
    ]);
        res.render('controllerForm');
    
});



//Startserver
app.listen(3000, function (req, res) {
    console.log('Server on')
})