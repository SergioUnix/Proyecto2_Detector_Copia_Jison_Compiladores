import { Node } from "../Abstract/Node"
import { Table } from "../Simbols/Table";
import { Tree } from "../Simbols/Tree";
import { Exception } from "../utils/Exception";
import { types, Type } from "../utils/Type";
import { Continue } from "../Expresiones/Continue";
import { Break } from "../Expresiones/Break";
import { Simbol } from "../Simbols/Simbol";
import { Return_metodo } from "./Return_metodo";
let CNodoError=require('../ManejoErrores/NodoError');
let CErrores=require('../ManejoErrores/Errores');
/**
 * @class Inserta una nueva variable en la tabla de simbolos
 */

import {GraficaArbolAts} from '../ManejoErrores/GraficaArbolAts'; 
import { Rep } from "../REPORTES/Rep";
import { Metodo } from "../REPORTES/Metodo";
export class DeclaracionFuncion extends Node {
    type: Type;
    identifier: string;
    value: Node;
    
    /**
     * @constructor Crea el nodo instruccion para la sentencia Declaracion
     * @param type Tipo de la variable
     * @param identifier nombre de la variable
     * @param value valor de la variable
     * @param line Linea de la sentencia if
     * @param column Columna de la sentencia if
     */
    constructor(type: Type, identifier: string, OpcionMetodoFUncion: Node, line: Number, column: Number) {
        super(type, line, column);
        this.identifier = identifier;
        this.value = OpcionMetodoFUncion;
    }

    execute(table: Table, tree: Tree) :any{
        if(Rep.t1 == true || Rep.t2 == true){
            Rep.nombreMetodoActual = this.identifier; 
            Rep.addMetodo( Rep.claseActual.id , new Metodo( this.identifier , this.type.toString() ));
        }
      


        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>DeclaracionFunciones\n"); 

        /*ACA HAY UN AMBITO NUEVO */ 
        let res: Node;
        GraficaArbolAts.add("<ul>\n"); 

      
        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>ID("+this.identifier+")</li>\n");
        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>TIPO("+this.type.toString()+")</li>\n");

        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>INSTRUCCIONES\n");
        GraficaArbolAts.add("<ul>\n");
        res =this.value.execute(table,tree);
        GraficaArbolAts.add("</ul>\n");
        GraficaArbolAts.add("</li>\n");



        GraficaArbolAts.add("</ul>\n");
       if(res instanceof Return_metodo){
        console.log("ERROR RETURN DE METODO ADENTRO DE UNA FUNCION ");
        CErrores.Errores.add(new CNodoError.NodoError("Semantico"," RETURN DE METODO ADENTRO DE UNA FUNCION       "+" Columna:"+ res.column ,res.line));
        GraficaArbolAts.add("</li>\n");
        return res;
       }

       GraficaArbolAts.add("</li>\n");
        return null;     
    }
}