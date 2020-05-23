import { Node } from "../Abstract/Node"
import { Table } from "../Simbols/Table";
import { Tree } from "../Simbols/Tree";
import { Exception } from "../utils/Exception";
import { types, Type } from "../utils/Type";
import { Continue } from "../Expresiones/Continue";
import { Break } from "../Expresiones/Break";
import { Simbol } from "../Simbols/Simbol";
import {GraficaArbolAts} from '../ManejoErrores/GraficaArbolAts'; 
import { Rep } from "../REPORTES/Rep";
import { Clase } from "../REPORTES/Clase";
import { report } from "process";
export class ClaseInstruccion extends Node {
    identifier: string;
    contenido:  Array<Node>;
    constructor(identifier: string, value:  Array<Node>, line: Number, column: Number) {
        super(null, line, column);
        this.identifier = identifier;
        this.contenido = value;
        ;
    }

    execute(table: Table, tree: Tree) :any{
          
        if(Rep.t1 == true || Rep.t2 == true){
            Rep.addClase(new Clase(this.identifier));
            Rep.claseActual = Rep.getCLASE(this.identifier); 
            console.log("static ACTUAL: " +Rep.claseActual);
        }









        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>CLASE\n");
        GraficaArbolAts.add("<ul>");
        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>ID("+this.identifier+")</li>\n");
        const newtable = new Table(table);

        for (let i = 0; i < this.contenido.length; i++) {
            const res = this.contenido[i].execute(newtable, tree);
            
            if (res instanceof Continue) {
            console.log("break en continue =?? ");
            GraficaArbolAts.add("</ul>");
                break;
            } else if (res instanceof Break) {
                console.log("break en clase =?? ");
                GraficaArbolAts.add("</ul>");
                return;
            }
        }
        GraficaArbolAts.add("</ul>");
        GraficaArbolAts.add("</li>");
        return null;     
    }
} 