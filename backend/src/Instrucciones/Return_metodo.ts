import { Node } from "../Abstract/Node";
import { Table } from "../Simbols/Table";
import { Tree } from "../Simbols/Tree";
import { GraficaArbolAts } from "../ManejoErrores/GraficaArbolAts";
import { Rep } from "../REPORTES/Rep";


export class Return_metodo extends Node {
    nombre :string; 

    constructor(nombre:string,line: Number, column: Number) {
        super(null, line, column);
        this.nombre = nombre;
    }

    execute(table: Table, tree: Tree){
        if(Rep.t1 == true || Rep.t2 == true){
            Rep.addTIPO_RETORNO(Rep.nombreMetodoActual , "retorno de Metodo (return;)");
        }

        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>Return_Metodo</li>\n");
        return this;
    }
}