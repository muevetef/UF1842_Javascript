

function saludar(nombre){

        console.log("Hola don "+ nombre)
    
}

let _nombre = 'Pepito'
let timerId1 = setTimeout(saludar, 2000, _nombre)
let timerId2 = setTimeout(saludar, 3000,'Don José')
clearTimeout(timerId2);
console.log(timerId1);
console.log(timerId2);
