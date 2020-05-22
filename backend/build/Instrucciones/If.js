"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstract/Node");
/**
 * @class Ejecuta una serie de instrucciones en caso la condicion sea verdadera sino ejecuta las instrucciones falsas
 */
class If extends Node_1.Node {
    /**
     * @constructor Crea el nodo instruccion para la sentencia IF
     * @param condition Condicion que debe ser tipo boolean
     * @param IfList Lista de instrucciones a ejecutar en caso la condicion sea verdadera
     * @param ElseList Lista de instrucciones a ejecutar en caso la condicion sea falsa
     * @param line Linea de la sentencia if
     * @param column Columna de la sentencia if
     */
    constructor(condition, IfList, ElseList, line, column) {
        super(null, line, column);
        this.condition = condition;
        this.IfList = IfList;
        this.ElseList = ElseList;
    }
    execute(table, tree) {
        /*
        const newtable = new Table(table);
        let result: Node;
        result = this.condition.execute(newtable, tree);
        if (result instanceof Exception) {
            return result;
        }

        if (this.condition.type.type !== types.BOOLEAN) {
            const error = new Exception('Semantico',
                `Se esperaba una expresion booleana para la condicion`,
                this.line, this.column);
            tree.excepciones.push(error);
            tree.console.push(error.toString());
            return error;
        }

        if (result) {
            for (let i = 0; i < this.IfList.length; i++) {
                const res = this.IfList[i].execute(newtable, tree);
                if(res instanceof Continue || res instanceof Break){
                    return res;
                }
            }
        } else {
            for (let i = 0; i < this.ElseList.length; i++) {
                const res = this.ElseList[i].execute(newtable, tree);
                if(res instanceof Continue || res instanceof Break){
                    return res;
                }
            }
        }

        return null;
        */
    }
}
exports.If = If;
