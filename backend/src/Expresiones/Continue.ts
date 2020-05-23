import { Node } from "../Abstract/Node";
import { Table } from "../Simbols/Table";
import { Tree } from "../Simbols/Tree";
import { GraficaArbolAts } from "../ManejoErrores/GraficaArbolAts";


export class Continue extends Node {
    nombre:string; 

    constructor(nombre:string,line: Number, column: Number) {
        super(null, line, column);
        this.nombre = nombre; 
    }

    execute(table: Table, tree: Tree){
        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>Sentencia_continue</li>\n");
        return this;
    
    }
}