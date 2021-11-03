// FUNCIONES
function sumarPrecioAlTotal(producto) {
  total += producto.precio;
}

function tabla(valorSeleccionado, newTotal) {
  $("#tabla").append(`
    <tr>
    <td>1</td>
    <td>${valorSeleccionado.tipo}</td>
    <td>${valorSeleccionado.precio}</td>
    <td class="td">${total}</td>
    <td><button class="borrar" value="${valorSeleccionado.id}">X</button></td>
    </tr>`);
}
function actualizarTotal() {
  let td = document.getElementsByClassName("td");
  for (const td1 of td) td1.innerText = `${total}`;
}

// function logIn()}

class Producto {
  constructor(marca, tipo, precio, img, id) {
    this.marca = marca;
    this.tipo = tipo;
    this.precio = precio;
    this.img = img;
    this.id = id;
  }
  mensaje() {
    console.log("Agregaste " + this.tipo + ", a un precio de " + this.precio);
  }
}
const producto1 = new Producto(
  "Johnnie Walker",
  "Whisky",
  6500,
  "Imagenes/Whisky.png",
  1
);
const producto2 = new Producto(
  "Beefeater",
  "Gin",
  3500,
  "Imagenes/Gin.jpeg",
  2
);
const producto3 = new Producto("Bacardi", "Ron", 2900, "Imagenes/Ron.jpeg", 3);
const producto4 = new Producto(
  "Boris ACDC",
  "Cerveza",
  450,
  "Imagenes/Cerveza.jpeg",
  4
);

let productosArray = [producto1, producto2, producto3, producto4];

let total = 0;
let carrito = [];

let seccionProducto = "";
let contenedorProductos = document.getElementById("fotos-productos");

productosArray.forEach((element) => {
  seccionProducto += `<div id="producto${element.id}" class="card" style="width: 18rem;">
    <div class="card-body">
      <h4 class="card-title">${element.marca}</h4>
      <h5 class="card-subtitle mb-2 text-muted">${element.tipo}</h5>
      <img class="fotoCard" src=${element.img} alt="">
      <p class="card-text">$${element.precio}</p>
      <button class="card-link" value=${element.id}>Comprar</button>
    </div>
  </div>`;
});

contenedorProductos.innerHTML = seccionProducto;

let botones = document.getElementsByClassName("card-link");
console.log(botones);

let clicks = 0;
for (const boton of botones) {
  boton.addEventListener("click", function (e) {
    e.stopImmediatePropagation();
    let valorSeleccionado = productosArray.find((x) => x.id == e.target.value);
    carrito.push(valorSeleccionado);
    total += valorSeleccionado.precio;
    tabla(valorSeleccionado, total);

    let remover = document.querySelector(".alert");
    remover.innerHTML = `<p class="p">${valorSeleccionado.tipo} se agregó al carrito.</p>`;

    $("#cartel").css("display", "flex");
    $("#cartel").slideUp(4000);

    let botonesBorrar = document.getElementsByClassName("borrar");
    for (const botonesB of botonesBorrar) {
      botonesB.addEventListener("click", function (e) {
        e.stopImmediatePropagation();
        let valorSeleccionado1 = productosArray.find(
          (x) => x.id == e.target.value
        );
        let item = carrito.indexOf(valorSeleccionado1);
        carrito.splice(item, 1);
        total = total - valorSeleccionado1.precio;
        botonesB.parentNode.parentNode.remove();
        actualizarTotal();
      });
    }
  });
}

$("#enviar").click((e) => {
  e.preventDefault();

  let usuario = document.getElementById("user").value;
  localStorage.setItem("nombreUsuario", JSON.stringify(usuario));

  let mail = document.getElementById("email").value;
  localStorage.setItem("mail", JSON.stringify(mail));

  const infoPost = {"nombre": usuario , "mail": mail}
  const APIURL = "https://jsonplaceholder.typicode.com/posts"

$.ajax({
  method: "POST",
  url:  APIURL,
  data: infoPost,
  success: function(respuesta){
    console.log(respuesta.nombre , respuesta.mail)
      $("#registro").append(`<p>Gracias por registrarse, ${respuesta.nombre}. Le llegarán nuestras a ofertas a ${respuesta.mail}.</p>`)
  }
});
})










// COMPLEMENTARIO CLASE 9
function carritoPrueba(total) {
  let totalCarrito = document.getElementById("total-carrito");
  console.log(totalCarrito);
  let p = document.createElement("p");
  p.innerHTML = `<p>El total de su compra es $${total}</p>`;
  totalCarrito.appendChild(p);
}
$("#finalizarCompra").click(function (e) {
  carritoPrueba(total);
});
// let botonFinalizar = document.getElementById("finalizarCompra");
// botonFinalizar.addEventListener("click", function (e){
//     carritoPrueba(total);
// });

$("#clickCarrito").click(function (e) {
  if (clicks == 0) {
    $(".contenedorTabla").slideDown(1000);
    $(".contenedorTabla").css("display", "flex");
    clicks++;
  } else {
    $(".contenedorTabla").slideUp(1000);
    clicks--;
  }
});
