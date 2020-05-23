import {Node} from "../Abstract/Node";
import {Table} from "../Simbols/Table";
import {Tree} from "../Simbols/Tree";
import {Type} from "../utils/Type";
import {types} from "../utils/Type";




import {GraficaArbolAts} from '../ManejoErrores/GraficaArbolAts'; 


export class Primitive extends Node{
    value: Object;

    constructor(type:Type, value: Object, line: Number, column: Number){
        super(type, line, column);
        this.value = value;
    }

    execute(table: Table, tree: Tree):any {
        GraficaArbolAts.add("<li data-jstree='{ \"opened\" : true }'>Primitivo ("+this.value+")</li>\n");
        return null ; 
    }
}