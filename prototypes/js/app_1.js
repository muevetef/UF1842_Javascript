//Constructor
function Persona(nombre, apellidos, cumple) {
  this.nombre = nombre;
  this.apellidos = apellidos;
  this.cumple = new Date(cumple);
  // this.calcularEdad = function(){
  //     const diff = Date.now() - this.cumple.getTime();
  //     const fechaEdad = new Date(diff);
  //     return Math.abs(fechaEdad.getFullYear() - 1970);
  // }
}

Persona.prototype.calcularEdad = function () {
  const diff = Date.now() - this.cumple.getTime();
  const fechaEdad = new Date(diff);
  return Math.abs(fechaEdad.getFullYear() - 1970);
};

Persona.prototype.getFullName = function () {
  return `${this.nombre} ${this.apellidos}`;
};

Persona.prototype.setApellido = function (nuevoApellido) {
  this.apellidos = nuevoApellido;
};

const mario = new Persona("Mario", "Bross", "09 13 1985");
const luigi = new Persona("Luigi", "Bross", "09 13 1985");
const wario = new Persona("Wario", "Brass", "09 13 1986");

console.log(mario.calcularEdad());
console.log(luigi.getFullName());

wario.setApellido("García");
console.log(wario);

console.log(mario.hasOwnProperty('cumple'))