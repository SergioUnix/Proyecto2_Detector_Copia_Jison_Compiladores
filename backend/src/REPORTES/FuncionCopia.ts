import {Node} from "../Abstract/Node";
import {Table} from "../Simbols/Table";
import {Tree} from "../Simbols/Tree";
import {Type} from "../utils/Type";
import {types} from "../utils/Type";
import {Metodo} from '../REPORTES/Metodo';

export class FuncionCopia {
    tipo: any; 
    tipoDeRetorno:string;
    nombreFuncion:string; 
    nombreClase:string;
    listaDeParametros:string; 
    constructor(nomFuncion:string , tip:any,tipoRe:string , noClse:string , list:string ){
     this.nombreFuncion = nomFuncion; 
     this.tipo = tip;
     this.tipoDeRetorno = tipoRe; 
     this.nombreClase = noClse; 
     this.listaDeParametros = list; 
    }
}