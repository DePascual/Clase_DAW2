//PROPIEDADES DENTRO DE LA FUNCIÓN CONSTRUCTORA. METODOS FUERA DE ELLA --> REGLA GENERAL A SEGUIR

/*function Persona(n,a,e){
    this.nombre=n
    this.apellidos=a
    this.edad=e
}
 var yo=new Persona();
 
 //con with no hace falta poner yo.nombre...
 with(yo){
      console.log("datos:_" + nombre + "," + apellidos + "," + edad)
      console.log("funcion constructora:_" + __proto__.constructor) //Propiedades internas de cada uno de los objetos cuando se crea
 

//Alteramos el prototipo
Persona.prototype.altuta=180;
console.log("altura del objeto YO:" + yo.altuta); //Accede a el, pero en la función constructora no aparece
console.log("funcion constructora:_" + __proto__.constructor) 
     
 }
 */
 
 
function Persona(){}
var yo=new Persona()
Persona.prototype.nombre
Persona.prototype.apellidos
Persona.prototype.edad



console.log("datos:_" + yo.nombre + "," + yo.apellidos + "," +yo. edad)
console.log("funcion constructora:_" +yo. __proto__.constructor)  //La función Persona está vacía