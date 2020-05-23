import express from 'express';
import { Table } from './Simbols/Table';
import { Break } from './Expresiones/Break';
import { Continue } from './Expresiones/Continue';
import { json } from 'body-parser';
import {Rep} from './REPORTES/Rep';
import { GraficaArbolAts } from './ManejoErrores/GraficaArbolAts';
import { Clase } from './REPORTES/Clase';
import { Exception } from './utils/Exception';
import { Errores } from "./ManejoErrores/Errores";
import { Importe } from './Otros/Importe';
import { Node } from './Abstract/Node';
import { fstat } from 'fs';


var bodyParser = require("body-parser");
const parser = require('./Grammar/Grammar.js');
const MyParser_300445 = require('./Grammar/graProyecto.js'); 
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.set('views', __dirname);
app.use(express.urlencoded());
app.use(express.json());
app.use(bodyParser.json());

app.listen(port, err => {


  return console.log(`server is listening on ${port}`);
});

app.get('/', (req, res) => {
  res.render('views/index', {
    entrada: '',
    consola: [],
    errores: []
  });
}).get('/analizarYO', (req, res) => {
  res.render('views/index', {
    entrada: '',
    consola: [],
    errores: []
  });
});

app.post('/errores/', function (req, res) {
  GraficaArbolAts.clear();
  Errores.clear();
  Rep.clear();
  var entrada1 = req.body.text1;
  const tree = MyParser_300445.parse(entrada1);
  const tabla = new Table(null);
    
  if(Errores.hay_errores()){
    console.log(Errores.geterror());
    res.send(Errores.geterror());
  }else{
   
    try {
      tree.instructions.map((m: any) => {
      const res = m.execute(tabla, tree);
  
    });
    } catch (error) {
    //console.log("errores en la entrada ejecucion del ast");
    }
    if(Errores.hay_errores()){
      console.log(Errores.geterror());
      res.send(Errores.geterror());

    }else{

      console.log("entrada correcta ");
      res.send("Entrada Sin Errores");
    }
    

  }

});


app.post('/ats/', function (req, res) { 
  GraficaArbolAts.clear();
  Errores.clear();
  Rep.clear();
  var entrada1 = req.body.text1;
  const tree = MyParser_300445.parse(entrada1);
  const tabla = new Table(null);
  if (Errores.hay_errores()) {
    res.send("La entrada Tiene errores , No se puede crear el reporte");
  } else {
    GraficaArbolAts.add("<ul>\n");
    GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>Raiz\n");
    GraficaArbolAts.add("<ul>\n");
    try {
      tree.instructions.map((m: any) => {
      const res = m.execute(tabla, tree);
      });
    } catch (error) {
      console.log("Error al realizar el metodo execute del ast");
    }
    GraficaArbolAts.add("</ul>\n");
    GraficaArbolAts.add("</li>\n");
    GraficaArbolAts.add("</ul>\n");
    if (Errores.hay_errores()) {
      res.send("La entrada Tiene errores , No se puede crear el reporte");
    } else {
      res.send(GraficaArbolAts.cadena);
    }

  }

});

app.post('/reportes/', function (req, res) { 
  console.log("°°°°°°°°REPORTE DE COPIAS PETICION°°°°°°°°°");
  GraficaArbolAts.clear();
  Errores.clear();
  Rep.clear(); 
  console.log(req.body);
  var entrada1 = req.body.text1;
  var entrada2 = req.body.text2;
  const tree1 = MyParser_300445.parse(entrada1);
  const tabla1 = new Table(null);
  
  Rep.t1 = true ; 
    try { 
    tree1.instructions.map((m: any) => {
      const res = m.execute(tabla1, tree1);
    });
  } catch (error) {
    console.log("ERRORES en la entrada1 EJECUCION ATS ");
    console.log(Errores.geterror());
  }
Rep.t1 = false;
const tree2 = MyParser_300445.parse(entrada2);
const tabla2 = new Table(null);
Rep.t2 = true;
  try { 
  tree2.instructions.map((m: any) => {
    const res = m.execute(tabla2, tree2);
  });
} catch (error) {
  console.log("ERRORES en la entrada1 EJECUCION ATS ");
  console.log(Errores.geterror());
}
Rep.t2 = false; 
Rep.DeterminarCopiaClases();
console.log(Rep.ListaVariablesCopia);
res.send(Rep.getHTML());
});
