"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstract/Node");
/**
 * @class Nodo expresion continue, nos indica saltar iteraciones
 */
class Continue extends Node_1.Node {
    /**
     * @constructor Retorna el objeto continue creado
     * @param line Linea del continue
     * @param column Columna del continue
     */
    constructor(nombre, line, column) {
        super(null, line, column);
        this.nombre = nombre;
    }
    execute(table, tree) {
        /*
         return this;
         */
    }
}
exports.Continue = Continue;
