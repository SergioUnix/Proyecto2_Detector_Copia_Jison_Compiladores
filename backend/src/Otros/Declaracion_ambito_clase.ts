import { Node } from "../Abstract/Node"
import { Table } from "../Simbols/Table";
import { Tree } from "../Simbols/Tree";
import { Exception } from "../utils/Exception";
import { types, Type } from "../utils/Type";
import { Continue } from "../Expresiones/Continue";
import { Break } from "../Expresiones/Break";
import { Simbol } from "../Simbols/Simbol";


export class Declaracion extends Node {
    type: Type;
    identifier: String;
    value: Node;

    constructor(type: Type, identifier: String, nodo1: Node , line: Number, column: Number) {
        super(type, line, column);
        this.identifier = identifier;
        
    }

    execute(table: Table, tree: Tree) {
 
    }
}