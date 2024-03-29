import { Node } from "../Abstract/Node"
import { Table } from "../Simbols/Table";
import { Tree } from "../Simbols/Tree";
import { Exception } from "../utils/Exception";
import { types, Type } from "../utils/Type";
import { Continue } from "../Expresiones/Continue";
import { Break } from "../Expresiones/Break";
import { Simbol } from "../Simbols/Simbol";
import { GraficaArbolAts } from "../ManejoErrores/GraficaArbolAts";


export class Incre_decre extends Node {
    identifier: String;
    simbolo: String;

  
    constructor(identifier: String, simbolo: String, line: Number, column: Number) {
        super(null, line, column);
        this.identifier = identifier;
        this.simbolo = simbolo;
    }

    execute(table: Table, tree: Tree):any {
        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>Incremento/decremento\n");
        GraficaArbolAts.add("<ul>\n");

        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>ID ("+this.identifier+")</li>\n");
        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>Simbolo ("+this.simbolo+")</li>\n");

        GraficaArbolAts.add("</ul>\n");
        GraficaArbolAts.add("</li>");
        return null; 
    }
}