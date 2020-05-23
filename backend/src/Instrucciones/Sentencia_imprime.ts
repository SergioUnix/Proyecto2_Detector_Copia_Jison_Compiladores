import {Node} from "../Abstract/Node";
import {Table} from "../Simbols/Table";
import {Tree} from "../Simbols/Tree";
import {Type} from "../utils/Type";
import {types} from "../utils/Type";

import {GraficaArbolAts} from '../ManejoErrores/GraficaArbolAts'; 
export class Sentencia_imprime extends Node{
    expression : Node;
    estilo:string; 

    constructor(nombre:string,expression: Node, line: Number, column: Number){
        super(new Type(types.VOID), line, column);
        this.expression = expression;
        this.estilo = nombre; 
    }

    execute(table: Table, tree: Tree): any {
        console.log("se ejecuto  imprimir");
        console.log(this.expression);
        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>SENTENCIA_IMPRIME\n"); 
        GraficaArbolAts.add("<ul>\n");
        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>EXPRESION\n");
        GraficaArbolAts.add("<ul>\n");
        this.expression.execute(table , tree);
        GraficaArbolAts.add("</ul>\n")
        GraficaArbolAts.add("</li>\n");     
        GraficaArbolAts.add("</ul>\n"); 
        GraficaArbolAts.add("</li>\n"); 
        return null;
    }
}