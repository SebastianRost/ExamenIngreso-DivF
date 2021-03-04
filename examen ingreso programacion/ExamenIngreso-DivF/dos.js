function mostrar()
{
  // Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
  // nombre
  // situcación laboral ("buscando" , "trabajando" o "solo estudiante")
  // cantidad de materias( mas de cero y menos de 8)
  // Sexo ( femenino , masculino , no binario)
  // Nota promedio (entre 0 y 10)
  // edad (validar)
  // se debe informar de existir, o informar que no existe , en el caso que corresponda.

 
 
 

let nombre;
let situacionLaboral;
let cantidadDeMateria;
let sexo;
let notaPromedio;
let edad;
let mejorPromedio=0;
let nombreMejorPromedio;
let mayorEdad=0;
let nombreViejo;
let acuTrabajando=0;
let contaTrabajando=0;
let promedioTrabajando=0;
let acuEstudiante=0;
let contaEstudiante=0;
let promedioEstudiante=0;
let acuBuscando=0;
let contaBuscando=0;
let promedioBuscando=0;
let flag=1;
let edadMenosMaterias;
let nombreMenosMaterias;
let flagEst=1;
let flagBus=1;
let flagtrab=1;

do{
  nombre = prompt("ingrese el nombre");
  situacionLaboral = prompt("ingrese situacion laboral(buscando , trabajando o solo estudiante)");
  while(situacionLaboral!="buscando"&&situacionLaboral!="trabajando"&&situacionLaboral!="solo estudiante"){
    situacionLaboral = prompt("Error.ingrese situacion laboral(buscando , trabajando o solo estudiante)");
  }
  sexo = prompt("ingrese sexo femenino, masculino o no binario");
  while(sexo!="femenino"&&sexo!="masculino"&&sexo!="no binario"){
  sexo = prompt("ingrese sexo femenino, masculino o no binario");
  }
  notaPromedio = parseInt(prompt("ingrese nota promedio de 0 a 10"));
  while(!(notaPromedio>=0&&notaPromedio<=10)){
  notaPromedio = parseInt(prompt("ingrese nota promedio de 0 a 10"));
  }
  cantidadDeMateria = parseInt(prompt("ingrese cantidad de materias 1 a 7"));
  while(!(cantidadDeMateria>=1&&cantidadDeMateria<=7)){
  cantidadDeMateria = parseInt(prompt("ingrese cantidad de materias 1 a 7"));
  }
  edad= parseInt(prompt("ingrese edad"));
  while (isNaN(edad)||edad<=0){
  edad= parseInt(prompt("Error.ingrese edad valida"));
  }
  
  // a) El nombre del mejor promedio que no de los que tarbajan o estan buscando
  
if (situacionLaboral=="solo estudiante"&& mejorPromedio<promedio){
  flagEst=0;
  mejorPromedio=promedio;
  nombreMejorPromedio=nombre;
}
 // b) El nombre del mas viejo de los alumnos que solo sea estudiantes
if (situacionLaboral=="solo estudiante" && mayorEdad<edad) {
  mayorEdad=edad;
  nombreViejo=nombre;
}

 // c) El promedio de nota por situacion laboral
if (situacionLaboral=="trabajando") {
  flagtrab=0;
  acuTrabajando+=notaPromedio;
  contaTrabajando++;
  promedioTrabajando=acuTrabajando/contaTrabajando;
} else if(situacionLaboral=="solo estudiante"){
  flagEst=0;
  acuEstudiante+=notaPromedio;
  contaEstudiante++;
  promedioEstudiante=acuEstudiante/contaEstudiante;
}else{
  flagBus=0;
  acuBuscando+=notaPromedio;
  contaBuscando++;
  promedioBuscando=acuBuscando/contaBuscando;
}

 // d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo
if (flag||(situacionLaboral=="buscando" && menosMaterias>cantidadDeMateria)) {
  menosMaterias=cantidadDeMateria;
  flag=0;
  edadMenosMaterias=edad;
  nombreMenosMaterias=nombre;
}
seguir = prompt("desea seguir cargando? s/n");
}while(seguir=="s");

if (flagEst) {
  console.log("no hay persona que solo estudie para el a) y el b)")
}else{
console.log("El nombre del mejor promedio que solo estudia es: "+nombreMejorPromedio);
console.log("El nombre del mas viejo que solo estudia es: "+nombreViejo);
}
console.log("c) El promedio de nota por situacion laboral:");
if (flagtrab) {
  console.log("no hay persona que trabaja");
  }else{
console.log("Trabajando: "+promedioTrabajando);
}
if (flagEst) {
  console.log("no hay persona que solo estudia");
}else{
 console.log("Solo estudia: "+promedioEstudiante); 
}
if (flagBus) {
  console.log("no hay persona que busca trabajo");
  }else{
console.log("Buscando trabajo: "+promedioBuscando);
  }
  if (flagBus) {
    console.log("d) no hay persona que busca trabajo")
  }else{
console.log(" d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo es: "+nombreMenosMaterias+" con "+edadMenosMaterias+" años");
  }



}