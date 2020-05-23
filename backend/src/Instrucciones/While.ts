import { Node } from "../Abstract/Node"
import { Table } from "../Simbols/Table";
import { Tree } from "../Simbols/Tree";
import { Exception } from "../utils/Exception";
import { types } from "../utils/Type";
import { Continue } from "../Expresiones/Continue";
import { Break } from "../Expresiones/Break";
import { Primitive } from "../Expresiones/Primitive";
import { Type } from "../utils/Type";
import { Return_funcion } from "./Return_funcion";
import { Return_metodo } from "./Return_metodo";
import { GraficaArbolAts } from "../ManejoErrores/GraficaArbolAts";

export class While extends Node {
    condition: Node;
    List: Array<Node>;


    constructor(condition: Node, List: Array<Node>, line: Number, column: Number) {
        super(null, line, column);
        this.condition = condition;
        this.List = List;
    }

    execute(table: Table, tree: Tree) {

        const newtable = new Table(table);

        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>SENTENCIA_WHILE \n");
        GraficaArbolAts.add("<ul>\n");
        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>CONDICION\n");
        GraficaArbolAts.add("<ul>\n");
        this.condition.execute(newtable, tree);
        GraficaArbolAts.add("</ul>\n");
        GraficaArbolAts.add("</li>\n");

        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>BLOQUE_INSTRUCCIONES\n");
        GraficaArbolAts.add("<ul>\n");
        for (let i = 0; i < this.List.length; i++) {

            const res = this.List[i].execute(newtable, tree);


            if (res instanceof Continue) {
                break;
            } else if (res instanceof Break) {

                GraficaArbolAts.add("</ul>\n");
                GraficaArbolAts.add("</li>\n");
                GraficaArbolAts.add("</ul>\n");
                GraficaArbolAts.add("</li>\n");
                return;
            }
            if (res instanceof Return_funcion || res instanceof Return_metodo) {

                GraficaArbolAts.add("</ul>\n");
                GraficaArbolAts.add("</li>\n");
                GraficaArbolAts.add("</ul>\n");
                GraficaArbolAts.add("</li>\n");
                return res;
            }
        }

        GraficaArbolAts.add("</ul>\n");
        GraficaArbolAts.add("</li>\n");




        GraficaArbolAts.add("</ul>\n");
        GraficaArbolAts.add("</li>\n");
        return null;
    }
}