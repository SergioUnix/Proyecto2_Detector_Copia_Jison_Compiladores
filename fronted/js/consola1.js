var contador=0;
function get_cont(){
    return contador++;
}

var vent_focus="pestana1";
function get_vent(){
    return vent_focus;
}

function set_vent(vent){
    vent_focus=vent;
}

var lista=new Array();
function linkedlist(pestana,nombre) {
    var obj=new Object();
    obj.pestana=pestana;
    obj.nombre=nombre;
    lista.push(obj);
}

function deletepes(pestana){
    for(var i=0;i<lista.length;i++){
        if(lista[i].pestana==pestana){
            delete lista[i];
        }
    }
}
function index(pestanias, pestania) {
    var id=pestania.replace('pestana','');
    set_vent('textarea'+id);

    var pestanna1 = document.getElementById(pestania);
    var listaPestannas = document.getElementById(pestanias);
    var cpestanna = document.getElementById('c'+pestania);
    var listacPestannas = document.getElementById('contenido'+pestanias);

    var i=0;
    while (typeof listacPestannas.getElementsByTagName('div')[i] != 'undefined'){
        $(document).ready(function(){
            $(listacPestannas.getElementsByTagName('div')[i]).css('display','none');
            $(listaPestannas.getElementsByTagName('li')[i]).css('background','');
            $(listaPestannas.getElementsByTagName('li')[i]).css('padding-bottom','');
        });
        i += 1;
    }

    $(document).ready(function(){
        $(cpestanna).css('display','');
        $(pestanna1).css('background','dimgray');
        $(pestanna1).css('padding-bottom','2px');
    });

    try {
        var act=document.getElementById('cpestana'+id);
        var tact=document.getElementById('textarea'+id);

        while (act.firstChild) {
            act.removeChild(act.firstChild);
        }

        act.appendChild(tact);
        var editor=CodeMirror(act, {
            lineNumbers: true,
            value: tact.value,
            matchBrackets: true,
            styleActiveLine: true,
            theme: "eclipse",
            mode: "text/x-java"
        }).on('change', editor => {
            tact.value=editor.getValue();
        });
    }catch(error) {}
}
function agregar() {
    var x=get_cont();
    var lu=document.getElementById("lista");
    var li=document.createElement("li");
    li.setAttribute('id','pestana'+x);
    var a=document.createElement("a");
    a.setAttribute('id','a'+x);
    a.setAttribute('href', 'javascript:index("pestanas","pestana'+x+'")');
    a.text='pestana'+x;
    li.appendChild(a);
    lu.appendChild(li);
    index("pestanas","pestana"+x);

    var contenido=document.getElementById("contenidopestanas");
    var divp=document.createElement("div");
    divp.setAttribute('id','cpestana'+x);
    var ta=document.createElement("textarea");
    ta.setAttribute('id','textarea'+x);
    ta.setAttribute('name','textarea'+x);
    ta.setAttribute('class','ta');
    ta.setAttribute('style','display:none');
    ta.cols=123;
    ta.rows=30;
    divp.appendChild(ta);
    contenido.appendChild(divp);

    var act=document.getElementById('cpestana'+x);
    var tact=document.getElementById('textarea'+x);
    var editor=CodeMirror(act, {
        lineNumbers: true,
        value: tact.value,
        matchBrackets: true,
        styleActiveLine: true,
        theme: "dracula",
        mode: "text/x-java"
    }).on('change', editor => {
        tact.value=editor.getValue();
    });
}

function quitar(){
    try{
        var lu=document.getElementById("lista");
        lu.removeChild(document.getElementById(get_vent().replace("textarea","pestana")));
        var contenido=document.getElementById("contenidopestanas");
        contenido.removeChild(document.getElementById(get_vent().replace("textarea","cpestana")));
        deletepes(get_vent());
    }catch(error){}
}
function AbrirArchivo(files){
    var file = files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var act=document.getElementById(get_vent().replace("textarea","cpestana"));
        var tact=document.getElementById(get_vent());
        tact.value = e.target.result;

        while (act.firstChild) {
            act.removeChild(act.firstChild);
        }

        act.appendChild(tact);
        var editor=CodeMirror(act, {
            lineNumbers: true,
            value: tact.value,
            matchBrackets: true,
            styleActiveLine: true,
            theme: "dracula",
            mode: "text/x-java"
        }).on('change', editor => {
            tact.value=editor.getValue();
        });
        
    };
    reader.readAsText(file);
    file.clear;

    var a=document.getElementById(get_vent().replace("textarea","a"));
    a.text=file.name;
    linkedlist(get_vent(),file.name);
    var file_input=document.getElementById("fileInput");
    document.getElementById('fileInput').value="";
}
function DescargarArchivo(){
    var ta=document.getElementById(get_vent());
    var hoy=new Date();
    var dd=hoy.getDate();
    var mm=hoy.getMonth()+1;
    var yyyy=hoy.getFullYear();
    var HH=hoy.getHours();
    var MM=hoy.getMinutes();
    var formato=get_vent().replace("textarea","")+"_"+dd+"_"+mm+"_"+yyyy+"_"+HH+"_"+MM;

    var file=new Blob([contenido], {type: 'text/plain'});

    if(window.navigator.msSaveOrOpenBlob){
        window.navigator.msSaveOrOpenBlob(file, nombre);
    }else{
        var a=document.createElement("a"),url=URL.createObjectURL(file);
        a.href=url;
        a.download=nombre;
        document.body.appendChild(a);
        a.click();
        setTimeout(function(){
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        },0); 
    }
}


function reportes() {
  var ventana_actual=document.getElementById(get_vent());
  var texto=ventana_actual.value;
  alert("ENTRADA: "+ texto);
  var url = 'http://localhost:3000/reportes/';
      var divError = document.getElementById("repContenido");
  $.post(url, { text1: texto }, function (data, status) {
      if (status.toString() == "success") {
          console.log(data)
          alert("El resultado es: " + data.toString());
divError.innerHTML = data.toString();

} else {

        alert("Error estado de conexion:" + status);
      }
  });
  console.log("OK LLAMANDO AL METODO");    
}
function reportes() {
  var consola1=document.getElementById(get_vent());
  var consola2=document.getElementById("textarea");
   var texto2 = consola2.value; var texto1 = consola1.value;  
   alert("Console 1: "+ texto1);alert("Console 2: "+ texto2);
   var url = 'http://localhost:3000/reportes/';
   var copias_div = document.getElementById("repContenido");
   $.post(url, { text1: texto1 , text2: texto2 }, function (data, status) {
         if (status.toString() == "success") {
             console.log(data)
            copias_div.innerHTML = data;    
   
         } else {
             alert("Error estado de conexion:" + status);
         }
     });

 }
function grafica() {
    var ventana_actual=document.getElementById(get_vent());
     var texto=ventana_actual.value;
     alert("ENTRADA: "+ texto);
     var url = 'http://localhost:3000/ats/';
     var rep = document.getElementById("grap1");
     var tituloast = document.getElementById("graptitulo1");
     $.post(url, { text1: texto }, function (data, status) {
         if (status.toString() == "success") {
             console.log(data)
             alert("reporte generado");
   tituloast.innerHTML ="Reporte consola 1 AST"; 
   rep.setAttribute('style','background-color: azure;');
   rep.setAttribute('class',"demo");
   rep.innerHTML = data;
            $('#grap1').jstree(); 
   
         } else {
             alert("Error estado de conexion:" + status);
         }
     });
   
   }
   

   function limpiar1(){
    try{
        var titulo=document.getElementById("gratitulo1");
        titulo.innerHTML="";
        var grafica=document.getElementById("grap1");
        grafica.innerHTML="";
        var error=document.getElementById("err1");
        error.innerHTML="";
           }catch(error){
           }
}