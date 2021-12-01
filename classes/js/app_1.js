class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
    saludar(texto){
        return `Hola, me llamo ${this.nombre} ${this.apellido}`
    }
}

class Mutante extends Persona {
    constructor(nombre, apellido, nick, superPower){
        super(nombre, apellido)
        this.nick = nick;
        this.superPower = superPower;
    }
}

const lobexno = new Mutante('Logan', 'Martínez', 'Lobexno', 'No se corta las uñas');
console.log(lobexno)
console.log(lobexno.saludar())

class SuperString extends String {
    constructor(){
       super()
    }
    static cambiaVocales(vocal, palabra){
        return palabra.replace(/[aeiou]/g, vocal)
    }
}

const spStr = new SuperString();
console.log(spStr);
console.log(SuperString.cambiaVocales('i','caracol'))