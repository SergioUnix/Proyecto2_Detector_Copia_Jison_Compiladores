import {Node} from "../Abstract/Node";
import {Table} from "../Simbols/Table";
import {Tree} from "../Simbols/Tree";
import {Type} from "../utils/Type";
import {types} from "../utils/Type";
import { Importe } from "./Importe";

export class Inicio extends Node{
    Lista_importes_clases:any = [];
   
    constructor(l_imports: Array<Node>, l_clases: Array<Node>){
        super(null, 0, 0);
        l_imports.map((m: any) => {
                 this.Lista_importes_clases.push(m);
        });     

        l_clases.map((m: any) => {
            
            this.Lista_importes_clases.push(m);
        });        
    }
 
    execute(table: Table, tree: Tree): any {

    }
}