function Persona(n,a,e){
    this.nombre=n
    this.apellidos=a
    this.edad=e
}
Persona.prototype.decirDatos=function(){
    return "mi nombre es " + this.nombre + " mis apellidos son: " + this.apellidos + " y tengo: " + this.edad
}

/*var yo = new Persona("Carolina", "de Pascual", 26)
console.log(yo.decirDatos())*/

function Empleado(d){
    this.departamento=d
}

Empleado.prototype=new Persona
Empleado.constructor=Empleado

var emple = new Empleado("informatica")
emple.__proto__.nombre="Pepe"

console.log(emple.decirDatos() + "y pertenzco al departamento " + emple.departamento)