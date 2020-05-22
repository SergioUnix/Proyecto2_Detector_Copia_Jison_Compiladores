"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstract/Node");
/**
 * @class Ejecuta una serie de instrucciones en caso la condicion sea verdadera sino ejecuta las instrucciones falsas
 */
class While extends Node_1.Node {
    /**
     * @constructor Crea el nodo instruccion para la sentencia IF
     * @param condition Condicion que debe ser tipo boolean
     * @param List Lista de instrucciones a ejecutar mientras la condicion sea verdadera
     * @param line Linea de la sentencia while
     * @param column Columna de la sentencia while
     */
    constructor(condition, List, line, column) {
        super(null, line, column);
        this.condition = condition;
        this.List = List;
    }
    execute(table, tree) {
        /*
        const newtable = new Table(table);
        let result: Node;
        do {
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
                for (let i = 0; i < this.List.length; i++) {
                    const res = this.List[i].execute(newtable, tree);
                    if (res instanceof Continue) {
                        break;
                    } else if (res instanceof Break) {
                        return;
                    }
                }
            }
        } while (result);
        return null;
        */
    }
}
exports.While = While;
