import { Node } from "../Abstract/Node"
import { Table } from "../Simbols/Table";
import { Tree } from "../Simbols/Tree";
import { Exception } from "../utils/Exception";
import { types, Type } from "../utils/Type";
import { Continue } from "../Expresiones/Continue";
import { Break } from "../Expresiones/Break";
import { Simbol } from "../Simbols/Simbol";
import { GraficaArbolAts } from "../ManejoErrores/GraficaArbolAts";


export class Asignacion extends Node {
    identifier: String;
    value: Node;

    constructor(identifier: String, value: Node, line: Number, column: Number) {
        super(null, line, column);
        this.identifier = identifier;
        this.value = value;
    }

    execute(table: Table, tree: Tree):any {

        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>ASIGNACION\n");
        GraficaArbolAts.add("<ul>\n");
        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>ID ("+this.identifier+")</li>\n");
        
        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>VALOR_Expresion\n");
        GraficaArbolAts.add("<ul>\n");
        this.value.execute(table , tree);
        GraficaArbolAts.add("</ul>\n");
        GraficaArbolAts.add("</li>");
        
        GraficaArbolAts.add("</ul>\n");
        GraficaArbolAts.add("</li>");
     

        return null ; 
    }
}