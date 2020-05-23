
export class Exception{
    public static errArray:Exception[] = []; 
    type: String;
    description: String;
    line: Number;
    column: Number;

    constructor(type: String, description: String, line: Number, column: Number) {
        this.type = type;
        this.description = description;
        this.line = line;
        this.column = column;
       
    }

    toString(){
 
        return `${this.type} ${this.description} ${this.line} ${this.column}`;
    }
}