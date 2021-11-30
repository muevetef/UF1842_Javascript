function Cometa(nombre, diametro, temperatura) {
  this.nombre = nombre;
  this.diametro = diametro;
  this.temperatura = temperatura;
  //   this.definicion = "kjhg sdafljsdah f jksdaf jksdaf sdafhsdajklfhsdafj sdhjfhsadlfj hfsajkldfh"
}

// Cometa.prototype.definicion = "kjhg sdafljsdah f jksdaf jksdaf sdafhsdajklfhsdafj sdhjfhsadlfj hfsajkldfh"
// Cometa.prototype.calcRadio = function(){
//     return this.diametro / 2
// }
// Cometa.prototype.getFar = function(){
//     return this.temperatura * 9 /5 + 32
// }
const protoCometa = {
    definicion:
      "kjhg sdafljsdah f jksdaf jksdaf sdafhsdajklfhsdafj sdhjfhsadlfj hfsajkldfh",
  
    calcRadio: function () {
      return this.diametro / 2;
    },
    getFar: function () {
      return (this.temperatura * 9) / 5 + 32;
    }
  };
Cometa.prototype = protoCometa
Cometa.prototype.aa = "Hola"

console.log(protoCometa);
const a = new Cometa("Halley", 900, 1800);
const b = new Cometa("Yacutaque", 88, 897);
const c = new Cometa("Jaimito", 876, 123);
console.log(a.calcRadio(), b.getFar(), c.definicion);
