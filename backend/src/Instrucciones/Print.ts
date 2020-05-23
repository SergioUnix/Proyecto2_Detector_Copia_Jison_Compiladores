import {Node} from "../Abstract/Node";
import {Table} from "../Simbols/Table";
import {Tree} from "../Simbols/Tree";
import {Type} from "../utils/Type";
import {types} from "../utils/Type";

export class Print extends Node{
    expression : Node;
  
    constructor(expression: Node, line: Number, column: Number){
        super(new Type(types.VOID), line, column);
        this.expression = expression;
    }

    execute(table: Table, tree: Tree): any {
     
        console.log("se ejecuto la funcion imprimir");
       return null;
    }
}