import { Node } from "../Abstract/Node";
import { Table } from "../Simbols/Table";
import { Tree } from "../Simbols/Tree";
import { Exception } from "../utils/Exception";
import { types, Type } from "../utils/Type";
import { GraficaArbolAts } from "../ManejoErrores/GraficaArbolAts";


export class Arithmetic extends Node {
    leftOperator: Node;
    rightOperator: Node;
    Operator: String;

  
    constructor(leftOperator: Node, rightOperator: Node, Operator: String, line: Number, column: Number) {
        // Envio null porque aun no se el tipo de la operación
        super(null, line, column);
        this.leftOperator = leftOperator;
        this.rightOperator = rightOperator;
        this.Operator = Operator;
    }

    execute(table: Table, tree: Tree) {

        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>Aritmetica\n");
        GraficaArbolAts.add("<ul>\n");
        if (this.rightOperator == null) {
            if (this.Operator != null) {
                GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>Signo del Primitivo(" + this.Operator + ")</li>\n");
            }
        }

        this.leftOperator.execute(table, tree);



        if (this.rightOperator != null) {
            if (this.Operator != null) {
                GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>Operador (" + this.Operator + ")</li>\n");
            }
            this.rightOperator.execute(table, tree);
        }
        GraficaArbolAts.add("</ul>\n");
        GraficaArbolAts.add("</li>\n");


    }
}