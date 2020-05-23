import {Table} from "../Simbols/Table";
import {Tree} from "../Simbols/Tree";
import {Type} from "../utils/Type";
import {types} from "../utils/Type";
export abstract class Node {
    line: Number;
    column: Number;
    type: Type;
 
  
    abstract execute(table: Table, tree: Tree): any;

    constructor(type: Type, line: Number, column: Number) {
        this.type = type;
        this.line = line;
        this.column = column;
    }


    
}