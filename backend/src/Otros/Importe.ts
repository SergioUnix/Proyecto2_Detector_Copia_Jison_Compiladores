import { Node } from "../Abstract/Node"
import { Table } from "../Simbols/Table";
import { Tree } from "../Simbols/Tree";
import { Exception } from "../utils/Exception";
import { types, Type } from "../utils/Type";
import { Continue } from "../Expresiones/Continue";
import { Break } from "../Expresiones/Break";
import { Simbol } from "../Simbols/Simbol";

import {GraficaArbolAts} from '../ManejoErrores/GraficaArbolAts'; 

export class Importe extends Node {
    tipoInstruccion:String; 
    identifier: String;
    value: Node;
 

    constructor(identifier: String, value: Node, line: Number, column: Number) {
        super(null, line, column);
        this.identifier = identifier;
        this.value = null;
        this.tipoInstruccion = "IMPORT"; 
    }

    execute(table: Table, tree: Tree):any {
        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>IMPORT\n");
        
      
        GraficaArbolAts.add("<ul>");
        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>ID("+this.identifier+")\n");
        GraficaArbolAts.add("</ul>");

        GraficaArbolAts.add("</li>"); 
        return null;     
    }
}