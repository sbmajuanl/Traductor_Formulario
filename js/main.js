var title=document.getElementById("form-signin-heading")
var email=document.getElementById("inputEmail");
var password=document.getElementById("inputPassword");
var remember=document.getElementsByTagName("span")[0];
var button=document.getElementsByClassName("btn")[0];
var evaluar=document.getElementById("evaluar");

function translate() {
title.innerHTML="Por favor inicia sesion";
email.placeholder="Correo Electronico";
password.placeholder="Contraseña";
remember.innerHTML="Recordar datos";
button.innerHTML="Iniciar Sesión";
}
translate();

document.getElementById("evaluar").onclick=function translate() {

enviar.innerHTML="<form align=center><strong>"+"DATOS DEL FORMULARIO"+"</strong>"+ "</br></br>" + "El correo electronico es: "+
"</br><strong>" + email.value + "</br></strong>"+"La clave ingresada es: " + "</br><strong>" + password.value+"</strong></form>"
}
