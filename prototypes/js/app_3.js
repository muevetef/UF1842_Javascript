//Alternativa crear objeos y prototype
const personaPrototipo = {
  saludar: function(){
    return `Hola me llamo ${this.nombre} ${this.apellidos }`
  }
}

const mario = Object.create(personaPrototipo)
mario.nombre = "Mario"
mario.apellidos = "Bross"
console.log(mario)

const luigi = Object.create(personaPrototipo, {
  nombre: {value: 'Luigi'},
  apellidos: {value: 'Bross'}
})

console.log(luigi)
console.log(luigi.saludar())

