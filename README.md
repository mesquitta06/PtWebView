# PtView
Projeto de mapemaento e exibição em tempo real de Permissões de trabalho emitidas

<h1>Tecnologias Utilizadas</h1>
<div align="left">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  width = 50/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"  width = 50/>
 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"  width = 50/>
 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg"  width =50/>
  
</div>

<h1> 📄 Sobre o projeto: </h1>
<img src ="https://github.com/mesquitta06/PtWebView/blob/master/img/gif_pt.gif" width= 600 />
<p>A NR 33 estabelece protocolos e procedimentos específicos para realização de quaisquer atividades em área operacional, ou administrativa. Um desses procedimentos, é a PT (Permissão de Trabalho), que consiste em um documento emitido por profissional qualificado, autorizando um indivíduo a realizar determinadas atividades específicas , cumprindo rigorosamente todas as normas de segurança da companhia. </p>
<p>
Sabendo disso , e entendendo como funciona o ambiente operacional de uma distribuidora de combustíveis,   foi desenvolvido o MONITOR DE PTS, que é uma aplicação relativamente simples, porém com o intuito fundamental na Operação. O app, sinaliza onde existem Pt's abertas na unidade, para que todos o time operacional, tenha ciência de tal atividade.
</p>

<h1>Dados técnicos</h1>

Foi utilizado Mysql como banco de dados da aplicação, e a conexão criada atrávés do bloco de código:
```
const sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306
});
sql.query("use ptview");
```
Utilziamos Handlebars como engine de Views.

```
app.engine("handlebars", handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')
app.use('/css', express.static('css'))//render do css, o mesmo vale para script externos. 
app.use('/img', express.static('img'))
```

Por enquanto a aplicação possui 3 rotas, que são direcionadas pelo node js
- A rota "login" é a tela inicial;
- A rota "insert" é onde são cadastradas as Pts;
- A rota "Select" é a tela modal, onde sao exibidos o mapa, os alertas e a tabela com os dados.

```
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

```


<h1> 🎯Resultados obtidos</h1>
Com a implementação do sistema, obtivemos significativa melhoria no controle de atividades, e na segurança e prevenção em áreas de operações críticas.

          
 


