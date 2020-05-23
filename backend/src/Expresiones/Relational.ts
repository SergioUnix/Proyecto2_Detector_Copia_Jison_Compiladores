import { Node } from "../Abstract/Node";
import { Table } from "../Simbols/Table";
import { Tree } from "../Simbols/Tree";
import { Exception } from "../utils/Exception";
import { types, Type } from "../utils/Type";
import { GraficaArbolAts } from "../ManejoErrores/GraficaArbolAts";


export class Relational extends Node {
    leftOperator: Node;
    rightOperator: Node;
    Operator: String;

    constructor(leftOperator: Node, rightOperator: Node, Operator: String, line: Number, column: Number) {
        super(new Type(types.BOOLEAN), line, column);
        this.leftOperator = leftOperator;
        this.rightOperator = rightOperator;
        this.Operator = Operator;
    }

    execute(table: Table, tree: Tree) :any{

        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>RELACIONAL\n");
        GraficaArbolAts.add("<ul>\n");
        this.leftOperator.execute(table, tree);
        if(this.Operator != null){
         GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>OperadorComparador</li>\n");
        }
        if(this.rightOperator != null ){
         this.rightOperator.execute(table, tree);
        }
        GraficaArbolAts.add("</ul>\n");
        GraficaArbolAts.add("</li>\n");
       
       
        return null; 


      
    }
}