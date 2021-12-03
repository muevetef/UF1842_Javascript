document.querySelector("#button1").addEventListener("click", getText);
document.querySelector("#button2").addEventListener("click", getJson);
document.querySelector("#button3").addEventListener("click", getData);
const salida = document.querySelector("#salida");

//Archivo de texto local
function getText() {
  fetch("data.txt")
    .then((res) => res.text())
    .then(function (data) {
      console.log(data);
      salida.innerHTML = data;
    })
    .catch(function (err) {
      console.log("Ha habido un error..");
    });
}

function capturarError(res){
    if(!res.ok){
        console.log("Error...")
        throw new SyntaxError('Error '+ res.status)
    }
    return res;
}
//Desde un .json
function getJson() {
  fetch("posts.json")
    .then(capturarError)
    .then((res) => res.json())
    .then(function (posts) {
      console.log(posts);
      let lista = "";
      posts.forEach((post) => {
        lista += `<li>${post.title} || ${post.body}</li>`;
      });
      salida.innerHTML = lista;
    })
    .catch((err) => console.log(err));
}

//Desde una API externa
function getData() {
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then(function (users) {
      console.log(users);
      let lista = "";
      users.forEach((user) => {
        lista += `<li><a href=${user.html_url} target="_blank">${user.login}</li>`;
      });
      salida.innerHTML = lista;
    })
    .catch((err) => console.log(err));
}
