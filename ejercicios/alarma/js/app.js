function reloj() {
  var hoy = new Date();
  var hora = hoy.getHours();
  var minuto = hoy.getMinutes();
  var segundo = hoy.getSeconds();
  var horaD = parseInt(document.getElementById("hora").value);
  var minutoD = parseInt(document.getElementById("minuto").value);

  if (minuto < 10) {
    minuto = "0" + minuto;
  }
  if (segundo < 10) {
    segundo = "0" + segundo;
  }
  if (hora == horaD && minuto == minutoD && segundo == 00) {
    console.log("Alarma!!!!");
  }

  var tm = document.getElementById("tm");
  tm.textContent = hora + ":" + minuto + ":" + segundo;
  console.log(hora + ":" + minuto + ":" + segundo);
}

setInterval(reloj, 1000);

const ul = document.querySelector("ul");

const ocultarBtn = document.querySelector("#ocultar");
const colorBtn = document.querySelector("#color");

ocultarBtn.addEventListener("click", function () {
  if (ul.style.display === "none") {
    ul.style.display = "block";
    this.textContent = "Ocultar";
  } else {
    ul.style.display = "none";
    this.textContent = "Mostar";
  }
});

colorBtn.addEventListener("click", function () {
  if (ul.className === "normal") {
    ul.className = "invertido";
  } else {
    ul.className = "normal";
  }
});
