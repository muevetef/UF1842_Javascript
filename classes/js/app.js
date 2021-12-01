class Persona {
    constructor(nombre, apellidos, cumple){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.cumple = new Date(cumple);
    }

    saludar(texto){
        return `${texto} ${this.nombre} ${this.apellidos}`
    }
    
    calcularEdad(){
        const diff = Date.now() - this.cumple.getTime();
        const fechaEdad = new Date(diff);
        return Math.abs(fechaEdad.getFullYear() - 1970);
      };

     static sumar(a, b){
         
         return a + b
        
     } 
}

const paco = new Persona('Paco', 'Martinez', '12-01-1920');
console.log(paco)

console.log(Persona.sumar(1, 33));