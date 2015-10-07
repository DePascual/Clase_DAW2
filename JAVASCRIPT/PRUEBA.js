function Persona(nom,ape,ed){
    this.nombre=Object.defineProperty(this,"nombre",{value:nom, writeable:true})
    this.apellidos=ape
    this.edad=ed
    this.diedad=function(){return this.edad}
}

var yo=new Persona("Carolina", "de Pascual", 25)
console.log("mi nombre es: " + yo.nombre + " mi edad es... " + yo.diedad())
yo.edad += 1
console.log("mi edad ahora es: " + yo.edad)

var tu=new Persona("Fernando", "Gomez", 30)
console.log("su nombre es: " + tu.nombre + " su apellido es: " + tu.apellidos + " su edad es: " + tu.edad)