// FUNCIONES
function sumarPrecioAlTotal(producto) {
    total += producto.precio;
}

function tabla(valorSeleccionado, total) {
    $("#tabla").append(`<tr>
    <td>${valorSeleccionado.id}</td>
    <td>${valorSeleccionado.tipo}</td>
    <td>${valorSeleccionado.precio}</td>
    <td>${total}</td>
    <td><button class="borrar" value="${valorSeleccionado.id}">X</button></td>
    </tr>`)
}

// function logIn()

class Producto{
    constructor(marca, tipo, precio, img, id) {
        this.marca = marca;
        this.tipo = tipo;
        this.precio = precio;
        this.img = img;
        this.id = id;
    }
    mensaje(){
        console.log("Agregaste "+ this.tipo + ", a un precio de " + this.precio);
    }
}
const producto1 = new Producto("Johnnie Walker", "Whisky", 6500, "Imagenes/Whisky.png", 1);
const producto2 = new Producto("Beefeater", "Gin", 3500, "Imagenes/Gin.jpeg", 2);
const producto3 = new Producto("Bacardi", "Ron", 2900, "Imagenes/Ron.jpeg", 3);
const producto4 = new Producto("Boris ACDC", "Cerveza", 450, "Imagenes/Cerveza.jpeg", 4);

let productosArray = [producto1, producto2, producto3, producto4]

let total = 0
let carrito = []
// for (let i = 0; i<50; i++){
//     let respuestaCliente = parseInt(prompt("¿Qué bebida desea llevar?: 1) Whisky 2) Gin 3) Ron 4) Cerveza 5) Salir 6) Vaciar Carrito"));
//     if (respuestaCliente == 1) {
//         producto1.mensaje();
//         carrito.push(producto1);
//         console.log(carrito);
//         sumarPrecioAlTotal(producto1);
//     }
//     else if (respuestaCliente == 2) {
//         producto2.mensaje();
//         carrito.push(producto2);
//         console.log(carrito);
//         sumarPrecioAlTotal(producto2);
//     }
// else if (respuestaCliente == 3) {
//     producto3.mensaje();
//     carrito.push(producto3);
//     console.log(carrito);
//     sumarPrecioAlTotal(producto3);
//     }
// else if (respuestaCliente == 4) {
//     producto4.mensaje();
//     carrito.push(producto4);
//     console.log(carrito);
//     sumarPrecioAlTotal(producto4);
//     }
// else if (respuestaCliente == 5) {
//     alert ("El total de tu carrito es " + total + ". Tu carrito contiene " + carrito.length + " productos." );
//     if (total == 0) {
//         alert("No seleccionaste ningún producto.")
//         parseInt(prompt("¿Qué bebida desea llevar?: 1) Whisky 2) Gin 3) Ron 4) Cerveza 5) Salir 6) Vaciar Carrito"))
//     }
//     else { 
//     let metodoDePago = prompt("¿Cómo desea abonar la compra? E) Efectivo (10% de descuento) T) Tarjeta de Crédito o Débito (10% de recargo).")
//     if (metodoDePago == "E") {
//             total = total * 0.90;
//             alert ("El total es " + total + ". Por pagar en efectivo se le realiza un 10% de descuento. ¡Muchas gracias por su compra!")
//             break;
//             }
//         else if (metodoDePago == "T") {
//             total = total * 1.10;
//             alert ("El total es " + total + ". Por pagar con tarjeta se le aplica un recargo del 10%. ¡Muchas Gracias por su compra!");
//             break;
//             }


//         }
//     }

    
// else if (respuestaCliente == 6) {
//     carrito = [];
//     total = 0;
//     console.log(carrito);
//     alert ("Tu carrito esta vacío.");
//     } 

// else {
//     alert ("La opción ingresada es incorrecta.");
// }
// }

// DESAFIO COMPLEMENTARIO CLASE 6
// const menor = productosArray.reverse(producto => producto.precio);
// console.log(menor);

// const iva = productosArray.map(producto => producto.precio * 1.21);
// console.log(iva);

//DESAFIO CLASE 8 DOM

let seccionProducto = "";
let contenedorProductos = document.getElementById("fotos-productos");

productosArray.forEach(element => {
    seccionProducto += `<div id="producto${element.id}" class="card" style="width: 18rem;">
    <div class="card-body">
      <h4 class="card-title">${element.marca}</h4>
      <h5 class="card-subtitle mb-2 text-muted">${element.tipo}</h5>
      <img class="fotoCard" src=${element.img} alt="">
      <p class="card-text">$${element.precio}</p>
      <button class="card-link" value=${element.id}>Comprar</button>
    </div>
  </div>`
});

contenedorProductos.innerHTML = seccionProducto;

// INCORPORANDO EVENTOS - CLASE 9
let botones = document.getElementsByClassName("card-link");
console.log(botones);


for (const boton of botones){
    boton.addEventListener("click", function (e){
        e.stopImmediatePropagation();
        let valorSeleccionado = productosArray.find(x => x.id == e.target.value);
        carrito.push(valorSeleccionado);
        console.log(carrito);
        total += valorSeleccionado.precio;
        console.log(total);
        tabla(valorSeleccionado, total);
       
        let botonesBorrar = document.getElementsByClassName("borrar");
        for (const botonesB of botonesBorrar){
            botonesB.addEventListener("click", function(e){
                botonesB.parentNode.parentNode.remove();
            })
        }   
    })
          
}
// FORMULARIO




$("#enviar").click(()=> {

// let enviar = document.getElementById("enviar");
// enviar.addEventListener("click", function(e){
    e.preventDefault();

    let usuario = document.getElementById("user").value;
    localStorage.setItem("nombreUsuario", JSON.stringify(usuario));
    
    let contra = document.getElementById("pwd").value;
    localStorage.setItem("contrasenia", JSON.stringify(contra));

    
    console.log(JSON.parse(localStorage.getItem("nombreUsuario")));
    console.log(JSON.parse(localStorage.getItem("contrasenia")));
})

// COMPLEMENTARIO CLASE 9
function carritoPrueba(total) {
let totalCarrito = document.getElementById("total-carrito");
console.log(totalCarrito);
let p = document.createElement("p");
p.innerHTML=`<p>El total de su compra es $${total}</p>`;
totalCarrito.appendChild(p);
}
$("#finalizarCompra").click(function(e){
    carritoPrueba(total);
})
// let botonFinalizar = document.getElementById("finalizarCompra");
// botonFinalizar.addEventListener("click", function (e){
//     carritoPrueba(total);
// });

// TABLA



















