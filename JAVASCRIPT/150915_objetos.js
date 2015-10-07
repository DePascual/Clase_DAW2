/*CREAR UN OBJETO METODO1
var yo={nombre:"carolina",
        apellidos:"de pascual jimenez",
        edad:25,
        diedad:function(){ return this.edad }
        
}

console.log("mi nombre es: " + yo.nombre)
*/

/*CREAR UN OBJETO METODO2: UTILIZANDO PROTOTIPO GENERICO OBJECT
var yo={}
Object.defineProperty(yo,"nombre",{value:"carolina",
                                    writeable:true,
                                    configurable:false,  //no se puede borrar la propiedad si está como false
                                    enumerable:true
})
console.log("mi nombre es:" + yo.nombre)
delete yo.nombre
console.log("lo prop ha sido borrada, recuperamos " + yo.nombre)  //devuelve el nombre, xq no puede borrarla
*/

var yo={}
Object.defineProperties(yo, {"nombre": 
                                    {value:"carolina",
                                    writeable:true,
                                    configurable:true,
                                    enumerable:true
                                    },
                            "apellidos":
                                        {value:"de pascual jimenez",
                                        writeable:true,
                                        configurable:false,
                                        enumerable:false
                                        },
                        "edad":
                                    {value:25}
                            
                        })
console.log("mi nombre es: " + yo.nombre + " mi apellido... " + yo.apellidos + " mi edad... " + yo.edad)

//console.log("array de propiedades.enumerables: " + Object.keys(yo))

/*Object.getOwnPropertyNames(yo).forEach(function(el,pos,ar){
    console.log("La prop: " + el + " en la posicion: " + pos + " vale: " + yo[el])
})*/

for (var i in yo) {
    console.log("Prop: " + i + " y su valor: " + yo[i])
    console.log("ATributos de la propiedad: " + i + "..." + Object.getOwnPropertyDescriptor(yo, i).enumerable)
}
//console.log("array de propiedades.enumerables y no enumerables: " + Object.getOwnPropertyNames(yo))


//CREAR OBJETOS METODO3 UTILIZANDO FUNCIONES "CONSTRUCTORAS DE OBJETOS"

/*function Persona(nom,ape,ed){
    this.nombre=nom
    this.apellidos=ape
    this.edad=ed
    this.diedad=function(){return this.edad}
}

var yo=new Persona("Carolina", "de Pascual", 25)
console.log("mi nombre es: " + yo.nombre + " mi edad es... " + yo.diedad())
 yo.edad += 1
 
 console.log("mi edad ahora es: " + yo.edad)
 */

/*function Persona(nom,ape,ed){
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
console.log("su nombre es: " + tu.nombre + " su apellido es: " + tu.apellidos + " su edad es: " + tu.edad)*/