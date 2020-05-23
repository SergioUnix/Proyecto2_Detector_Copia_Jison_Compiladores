import { Node } from "../Abstract/Node";
import { Type } from "../utils/Type";
import { Table } from "../Simbols/Table";
import { Tree } from "../Simbols/Tree";

export class tacos extends Node{
    value: Object;


    constructor(type:Type, value: Object, line: Number, column: Number){
        super(type, line, column);
        this.value = value;
        console.log("CONSTRUCTOR DE TACOS");
    }

    execute(table: Table, tree: Tree) {
        console.log("MY EXECUTE TACOS " + this.value);
        return this.value;
    }
}