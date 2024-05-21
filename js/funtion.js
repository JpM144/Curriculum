// alert("HOLA SOY UN ALERT DESDE EL ARCHIVO EXTERNO DE JS");
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
var name = "Juan"; //string
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
    // Swal.fire({
    //     imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
    //     imageAlt: "A tall image",
    //     timer: 1500,
    //     showConfirmButton: false
    // });

    // document.getElementById("fecha").value = new Date();
    let fecha = new Date();
    document.getElementById("dia").innerText = fecha.getDay();

    // document.getElementById("year").value = new Date();
    let año = new Date();
    document.getElementById("año").innerText = año.getFullYear();

    // document.getElementById("month").value = new Date();
    let mes = new Date();
    document.getElementById("month").innerText = mes.getMonth();

    // document.getElementById("date").value = new Date();
    let dia = new Date();
    document.getElementById("date").innerText = dia.getDate();

    // document.getElementById("hour").value = new Date();
    let hora = new Date();
    document.getElementById("hours").innerText = hora.getHours();

    // document.getElementById("minutes").value = new Date();
    let minutes = new Date();
    document.getElementById("minutes").innerText = minutes.getMinutes();

    // document.getElementById("segundos").value = new Date();
    let seconds = new Date();
    document.getElementById("seconds").innerText = seconds.getSeconds();

    // document.getElementById("milosegundos").value = new Date();
    let miliseconds = new Date();
    document.getElementById("milisecods").innerText = miliseconds.getMilliseconds();

    // document.getElementById("tiempo").value = new Date();
    let time = new Date();
    document.getElementById("time").innerText = time.getTime();

        // document.getElementById("zona horaria").value = new Date();
        let ZoneOff = new Date();
        document.getElementById("TimeZoneOff").innerText = ZoneOff.getSeconds();
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
    } else {
        document.getElementById("print").innerText = name + " " + Last_name;
        document.getElementById("name").style.border = "2px solid green"
        document.getElementById("last_name").style.border = "2px solid green"
        document.getElementById("password").style.border = "2px solid green"
        document.getElementById("repeat").style.border = "2px solid green"
        Swal.fire({
            icon: "success",
            title: "Correcto 👌👌",
            showConfirmButton: false,
            timer: 1500
        });

    }
}

//arrays
var dias_sem = ["Lunes", "Martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
var array_num = [];
var array_mix = [1, 2.5, "abc"];
var array_mul = [
    { name: "Juan", age: 18, color: "blue" },
    { name: "Jose", age: 19, color: "white" },
    { name: "Carlos", age: 8, color: "black" },
    { name: "Pedro", age: 23, color: "green" }
];

var json_ejm = {
    name: "Juan",
    Last_name: "Mier",
    phone: "3187682873",
    email: "jmusic14j@gmail.com"
}

console.log(dias_sem);
console.log(array_num);
console.log(array_mix);
console.log(array_mul);
console.log(json_ejm);


for (let i = 0; i < dias_sem.length; i++) {
    console.log(dias_sem[i]);
}

var j = 0;
while (j < array_num.length) {
    console.log(array_num[j]);
    j++;
}

accu = 0;
for (var h = 0; h < array_num.length; h++) {
    accu += array_num[h]

}
console.log(accu);

accum = 0;
for (let e = 0; e < array_mul.length; e++) {
    accum += array_mul[e].age
}
document.getElementById("print_age").innerHTML = " <strong> El valor de la suma de las edades es: </strong> " + accum;


var array_ejm = [1, 2, 3, 4, 5, 6, 7, 8, 9];
document.getElementById("valores").value = array_ejm;
function aggfirst() {
    let valor = document.getElementById("agnum").value;
    array_ejm.unshift(valor);
    document.getElementById("valores").value = array_ejm;

}
function aggend() {
    let valor = document.getElementById("agnum").value;
    array_ejm.shift(valor);
    document.getElementById("valores").value = array_ejm;

}

function agregar() {
    let valor = document.getElementById("agnum").value;
    array_ejm.push(valor);
    document.getElementById("valores").value = array_ejm;

}

function eliminar() {
    let valor = document.getElementById("agnum").value;
    array_ejm.pop(valor);
    document.getElementById("valores").value = array_ejm;
}
function reverse() {
    document.getElementById("valores").value = array_ejm.reverse();
}

function limpiar() {
    document.getElementById("agnum").value = "";
    document.getElementById("valores").value = ""
    document.getElementById("print_age").innerHTML = " ";

}

//funcion para enviar el nombre concatenado
function send_name() {
    let name_one = document.getElementById("name_one").value;
    let name_two = document.getElementById("name_two").value;
    let search_var = document.getElementById("search_var").value;
    let name_com = name_one.toUpperCase() + name_two.toUpperCase();
    // let variable = name_com.indexOf("U");
    let variable = name_com.charAt(search_var);


    if (name_com == 0) {
        Swal.fire({
            title: "Campos vacios",
            text: "Algunos de los campos se encuentran vacios",
            icon: "error"
        });
        document.getElementById("name_one").style.border = "2px solid red"
        document.getElementById("name_two").style.border = "2px solid red"



    } else {
        if (search_var > name_com.length && search_var != 0) {
            Swal.fire({
                icon: "error",
                title: "El valor supera la cantidad de letras del nombre o el campo de ingreso esta vacio",
                timer: 1500
            });
            document.getElementById("print_name").innerText = "";


        }
        else if (isNaN(search_var)) {
            Swal.fire({
                icon: "error",
                title: "El valor no es un numero",
                timer: 1500
            });
            document.getElementById("print_name").innerText = "";

        }
        else {
            swal.fire(variable);
            document.getElementById("print_name").innerText = "La letra correspondiente al #" + search_var + " es: " + variable;
        }
    }


}

