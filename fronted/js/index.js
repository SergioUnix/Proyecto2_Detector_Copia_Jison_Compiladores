var openFile = function(event) { 
    var input = event.target; 

    var reader = new FileReader(); 
    reader.onload = function(){ 
     var text = reader.result; 
     //var node = document.getElementById('output'); 
     // node.innerText = text;

 

   
    
    
     console.log(reader.result.substring(0, 200)); 
    }; 
    reader.readAsText(input.files[0]); 
    }; 



    function AbrirArchivo(files){
        var file = files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var act=document.getElementById(get_vent().replace("entrada1","cpestana"));
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
                theme: "eclipse",
                mode: "text/x-java"
            }).on('change', editor => {
                tact.value=editor.getValue();
            });
        };
        reader.readAsText(file);
        file.clear;
    
        var a=document.getElementById(get_vent().replace("entrada1","a"));
        a.text=file.name;
        linkedlist(get_vent(),file.name);
    
        var file_input=document.getElementById("fileInput");
        document.getElementById('fileInput').value="";
    }












































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

/*--------------------------------------Funcion Al Cambiar Ventana---------------------------------------*/
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

/*---------------------------------------Funcion Agregar Pestania----------------------------------------*/
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
        theme: "eclipse",
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


/*-----------------------------------------------File---------------------------------------------------*/
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
            theme: "eclipse",
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
    var contenido=ta.value;//texto de vent actual

    //formato para guardar el archivo
    var hoy=new Date();
    var dd=hoy.getDate();
    var mm=hoy.getMonth()+1;
    var yyyy=hoy.getFullYear();
    var HH=hoy.getHours();
    var MM=hoy.getMinutes();
    var formato=get_vent().replace("textarea","")+"_"+dd+"_"+mm+"_"+yyyy+"_"+HH+"_"+MM;

    var nombre="Archivo"+formato+".coline";//nombre del archivo
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







function analisis() {
    var ventana_actual=document.getElementById(get_vent());
    var texto=ventana_actual.value;
    alert("ENTRADA: "+ texto);
    var url = 'http://localhost:3000/comunicar/';



    $.post(url, { text1: texto  , text2: "QUE TAL"}, function (data, status) {
        if (status.toString() == "success") {
            console.log(data)
            
            +
            (data);
           
            alert("El resultado es: " + data.toString());
        } else {
            alert("Error estado de conexion:" + status);
        }
    });
    console.log("OK LLAMANDO AL METODO");    
}


function convert() {
    var ventana_actual=document.getElementById(get_vent());
    var texto=ventana_actual.value;
    alert("ENTRADA: "+ texto);
    var url = 'http://localhost:3000/analizarYO/';



    $.post(url, { text1: texto  , text2: "QUE TAL"}, function (data, status) {
        if (status.toString() == "success") {
            console.log(data)
            
            +
            (data);

            document.getElementById('input').appendChild(document.createTextNode(JSON.stringify(data, null, 4)));
            document.getElementById('output').appendChild(JSON2HTMLList(data));     
            createJSTree(data);
           
            alert("El resultado es: " + data.toString());
        } else {
            alert("Error estado de conexion:" + status);
        }
    });
    console.log("OK LLAMANDO AL METODO");    
}


function createJSTree(jsondata) {            
    $('#SimpleJSTree').jstree({
        'core': {
            'data': jsondata
        }
    });
}









function parseado(arbol) 

{
    var ventana_actual=document.getElementById(get_vent());
    var texto=arbol;
    alert("ENTRADA: "+ texto);
    var url = 'http://localhost:3000/parseado/';



    $.post(url, { Instruccion: arbol.instructions  , text2: "QUE TAL"}, function (data, status) {
        if (status.toString() == "success") {
            console.log(data)
           
           
            alert("El resultado es: " + data.toString());
        } else {
            alert("Error estado de conexion:" + status);
        }
    });
    console.log("OK LLAMANDO AL METODO");    
}






function errores() {
    var ventana_actual=document.getElementById(get_vent());
  var texto=ventana_actual.value;
  alert("ENTRADA: "+ texto);
  var url = 'http://localhost:3000/errores/';
      var capa = document.getElementById("capa");
  $.post(url, { text1: texto }, function (data, status) {
      if (status.toString() == "success") {
          console.log(data)
          alert("El resultado es: " + data.toString());
 
/*                    ACA inyecto el html recibido desde el NodeJs         */     
capa.innerHTML = data.toString();
      } else {
          alert("Error estado de conexion:" + status);
      }
  });
  console.log("OK LLAMANDO AL METODO");    
}














(function() {

    /**
     * Formats container element - can be overwritten in options
     * @param: container element (default: div)
     * @return: formatted container element 
     */
    function formatContainer(container) {
        container.className = 'container';
        return container;
    }
    /**
     * Formats UL element - can be overwritten in options
     * @param: UL element
     * @return: formatted LI element 
     */
    function formatUl(ul) {
        ul.className = 'ul-item';
        return ul;
    }
    
    /**
     * Formats LI element - can be overwritten in options 
     * @param: LI element
     * @return: formatted LI element 
     */
    function formatLi(li) {
        li.className = 'li-item';
        return li; 
    }
    
    /**
     * Formats object property text - can be overwritten in options 
     * @param: text node object property
     * @return: strong element with property name inside 
     */
    function formatProperty(prop) {
        var strong = document.createElement('strong');
        strong.appendChild(prop);
        return strong;
    }
    
    /**
     * Formats object/array value text - can be overwritten in options 
     * @param: text node value 
     * @return: span element with value text inside 
     */
    function formatValue(val, prop) {
        var span = document.createElement('span');
        span.appendChild(val);
        return span;
    }
    
    /**
     * Options object
     */
    var _options = {
        container: 'div',
        formatContainer: formatContainer,
        formatUl: formatUl,
        formatLi: formatLi,
        formatProperty: formatProperty,
        formatValue: formatValue
    };
    
    function JSON2HTMLList(json, options) {
    
        for(var opt in options) {
            if(options.hasOwnProperty(opt)) {
                _options[opt] = options[opt];
            }
        }
    
        var container = document.createElement(_options.container);
        container = _options.formatContainer(container);
    
        function walk(obj, parentElm) {
            if(typeof(obj) === 'object' && obj !== null && obj.constructor === Object ) {
                var ul = document.createElement('ul');
                ul = _options.formatUl(ul);
                var hasCount = 0;
                for(var prop in obj) {
                    if(obj.hasOwnProperty(prop)) {
                        var li = document.createElement('li');
                        li = _options.formatLi(li);
                        ul.appendChild(li); 
    
                        if(typeof(obj[prop]) !== 'object' || obj[prop] === null) {
    
                            var propText = document.createTextNode(prop);
                            propText = _options.formatProperty(propText);
                            
                            li.appendChild(propText);
    
                            var valueText  = document.createTextNode(obj[prop]);
                            valueText = _options.formatValue(valueText, prop);
    
                            li.appendChild(valueText);
    
                            hasCount++;
                        } else {
                            var propText = document.createTextNode(prop);
                            propText = _options.formatProperty(propText);
    
                            li.appendChild(propText);
    
                            walk(obj[prop], li);
                        }
                    }
                }
                parentElm.appendChild(ul);
    
            } else if(typeof(obj) === 'object' && obj !== null && obj.constructor === Array) {
                var ul = document.createElement('ul');
                ul = _options.formatUl(ul);
    
                var hasCount = 0;
                for(var i=0; i < obj.length; i++) {
                    
                    if(typeof(obj[i]) !== 'object' || obj[i] === null) {
                        var li = document.createElement('li');
                        li = _options.formatLi(li);
    
                        ul.appendChild(li);
    
                        var valueText = document.createTextNode(obj[i]);
                        valueText = _options.formatValue(valueText, i);
    
                        li.appendChild(valueText);
    
                        hasCount++;
                    } else {
                        walk(obj[i], parentElm);
                    }
                }
                parentElm.appendChild(ul);
            }
        }
    
    
        walk(json, container);
    
        return container;
    
    }
    
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = JSON2HTMLList;
    } else {
        if(!('JSON2HTMLList' in window)) {
            window.JSON2HTMLList = JSON2HTMLList; 
        }
    }
    
    
    })();