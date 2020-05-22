import express from 'express';
import { Table } from './Simbols/Table';
import { Break } from './Expresiones/Break';
import { Continue } from './Expresiones/Continue';
import { Exception } from './utils/Exception';
import { Errores } from "./ManejoErrores/Errores";
import { Importe } from './Otros/Importe';
import { Node } from './Abstract/Node';
import { fstat } from 'fs';
import { json } from 'body-parser';


import {GraficaArbolAts} from './ManejoErrores/GraficaArbolAts'; 


var bodyParser = require("body-parser");
const parser = require('./Grammar/Grammar.js');
const MyParser_300445 = require('./Grammar/graProyecto.js'); // ESTO ME SIRVE PARA LLAMAR A AL ARCHIVO.JISON 
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
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

app.post('/analizar', (req, res) => {
  const { entrada, consola } = req.body;
  if (!entrada) {
    return res.redirect('/');
  }
  //const tree = MyParser_300445.parse(entrada);
  const tree = parser.parse(entrada);
  console.log("entra al arbol:"+ entrada);
  const tabla = new Table(null);
 
  var contador_de_sentencias = 0 ; 
  tree.instructions.map((m: any) => {
    const res = m.execute(tabla, tree);
    contador_de_sentencias++;
    if (res instanceof Break) {
      const error = new Exception('Semantico',
        `Sentencia break fuera de un ciclo XD`,
        res.line, res.column);
      tree.excepciones.push(error);
      tree.console.push(error.toString());
    } else if (res instanceof Continue) {
      const error = new Exception('Semantico',
        `Sentencia continue fuera de un ciclo`,
        res.line, res.column);
      tree.excepciones.push(error); 
      tree.console.push(error.toString());
    }
    console.log("# de sentencias: "+contador_de_sentencias);
  });
  
  res.render('views/index', {
    entrada,
    consola: tree.console,
    errores: tree.excepciones
  });
});































app.post('/analizarYO', (req, res) => {
  Errores.clear();
  const { entrada, consola } = req.body;
  if (!entrada) {
    return res.redirect('/');
  }
 
 const tree = MyParser_300445.parse(entrada); 
 // console.log("entra al arbol:"+ entrada);
  const tabla = new Table(null); // EN ESTE CASO mando null porque previamente no tengo ninguna TABLA 
  console.log("-------------INICIA EL ARBOL----------------");
  console.log(tree);
  console.log("------------------- FIN -------------------");
 /*
  try {
  var json = JSON.stringify(tree,null ,2);
 // console.log(json);
 } catch (error) {
   console.log("ERROR..!!!!!!!!!  AL PARSEAR A JISON ");
 
 }
 */


try{
  tree.instructions.map((m: any) => {
    //console.log(m);
    const res = m.execute(tabla, tree);

  });
}catch(error){
  console.log("ERRORES EN LA ENTRADA  en ejecucion del ATS");
  console.log(Errores.geterror());
}



 
  res.render('views/index', {
    entrada,
    consola: tree.console,
    errores: tree.excepciones
  });
});




app.post('/comunicar/', function (req, res) {
  Errores.clear();// limpiamos la lista 
  var entrada1=req.body.text1;
  var entrada2 = req.body.text2;
  const tree = MyParser_300445.parse(entrada1); 
 // console.log("entra al arbol:"+ entrada);
  const tabla = new Table(null); 

  try{
    tree.instructions.map((m: any) => {
      //console.log(m);
      const res = m.execute(tabla, tree);
  
    });
  }catch(error){
    console.log("ERRORES EN LA ENTRADA  en ejecucion del ATS");
    console.log(Errores.geterror());
     res.send(Errores.geterror());
  }
  


});



 /*     ESTE ES PARA EL AST */
app.post('/ats/', function (req, res) { // PARA ESTA FUNCION SOLO ES NECESARIA UNA ENTRADA DE TEXTO 
  GraficaArbolAts.clear();
  Errores.clear();
  var entrada1 = req.body.text1;
  const tree = MyParser_300445.parse(entrada1);
  const tabla = new Table(null);
  if (Errores.hay_errores()) {
    res.send("LA ENTRADA POSEEE ERRORES , NO SE PUEDE GENERAR EL REPORTE");
  } else {
    GraficaArbolAts.add("<ul>\n");
    GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>Raiz\n");
    GraficaArbolAts.add("<ul>\n");
    try {
      tree.instructions.map((m: any) => {
      const res = m.execute(tabla, tree);
      });
    } catch (error) {
      console.log("ERROR al utilizar el metodo abstracto EXECUTE del ATS");
    }

    /*     COMIENZO A RECORRER EL ARBOL PARA ELLO SE VALIDO QUE NO VINIERA CON ERRORES */

    GraficaArbolAts.add("</ul>\n");
    GraficaArbolAts.add("</li>\n");
    GraficaArbolAts.add("</ul>\n");


    // pueden haber errores semanticos 
    if (Errores.hay_errores()) {
      res.send("LA ENTRADA POSEEE ERRORES , NO SE PUEDE GENERAR EL REPORTE");
    } else {
      res.send(GraficaArbolAts.cadena);
    }

  }

});


/*   ESTE ES PARA ERRORES */
app.post('/errores/', function (req, res) { // SOLO ES NECESARIO UNA ENTRADA DE TEXTO 
  Errores.clear();// limpiamos la lista 
  var entrada1 = req.body.text1;
  const tree = MyParser_300445.parse(entrada1);
  const tabla = new Table(null);
    
  if(Errores.hay_errores()){
    console.log(Errores.geterror());
    res.send(Errores.geterror());
  }else{
    // toca recorrerlo para ver si no hay errores semanticos 
    try {
      tree.instructions.map((m: any) => {
      const res = m.execute(tabla, tree);
  
    });
    } catch (error) {
      console.log("ERRORES EN LA ENTRADA  en ejecucion del ATS");
    }
    if(Errores.hay_errores()){
      console.log(Errores.geterror());
      res.send(Errores.geterror());

    }else{

      console.log("ENTRADA OK ");
      res.send("ENTRADA LIBRE DE ERRORES");
    }
    

  }

});



