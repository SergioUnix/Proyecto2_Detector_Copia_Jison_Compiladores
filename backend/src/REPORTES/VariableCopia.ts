export class VariableCopia {
    tipo:any;
    id:any;
    nameClase:any; 
    nombreMetodo:any;  
/*
    Este reporte deberá mostrar un listado de las variables que se consideran copia, para
    considerar una variable como copia deberá pertenecer al mismo métodos y/o función y a la
    misma clase, así como el mismo tipo. Este reporte mostrará el tipo de la variable, nombre, la
    función y/o método al que pertenece, la clase a la que pertenece.
    */
    constructor(tipo:any, id:any , nMetodo:any , nClase: any){
        this.id = id; 
        this.tipo = tipo; 
        this.nameClase = nClase; 
        this.nombreMetodo= nMetodo;
    }

  

    


}