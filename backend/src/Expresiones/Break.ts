import { Node } from "../Abstract/Node";
import { Table } from "../Simbols/Table";
import { Tree } from "../Simbols/Tree";
import { GraficaArbolAts } from "../ManejoErrores/GraficaArbolAts";


export class Break extends Node {

    constructor(line: Number, column: Number) {
        console.log("linea break" + line);
        super(null, line, column);
    }

    execute(table: Table, tree: Tree){
        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>Sentencia_break</li>\n");
          return this;
    }
}