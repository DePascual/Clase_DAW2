function Persona(n,a,e){
    this.nombre=n
    this.apellidos=a
    this.edad=e
}

Persona.prototype.decirDatos=function(){
    return "mi nombre es: " + this.nombre + " ,mis apellidos: " + this.apellidos + " ,tengo: " + this.edad
}

function Empleado(d){
    this.departamento=d
    this.decirDatos=function(){
        return "Hola soy un empleado del departamento: " + this.departamento
    }
    
}

//Define la herencia 
/*Si al definir el new Persona le pones valores específicos, estos valores serán usados siempre que te crees un nuevo Empleado
porque las propiedades están definidas en la solución constructora*/

Empleado.prototype=new Persona() 

/*Si no hacemos el new Persona salta a las propiedades de Persona, por eso se queda igual. Apunta a la funcion constructora de Persona. Si abajo modifico el protipo de persona
automaticamente todos los objetos que creemos despues, y los modifiquemos, se cambian automáticamente. Con el new Persona es un objeto especíco que creas, no uno general.
Es mas seguro que los prototipos apunten a objetos puros, más que a funciones generales, a no ser que busques eso en tu programa*/

//Empleado.prototype=Persona.prototype
//Empleado.prototype=new Persona("jose","martinez",10) 
Empleado.constructor=Empleado
var emple=new Empleado("informática")
emple.__proto__.nombre="carolina"

emple.nombre="Pepe"
emple.apellidos="González"
emple.edad=25
//apellidos y edad son undefined

//emple.decirDatos(), llama a la funcioón definida en Empleado --> Hola soy un empleado del departamento: informática y pertenzco al departamento: informática
console.log(emple.decirDatos() + " y pertenzco al departamento: " + emple.departamento)

/*llamada a la función decirDatos() definido en Persona. Llamada al del padre, que es función constructora, por eso sale undefined los valores
a no ser que escribas en la creación de la Persona sus propiedades*/

console.log(emple.__proto__.decirDatos() + " y soy del departamento: " + emple.departamento)


