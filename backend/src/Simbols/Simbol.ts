import {Type} from "../utils/Type";

export class Simbol {
    type: Type;
    identifier: String
    value: Object

    constructor(type: Type, identifier: String, value: Object) {
        this.type = type;
        this.identifier = identifier;
        this.value = value;
    }
}