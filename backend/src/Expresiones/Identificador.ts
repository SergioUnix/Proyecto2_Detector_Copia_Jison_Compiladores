import { Node } from "../Abstract/Node";
import { Table } from "../Simbols/Table";
import { Tree } from "../Simbols/Tree";
import { Simbol } from "../Simbols/Simbol";
import { Exception } from "../utils/Exception";


import {GraficaArbolAts} from '../ManejoErrores/GraficaArbolAts'; 
export class Identificador extends Node {
    identifier: String;

    constructor(identifier: String, line: Number, column: Number) {

        super(null, line, column);
        this.identifier = identifier;
    }

    execute(table: Table, tree: Tree):any {
      
        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>ID ("+this.identifier+")</li>\n");
        return null ; 
    }
    
}