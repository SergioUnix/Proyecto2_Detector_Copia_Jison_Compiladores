
function index2(pestanias2, pestania2) {
    var id=pestania2.replace('pestana2','');
    set_vent2('textarea'+id);
    var pestanna12 = document.getElementById(pestania2);
    var listaPestannas2 = document.getElementById(pestanias2);
    var cpestanna2 = document.getElementById('c'+pestania2);
    var listacPestannas2 = document.getElementById('contenido2'+pestanias2);
    var i=0;
    while (typeof listacPestannas2.getElementsByTagName('div')[i] != 'undefined'){
        $(document).ready(function(){
            $(listacPestannas2.getElementsByTagName('div')[i]).css('display','none');
            $(listaPestannas2.getElementsByTagName('li')[i]).css('background','');
            $(listaPestannas2.getElementsByTagName('li')[i]).css('padding-bottom','');
        });
        i += 1;
    }

    $(document).ready(function(){
        $(cpestanna2).css('display','');
        $(pestanna12).css('background','dimgray');
        $(pestanna12).css('padding-bottom','2px');
    });

    try {
        var act2=document.getElementById('cpestana2'+id);
        var tact2=document.getElementById('textarea'+id);

        while (act2.firstChild) {
            act2.removeChild(act2.firstChild);
        }

        act2.appendChild(tact2);
        var editor2=CodeMirror(act2, {
            lineNumbers: true,
            value: tact2.value,
            matchBrackets: true,
            styleActiveLine: true,
            theme: "eclipse",
            mode: "text/x-java"
        }).on('change', editor2 => {
            tact2.value=editor2.getValue();
        });
    }catch(error) {}
}
function agregar2() {
    var lu2=document.getElementById("lista2");
    var li=document.createElement("li");
    li.setAttribute('id','codigo');
    var a2=document.createElement("a");
    a2.setAttribute('id','a');
    a2.text='Texto';
    li.appendChild(a2);
    lu2.appendChild(li);
    var contenido2=document.getElementById("contenidopestanas2");
    var divp2=document.createElement("div");
    divp2.setAttribute('id','consola2');
    var ta2=document.createElement("textarea");
    ta2.setAttribute('id','textarea');
    ta2.setAttribute('name','textarea');
    ta2.setAttribute('class','ta2');
    ta2.setAttribute('style','display:none');
    ta2.cols=123;
    ta2.rows=30;
    divp2.appendChild(ta2);
    contenido2.appendChild(divp2);
    var act2=document.getElementById('consola2');
    var tact2=document.getElementById('textarea');
    var editor2=CodeMirror(act2, {
        lineNumbers: true,
        value: tact2.value,
        matchBrackets: true,
        styleActiveLine: true,
        theme: "dracula",
        mode: "text/x-java"
    }).on('change', editor2 => {
        tact2.value=editor2.getValue();
    });
}
function quitar2(){
    try{
        var lu2=document.getElementById("lista2");
        lu2.innerHTML="";
        var contenido2=document.getElementById("contenidopestanas2");
        contenido2.innerHTML="";
           }catch(error){


           }
}
function AbrirArchivo2(files){
    var file = files[0];
    var reader = new FileReader();
 

    reader.onload = function (e) {
       var act=document.getElementById("contenidopestanas2");
       var act2=document.getElementById('consola2');
       act2.innerHTML="";
       var ta2=document.createElement("textarea");
       ta2.setAttribute('id','textarea');
       ta2.setAttribute('name','textarea');
       ta2.setAttribute('class','ta2');
       ta2.setAttribute('style','display:none');
       ta2.cols=123;
       ta2.rows=30;
       act2.appendChild(ta2);    
       var tact2=document.getElementById('textarea');
           tact2.value = e.target.result;

           CodeMirror.fromTextArea(tact2, {   
            lineNumbers: true,
            value: tact2.value,
            matchBrackets: true,
            styleActiveLine: true,
            theme: "dracula",
            mode: "text/x-java"
        }).on('change', editor2 => {
            act2.value=editor2.getValue();
        });
        
    };
    
   reader.readAsText(file);
    file.clear;

    var file_input=document.getElementById("fileInput2");
    document.getElementById('fileInput2').value="";
}

function errores2() {
  var ventana_present=document.getElementById("textarea");
  var texto=ventana_present.value;
  alert("Imput: "+ texto);
  var url = 'http://localhost:3000/errores/';
      var divError = document.getElementById("erroresConsola2");
  $.post(url, { text1: texto }, function (data, status) {
      if (status.toString() == "success") {
          console.log(data)
          alert("Respuesta: " + data.toString());
divError.innerHTML = data.toString();
      } else {
          alert("Error Conected:" + status);
      }
  });
}
function ats2() {
    var ventana_actual=document.getElementById("textarea");
     var texto=ventana_actual.value;
     alert("ENTRADA: "+ texto);
     var url = 'http://localhost:3000/ats/';
     var rep = document.getElementById("ats2");
     var tituloast = document.getElementById("tituloAST2");
     $.post(url, { text1: texto }, function (data, status) {
         if (status.toString() == "success") {
             console.log(data)
             alert("reporte generado");
   tituloast.innerHTML ="Reporte consola 2 AST"; 
   rep.setAttribute('style','background-color: azure;');
   rep.setAttribute('class',"demo");
   rep.innerHTML = data;
    $('#ats2').jstree(); 
   
         } else {
             alert("Error Conected:" + status);
         }
     });
   
   }
   