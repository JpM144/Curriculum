alert("HOLA SOY UN ALERT DESDE EL ARCHIVO EXTERNO DE JS");
// console.log("HOLA SOY ME SAJE DE CONSOLA");
// document.write("HOLA SOY LA INTERFAZ PRINCIPAL");
// Swal.fire("Hola soy una alerta de una libreria");
// Swal.fire(
//     {
//     title: "The Internet?",
//     text: "That thing is still around?",
//     icon: "success",
//     showConfirmButton: true,
//     timer : 1500
//   }
// );

//Variables y tipo de datos
const pi = 3.14; //decimal
var name = "Juan Mier"; //string
let edad = 18; //entero
let edad_string = "18"; //string
var bool = true; //fasle booleanos

//declaradores basicos + - * / %
var suma = 5 - 2;
console.log(suma);
console.log(edad_string + suma);
var one = 10;
var two = 30;

console.log(one + two);
console.log(one - two);
console.log(one * two);
console.log(one / two);
console.log(one % two);

//OPERADORES DE COMPARACIÓN
// < > <= >= <> 
//= Asignación
//== Comparacion
// === comparacion estricta

//OPERADORES LOGICOS
// and & ||

console.log("Mi nombre " + name + " Tiene como edad " + edad);

function load_page() {
    Swal.fire({
        imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
        imageAlt: "A tall image",
        timer: 1500,
        showConfirmButton: false
    });
}

function send_info() {
    let name = document.getElementById("name").value;
    let Last_name = document.getElementById("last_name").value;
    let password = document.getElementById("password").value;
    let repeat = document.getElementById("repeat").value;
    if (name.length == 0 || Last_name.length == 0) {
        Swal.fire({
            title: "Campos vacios",
            text: "Algunos de los campos se encuentran vacios",
            icon: "error"
        });



    } else if (name.length == 0) {
        document.getElementById("name").style.border = "2px solid red"
    } else if (Last_name.length == 0) {
        document.getElementById("last_name").style.border = "2px solid red"
    } else if (repeat != password) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Contraseña Incorrecta",
            footer: 'Vuelva a ingresar su contraseña'
        });
    }else {
        document.getElementById("print").innerText = name + " " + Last_name;
        document.getElementById("name").style.border = "2px solid green"
        document.getElementById("last_name").style.border = "2px solid green"
        document.getElementById("password").style.border = "2px solid green"
        document.getElementById("repeat").style.border = "2px solid green"
        Swal.fire({
            icon: "success",
            title: "Correcto 👌👌",
            showConfirmButton : false,
            timer : 1500
        });

    }



}