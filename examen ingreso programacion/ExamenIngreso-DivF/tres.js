function mostrar()
{
// 	debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
// Nombre,
// Obra Social ("PAMI", "OSDE" o "otras"),
// edad( solo mayores de edad, mas de 17),
// temperatura corporal(validar por favor)
// y sexo (validar).

// NOTA:el precio por pasajero es de $600.

// Se debe informar (solo si corresponde):




let nombre;
let osoc;
let edad;
let temperatura;
let sexo;
let contadorViejaOsde=0;
let flagA=1;
let temperaturaMujerJoven;
let nombreMujerJoven;
let flagMujer=1;
let acumBruto=0;

do{
nombre = prompt("ingrese el nombre");
osoc = prompt("ingrese obra social(PAMI , OSDE u otras)").toLowerCase();
while(osoc!="pami"&&osoc!="osde"&&osoc!="otras"){
osoc = prompt("Error.ingrese obra social(PAMI , OSDE u otras)").toLowerCase();
}
edad= parseInt(prompt("ingrese edad (mas q 17"));
while (isNaN(edad)||edad<=17){
edad= parseInt(prompt("Error.ingrese edad valida (mas que 17"));
}
temperatura= parseInt(prompt("ingrese temperatura"));
while (isNaN(temperatura)|| temperatura>=0){
temperatura= parseInt(prompt("Error.ingrese temperatura valida"));
}
sexo= prompt("ingrese sexo f/m");
while(sexo!="f"&&sexo!="m"){
sexo= prompt("error.ingrese sexo f/m");
}
// a) La cantidad de personas con OSDE de mas de 60 años.
if (osoc=="osde"&&edad>60) {
	contadorViejaOsde++;
	mensajeA= console.log("a)con osde mayor a 60 hay "+contador)
	flagA=0;
}
// b) el nombre y temperatura de la mujer con pami mas joven.
if ((osoc=="pami"&& sexo=="f" && mujerJoven>edad)||flagMujer) {
	mujerJoven=edad;
	temperaturaMujerJoven=temperatura;
	nombreMujerJoven=nombre;
	flagMujer=0;
}
// c) cuanto sale el viaje total sin descuento.
acumBruto+=600;

seguir = prompt("desea seguir cargando? s/n");
}while(seguir=="s")

// d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
if(osoc=="pami"){
	contPami++;
}
contTotal++;
promedioPami= contPami/contTotal;

if (flagA) {
	console.log("No hay con osde > 60 años");
}else{
	mensajeA;
}
if (flagMujer) {
	console.log("No hay mujer con pami");
}else{
	console.log("b) nombre de mujer pami mas joven: "+nombreMujerJoven+" temperatura: "+temperaturaMujerJoven);
}
console.log("c)viaje total sin descuento: "+acumBruto)


}