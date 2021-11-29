//Constructor
function Persona(nombre, apellidos) {
  let edad = 0;//propiedad privada

  //Propiedades publicas
  this.nombre = nombre;
  this.apellidos = apellidos;
  
  //metodo privado
   function envejecer(){
    edad++;
  }

  setInterval(envejecer, 1000);

  //Métodos públicos
  this.getEdad = function(){
     return edad;
  }
}
//Método publico común a todos  los objetos de la clase Persona
Persona.prototype.saludar = function(){
  return `Hola me llamo ${this.nombre} ${this.apellidos}`
}


const marisol = new Persona('Pepa', 'Flores')
const marisol2 = new Persona('Pepa', 'Flores')

console.log(marisol)
console.log(marisol.getEdad())

//Método estatico
Persona.sumar = function(a, b){
  return a + b;
}
//Propiedad estatica
Persona.existe = true;

console.log(Persona.existe)
console.log(Persona.sumar(2,4))