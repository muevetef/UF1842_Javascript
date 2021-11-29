//Constructor
function Persona(nombre, apellidos) {
  this.nombre = nombre;
  this.apellidos = apellidos;
}

Persona.prototype.saludar = function(){
  return `Hola me llamo ${this.nombre} ${this.apellidos}`
}

const persona1 = new Persona('Julio', 'Iglesias')

console.log(persona1.saludar())

//Herencia en ES5
function Mutante(nombre, apellidos, nick, superpower ){
    Persona.call(this, nombre, apellidos);
    this.nick = nick;
    this.superpower = superpower;
}

//Heredar los metodos del prototype
Mutante.prototype = Object.create(Persona.prototype, {
  
});
//Devolver el constructor de Mutante()
Mutante.prototype.constructor = Mutante;

//Saludo personalizado
Mutante.prototype.saludar = function(){
  return `Hola me llamo ${this.nombre} ${this.apellidos} y soy ${this.nick}`
}
console.log(Mutante.prototype)
//crear mutante
const hulk = new Mutante('Bruce', 'Banner', 'Hulk', 'Fuerza colosal')

console.log(hulk.saludar())

// function Alumno(nombrePila, apellido, edad, genero, intereses) {
//   this.nombre = {
//     nombrePila,
//     apellido
//   };
//   this.edad = edad;
//   this.genero = genero;
//   this.intereses = intereses;
// };

// const alumno = new Alumno('Dartacan', 'Mosqueperro', 85, 'indefinido', 'esgrimarse')
// console.log(alumno);

