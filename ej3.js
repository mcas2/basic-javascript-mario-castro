const input = require("prompt-sync")({ sigint: true })

let esCancelar = false
let numInput 
let num
let suma = 0

while (!esCancelar) {
    numInput = input('Introduce un número =>')
    
    if (Number(numInput)) {
        num = Number(numInput)
        suma += num
    } else if (numInput !== 'cancelar') {
        console.log ('Introduce un número válido')
    } else {
        esCancelar = true
    }
}

console.log('La suma es ' + suma)