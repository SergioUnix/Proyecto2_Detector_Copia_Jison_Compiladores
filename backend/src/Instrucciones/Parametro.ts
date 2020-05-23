import { Node } from "../Abstract/Node"
import { Table } from "../Simbols/Table";
import { Tree } from "../Simbols/Tree";
import { Exception } from "../utils/Exception";
import { types, Type } from "../utils/Type";
import { Continue } from "../Expresiones/Continue";
import { Break } from "../Expresiones/Break";
import { Simbol } from "../Simbols/Simbol";
import { GraficaArbolAts } from "../ManejoErrores/GraficaArbolAts";


export class Parametro extends Node {
    type: Type;
    identifier: String;

 
    constructor(type: Type, identifier: String, line: Number, column: Number) {
        super(type, line, column);
        this.identifier = identifier;
    }

    execute(table: Table, tree: Tree):any {
        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>Parametro ("+this.identifier+")</li>\n");
        return null; 
    }
}