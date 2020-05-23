import { NodoError } from "./NodoError";
class Errores extends Array<NodoError>{
    constructor() {
        super();
    }
    public static add(err: NodoError) {
        this.prototype.push(err);
    }
    public static verificarerror(): string {
        if (this.prototype.length > 0) {
            return "Existen errores al compilar";   }
        return "Compilacion sin Errores";
    }
    public static hay_errores(): boolean {
        if (this.prototype.length > 0) {
            return true;
        }
        return false;
    }

    public static geterror(): string {
        var errores_cadena: string = "";
        errores_cadena += "<body\n";
        errores_cadena += "<div align=\"center\"> \n";
        errores_cadena += "<h1 style=\"color: rgb(179, 84, 12);\" id=\"tituloErrores\">Errores Sintácticos y lexicos</h1>\n";
        errores_cadena += "<table border=\"2\" align=\"center\" class=\"tabl\">\n";
        errores_cadena += "<tr>\n";
        errores_cadena += "<th>Tipo</th><th>Observacion</th><th>Linea</th>\n";
        errores_cadena += "</tr>\n";
        for (var i = 0; i < this.prototype.length; i++) {
            errores_cadena += "<tr>\n";
            errores_cadena += "<td>" + this.prototype[i].gettipo() + "</td><td>" +
                "  " + this.prototype[i].getdescripcion() + "  </td><td>" +
                this.prototype[i].getlinea() + "</td>\n";
            errores_cadena += "</tr>\n";
        }
        errores_cadena += "</table>\n";
        errores_cadena += "</div>\n";
        errores_cadena += "</body>\n";

        return errores_cadena;
    }

    public static clear() {
        while (this.prototype.length > 0) {
            this.prototype.pop();
        }
    }
}
export { Errores };