import { report } from "process";
import { Clase } from './Clase';
import { Metodo } from "./Metodo";
import { ClaseCopia } from "./ClaseCopia";
import { FuncionCopia } from './FuncionCopia'
import { Variable } from "./Variable";
import { VariableCopia } from "./VariableCopia";
class Rep {
  public static ListaClases1: Array<Clase> = [];
  public static ListaClases2: Array<Clase> = [];
  public static claseActual: any;
  public static nombreMetodoActual: string;
  public static t1 = false;
  public static t2 = false;
  public static ListaClasesCopia: Array<ClaseCopia> = [];
  public static ListaFuncionesCopia: Array<FuncionCopia> = [];
  public static ListaVariablesCopia: Array<VariableCopia> = [];
  constructor() { }

  public static getHTML(): string {
    let definitiva: string = "";
    definitiva += this.getCopiasClases();
    definitiva += "\n\n\n\n\n";
    definitiva += this.getCopiasFunciones();
    definitiva += "\n\n\n\n\n";
    definitiva += this.getCopiasVariables();
    definitiva += "\n\n\n\n\n";
    return definitiva;
  }

  public static addClase(c: Clase): any {
    if (Rep.t1 == true) {
      Rep.ListaClases1.push(c);
    }
    if (Rep.t2 == true) {
      Rep.ListaClases2.push(c);
    }
  }

  public static addMetodo(key: string, m: Metodo): any {
    if (Rep.t1 == true) {
      for (let i = 0; i < Rep.ListaClases1.length; i++) {
        if (key == Rep.ListaClases1[i].id) {
          Rep.ListaClases1[i].addMetodo(m);
          break;
        }
      }
    }

    if (Rep.t2 == true) {
      for (let i = 0; i < Rep.ListaClases2.length; i++) {
        if (key == Rep.ListaClases2[i].id) {
          Rep.ListaClases2[i].addMetodo(m);
          break;
        }
      }

    }

  }

  public static addVariable(nombreMetodo: string, idVar: any, tipo: string) {
    if (Rep.t1 == true) {
      let metodo = Rep.claseActual.getMETODO(nombreMetodo);
      metodo.listVariables.push(new Variable(idVar, tipo));
    }

    if (Rep.t2 == true) {
      let metodo = Rep.claseActual.getMETODO(nombreMetodo);
      metodo.listVariables.push(new Variable(idVar, tipo));
    }

  }

  public static getCLASE(id: string): any {
    if (Rep.t1 == true) {
      for (let i = 0; i < Rep.ListaClases1.length; i++) {
        if (id == Rep.ListaClases1[i].id) {
          return Rep.ListaClases1[i];
        }
      }
    }

    if (Rep.t2 == true) {
      for (let i = 0; i < Rep.ListaClases2.length; i++) {
        if (id == Rep.ListaClases2[i].id) {
          return Rep.ListaClases2[i];
        }
      }
    }


  }
  public static addPARAMETROS(nombreMetodo: string, listaParametros: any): any {
    if (Rep.t1 == true) {
      let metodo = Rep.claseActual.getMETODO(nombreMetodo);
      metodo.listaParametros = listaParametros;
    }

    if (Rep.t2 == true) {
      let metodo = Rep.claseActual.getMETODO(nombreMetodo);
      metodo.listaParametros = listaParametros;
    }


  }

  public static addTIPO_RETORNO(nombreMetodo: string, tipo: any): any {
    if (Rep.t1 == true) {
      let metodo = Rep.claseActual.getMETODO(nombreMetodo);
      metodo.tipoDeRetorno = tipo;
    }

    if (Rep.t2 == true) {
      let metodo = Rep.claseActual.getMETODO(nombreMetodo);
      metodo.tipoDeRetorno = tipo;
    }


  }





  public static clear() {
    let vacio: any = [];
    Rep.ListaClases1 = vacio;
    let vacio2: any = [];
    Rep.ListaClases2 = vacio2;
    this.t1 = false;
    this.t2 = false;
    let vacio3: any = [];
    Rep.ListaClasesCopia = vacio3;
    let vacio4: any = [];
    Rep.ListaFuncionesCopia = vacio4;
    Rep.nombreMetodoActual = "";
    let vacio5: any = [];
    Rep.ListaVariablesCopia = vacio5;
  }
  public static get2() {
    return Rep.ListaClases2;
  }
  public static get1() {
    return Rep.ListaClases1;
  }


  public static printClases1() {
    for (let i = 0; i < Rep.ListaClases1.length; i++) {
      Rep.ListaClases1[i].printMetodos();
    }
  }

  public static printClases2() {
    for (let i = 0; i < Rep.ListaClases2.length; i++) {
      Rep.ListaClases2[i].printMetodos();
    }
  }



  public static DeterminarCopiaClases() {

    if (this.ListaClases1.length != 0 && this.ListaClases2.length != 0) {
      for (let i = 0; i < this.ListaClases1.length; i++) {

        for (let j = 0; j < this.ListaClases2.length; j++) {
          if (this.ListaClases1[i].id == this.ListaClases2[j].id) {


            this.buscarFucionesMetodosCopia(this.ListaClases1[i].getMetodos(), this.ListaClases2[j].getMetodos(), this.ListaClases1[i].id);

            let res: any = this.comparaMetodos(this.ListaClases1[i].getMetodos(), this.ListaClases2[j].getMetodos());


            if (res[0] == true) {
              this.toCopiaClase(this.ListaClases1[i].id, res[1]);
            }

          }
        }

      }

    } else {

    }
  }

  private static comparaMetodos(metodos1: Array<Metodo>, metodos2: Array<Metodo>): any {
    let res: any = [];
    let cont = 0;
    if (metodos1.length == 0 && metodos2.length == 0) {

      res.push(true);
      res.push(0);
      return res;
    }


    if (metodos1.length != metodos2.length) {

      res.push(false);
      res.push(0);
    }



    for (let i = 0; i < metodos1.length; i++) {
      for (let j = 0; j < metodos2.length; j++) {

        if (metodos1[i].id == metodos2[j].id) {
          cont++;
        }

      }
    }




    if (cont == metodos1.length) {
      res.push(true);
      res.push(cont);
      return res;
    } else {
      res.push(false);
      res.push(cont);
      return res;
    }

  }



  public static toCopiaClase(nombre: string, cantidad: any) {
    Rep.ListaClasesCopia.push(new ClaseCopia(nombre, cantidad));
  }



  public static getCopiasClases(): string {
    var reportes_cadena: string = "";
    if (this.ListaClasesCopia.length != 0) {



      reportes_cadena += "<body> \n";
      reportes_cadena += "<div align=\"center\">\n";
      reportes_cadena += "<h1 style=\"color: rgb(179, 84, 12);\" id=\"copyClass\">Copy class report</h1> \n";
      reportes_cadena += "<table border=\"2\" align=\"center\" class=\"tabl\">\n";
      reportes_cadena += "<tr>\n";
      reportes_cadena += "<th>#</th><th> Name Class </th><th> No metodos</th>\n";
      reportes_cadena += "</tr>\n";
      for (var i = 0; i < this.ListaClasesCopia.length; i++) {
        reportes_cadena += "<tr>\n";
        reportes_cadena += "<td>" + (i + 1) + "</td><td>" +
          "  " + this.ListaClasesCopia[i].id + "  </td><td>" +
          this.ListaClasesCopia[i].cantidaMetodos + "</td>\n";
        reportes_cadena += "</tr>\n";
      }
      reportes_cadena += "</table>\n";
      reportes_cadena += "</div>\n";
      reportes_cadena += "</body>\n";
      reportes_cadena += "<br><br><br><br><br>";

    } else {
      console.log("No copia");
    }
    return reportes_cadena;
  }


  public static getCopiasFunciones(): string {




    var reportes_cadena: string = "";
    if (this.ListaFuncionesCopia.length != 0) {


      reportes_cadena += "<body >\n";
      reportes_cadena += "<div align=\"center\">  \n";
      reportes_cadena += "<h1 style=\"color: rgb(179, 84, 12);\" id=\"copyClass\">Copy function report</h1> \n";
      reportes_cadena += "<table border=\"2\" align=\"center\" class=\"tabl\">\n";
      reportes_cadena += "<tr>\n";
      reportes_cadena += "<th>#</th><th>Name Class</th><th>Name Method/Function </th><th>TIPO</th><th> List of Parameters </th><th>Type Return</th>\n";
      reportes_cadena += "</tr>\n";

      for (var i = 0; i < this.ListaFuncionesCopia.length; i++) {
        reportes_cadena += "<tr>\n";


        reportes_cadena += "<td>" + (i + 1) + "</td><td>" + "  " + this.ListaFuncionesCopia[i].nombreClase + "  </td><td>" + this.ListaFuncionesCopia[i].nombreFuncion + "</td><td>" + this.ListaFuncionesCopia[i].tipo + "</td><td>" + this.ListaFuncionesCopia[i].listaDeParametros + "</td>" + "<td>" + this.ListaFuncionesCopia[i].tipoDeRetorno + " :" + this.ListaFuncionesCopia[i].tipo + "</td>";


        reportes_cadena += "</tr>\n";
      }

      reportes_cadena += "</table>\n";
      reportes_cadena += "</div>\n";
      reportes_cadena += "</body>\n";
      reportes_cadena += "<br><br><br><br><br>";

    } else {
      console.log("no hay clases copia");
    }
    return reportes_cadena;
  }


  public static buscarFucionesMetodosCopia(metodos1: Array<Metodo>, metodos2: Array<Metodo>, nombreclase: string): any {

    if (metodos1.length == 0 || metodos2.length == 0) {

      return;
    } else {

      for (let i = 0; i < metodos1.length; i++) {
        for (let j = 0; j < metodos2.length; j++) {
          if (metodos1[i].id == metodos2[j].id) {
            this.buscarVariablesCopia(nombreclase, metodos1[i].id, metodos1[i].listVariables, metodos2[j].listVariables);

            if (metodos1[i].tipo == metodos2[j].tipo) {
              if (metodos1[i].ParametrostoStringVERIFICACION() == metodos2[j].ParametrostoStringVERIFICACION()) {
                Rep.ListaFuncionesCopia.push(new FuncionCopia(metodos1[i].id, metodos1[i].tipo, metodos1[i].tipoDeRetorno, nombreclase, metodos1[i].toReportCopiaFuncion()));
              }
            }
          }
        }
      }


    }



  }



  public static buscarVariablesCopia(nombreClase: string, nombreMetodo: string, listaVar1: Array<Variable>, listaVar2: Array<Variable>): any {// necesito la clase , el metodo donde estoy y el arreglo de las variables 
    for (let i = 0; i < listaVar1.length; i++) {
      for (let j = 0; j < listaVar2.length; j++) {

        if (listaVar1[i].id == listaVar2[j].id) {

          if (listaVar1[i].tipo == listaVar2[j].tipo) {
            this.ListaVariablesCopia.push(new VariableCopia(listaVar1[i].tipo, listaVar2[j].id, nombreMetodo, nombreClase));
          }

        }

      }
    }

  }



  public static getCopiasVariables(): string {
    var reportes_cadena: string = "";
    if (this.ListaVariablesCopia.length != 0) {


      reportes_cadena += "<body>\n";
      reportes_cadena += "<div align=\"center\" > \n";
      reportes_cadena += "<h1 style=\"color: rgb(179, 84, 12);\" id=\"copyClass\">Variable copy report</h1>\n";
      reportes_cadena += "<table border=\"2\" align=\"center\" class=\"tabl\">\n";
      reportes_cadena += "<tr>\n";
      reportes_cadena += "<th>#</th><th>Type</th><th>ID</th><th>Name Method</th><th>Name Class </th>\n";
      reportes_cadena += "</tr>\n";

      for (var i = 0; i < this.ListaVariablesCopia.length; i++) {
        reportes_cadena += "<tr>\n";


        reportes_cadena += "<td>" + (i + 1) + "</td><td>" + "  " + this.ListaVariablesCopia[i].tipo + "  </td><td>" + this.ListaVariablesCopia[i].id + "</td><td>" + this.ListaVariablesCopia[i].nombreMetodo + "</td><td>" + this.ListaVariablesCopia[i].nameClase + "</td>\n";


        reportes_cadena += "</tr>\n";
      }

      reportes_cadena += "</table>\n";
      reportes_cadena += "</div>\n";
      reportes_cadena += "</body>\n";
      reportes_cadena += "<br><br><br><br><br>";

    } else {
      console.log("No existe copia");
    }
    return reportes_cadena;
  }
}
export { Rep };