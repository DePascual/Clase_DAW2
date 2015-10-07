function suma(){var result=0
    for(var a=0; a<arguments.length; a++){
        result += arguments[a]
    }return result;
}

console.log(suma(2,1,5))
console.log(suma.call(this,2,1))
console.log(suma.apply(this,[2,1]))
    
    
    