/*var global="soy una variable GLOBAL"
var thepointer;

function fexterna(){
    var localexterna="soy una variable local a la funcion externa"

    function interna(e){
        console.log("la variable global vale: " + global);
        console.log("la variable local externa: " + localexterna)
        console.log("el parametro vale: " + e)
    }
    
    thepointer=interna
}
fexterna()
thepointer("paso un parametro")*/

var global="soy una variable GLOBAL"
var thepointer;

function fexterna(){
    var localexterna="soy una variable local a la funcion externa"

    function interna(e){
        console.log("la variable global vale: " + global);
        console.log("la variable local externa: " + localexterna)
        console.log("el parametro vale: " + e)
    }
    
    return interna
}
fexterna()("paso un parametro")

/*var global="soy una variable GLOBAL"
var thepointer;

function fexterna(){
    var localexterna="soy una variable local a la funcion externa"

    function interna(e){
        console.log("la variable aun no definida vale: " + desconocida)
        console.log("la variable global vale: " + global);
        console.log("la variable local externa: " + localexterna)
        console.log("el parametro vale: " + e)
    }
    
    thepointer=interna
}
fexterna()
var desconocida="soy la variable GLOBAL TARDÍA"
thepointer("paso un parametro")*/

