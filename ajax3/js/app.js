document.getElementById("get-jokes")
        .addEventListener("click", loadList);

function loadList() {
  const number = document.getElementById('number').value
  //Crear una intancia de XMLHttpRequest
  const xhr = new XMLHttpRequest();

  xhr.open("GET",`https://api.icndb.com/jokes/random/${number}`, true);

  xhr.onprogress = function () {
    console.log("READY STATE CHANGE", this.readyState);
    console.log("Procesando la peticion...");
  };

  xhr.onload = function () {
    console.log("READY STATE CHANGE", this.readyState);
    if (this.status == 200) {
      // console.log(this.responseText);
      const jokes = JSON.parse(this.responseText);
      // console.log(jokes);

      let show = '';

      if(jokes.type === 'success'){
        jokes.value.forEach(joke => {
          // console.log(joke)
          show += `<li>${joke.joke}</li>`
        });
      }else{
        show = '<li>Algo ha ido mal...</li>'
      }
    
      document.getElementById("jokes").innerHTML =show;
    }
  };
  xhr.onerror = function () {
    console.log("Ha ocurrido un error...");
  };
  xhr.send();
}
