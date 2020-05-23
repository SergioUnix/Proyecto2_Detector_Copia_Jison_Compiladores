import {Node} from "../Abstract/Node";
import {Table} from "../Simbols/Table";
import {Tree} from "../Simbols/Tree";
import {Type} from "../utils/Type";
import {types} from "../utils/Type";
import { isRegExp } from "util";
import { Variable } from "./Variable";

export class Metodo {
    tipo:string;
    id:string; 
    listaParametros:Array<Node> = []; 
    tipoDeRetorno:any;
    listVariables:Array<Variable> = [];

    constructor(id:string , tipo:string){
        this.id = id; 
        this.tipo = tipo; 
        this.tipoDeRetorno = "DONT EXIST"; 
    }

    public ParametrostoStringVERIFICACION():string{
        let parametros:string = "";

        
        if(this.listaParametros.length != 0 ){
            for(let i = 0 ; i < this.listaParametros.length ; i++){
   
               parametros += this.listaParametros[i].type.toString()+",";
            }
        }

        
        return parametros;
    }
    
    public toReportCopiaFuncion(){

        let parametros:string = "";

        

        if(this.listaParametros.length != 0 ){
            for(let i = 0 ; i < this.listaParametros.length ; i++){
           
               parametros += this.listaParametros[i].type.toString()+" ID "+"\n";
            }
        }
        
        return parametros;
    }

  

    


}