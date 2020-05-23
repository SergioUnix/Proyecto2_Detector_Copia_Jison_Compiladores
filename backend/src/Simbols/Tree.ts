import {Node} from "../Abstract/Node";
import {Exception} from "../utils/Exception";

export class Tree {
    instructions: Array<Node>


    constructor(instructions: Array<Node>) {
        this.instructions = instructions;

    }
}