document.getElementById("btnMutante").addEventListener("click", loadData);

function loadData() {
  //Crear una intancia de XMLHttpRequest
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "mutante.json", true);

  xhr.onprogress = function () {
    console.log("READY STATE CHANGE", this.readyState);
    console.log("Procesando la peticion...");
  };

  xhr.onload = function () {
    console.log("READY STATE CHANGE", this.readyState);
    if (this.status == 200) {
      console.log(this.responseText);
      const mutante = JSON.parse(this.responseText);
      console.log(mutante);

      const info = `
                <ul>
                    <li>ID: ${mutante.id}</li>
                    <li>Nombre: ${mutante.nombre}</li>
                    <li>Pandilla: ${mutante.pandilla}</li>
                    <li>Mutacion: ${mutante.mutacion}</li>
                    <li>Estado: ${
                      mutante.enfadado ? "Enfadado" : "Tranquilo"
                    }</li>
                </ul>
                `;

      document.getElementById("mutante").innerHTML = info;
    }
  };
  xhr.onerror = function () {
    console.log("Ha ocurrido un error...");
  };
  xhr.send();
}

document.getElementById("btnLista").addEventListener("click", loadList);

function loadList() {
  //Crear una intancia de XMLHttpRequest
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "mutantes.json", true);

  xhr.onprogress = function () {
    console.log("READY STATE CHANGE", this.readyState);
    console.log("Procesando la peticion...");
  };

  xhr.onload = function () {
    console.log("READY STATE CHANGE", this.readyState);
    if (this.status == 200) {
      console.log(this.responseText);
      const mutantes = JSON.parse(this.responseText);
      console.log(mutantes);

      let info = "";

      mutantes.forEach((mutante) => {
        info += `<ul>
                        <li>ID: ${mutante.id}</li>
                        <li>Nombre: ${mutante.nombre}</li>
                        <li>Pandilla: ${mutante.pandilla}</li>
                        <li>Mutacion: ${mutante.mutacion}</li>
                        <li>Estado: ${
                          mutante.enfadado ? "Enfadado" : "Tranquilo"
                        }</li>
                    </ul>
                    `;
      });

      document.getElementById("listaMutantes").innerHTML = info;
    }
  };
  xhr.onerror = function () {
    console.log("Ha ocurrido un error...");
  };
  xhr.send();
}
