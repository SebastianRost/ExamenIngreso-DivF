
function mostrar()
{
// 	Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
// de cada una debo obtener los siguientes datos:
// el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
// el precio (validar entre 100 y 300),
// la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
// Categoria ("desinfectante", "bactericida", "detergente" ) y el fabricante.
// Se debe Informar al usuario lo siguiente:





let nombre;
let precio;
let cantidad;
let categoria;
let fabricante;
let promedioAlcohol=0;
let promedioIac=0;
let promedioQ=0;
let acuDesifectante=0;
let acuBactericida=0;
let acuDetergente=0;
let acuAl=0;
let acuIac=0;
let acuQ=0;
let contaIac=0;
let contaAlcohol=0;
let contaQ=0;
let acuDetBarato=0;
let masCaro=0;
let fabricanteCaro;
let categoriaCara;


for (let producto = 0; producto < 5; producto++) {
	nombre = prompt("ingrese el nombre de producto");
	tipo = prompt("ingrese el tipo de producto (ALCOHOL/IAC/QUAT)").toLowerCase();
	while (tipo!="alcohol"&&tipo!="iac"&&tipo!="quat") {
	tipo = prompt("Error.ingrese el tipo de producto (ALCOHOL/IAC/QUAT)").toLowerCase();
	}
	precio = parseFloat(prompt("ingrese el precio: (entre 100 y 300)"));
	while (!(precio>=100&&precio<=300)) {
	precio = parseFloat(prompt("Error.ingrese el precio: (entre 100 y 300)"));
	}		
	cantidad = parseInt(prompt("ingrese la cantidad(menor a 1000)"));
	while (!(cantidad>0 && cantidad<=1000)) {
	cantidad = parseInt(prompt("Error.ingrese la cantidad(menor a 1000)"));
	}	
	categoria = prompt("ingrese la categoria (desinfectante/bactericida/detergente)");
	while (categoria!="desinfectante"&&categoria!="bactericida"&&categoria!="detergente") {
		categoria = prompt("ingrese la categoria (desinfectante/bactericida/detergente)");
	}
	fabricante = prompt("ingrese el fabricante");

	// a) El promedio de cantidad por tipo de producto

		if (tipo=="alcohol") {
			acuAl+=cantidad;
			contaAlcohol++;
			promedioAlcohol=acuAl/contaAlcohol;
		} else if(tipo=="iac"){
			acuIac+=cantidad;
			contaIac++;
			promedioIac=acuIac/contaIac;
		}else{
			acuQ+=cantidad;
			contaQ++;
			promedioQ=acuQ/contaIac;
		}
// b) La categoria con mas cantidad de unidades en total de la compra
if (categoria=="desifectante") {
	acuDesifectante+=cantidad;
} else if(categoria=="bactericida"){
	acuBactericida+=cantidad;
}else{
	acuDetergente+=cantidad;
	if (precio<=200) {
		acuDetBarato+=cantidad;
	}
}
if (acuDesifectante>acuBactericida&&acuDesifectante>acuDetergente){
	categoriaMayor="La categoría con mas unidades es desinfectante";
} else if(acuBactericida>=acuDesifectante&& acuBactericida>acuDetergente){
	categoriaMayor="La categoría con mas unidades es bactericida";			
}else{
	categoriaMayor="La categoría con mas unidades es detergente";
}
//c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
// d) el fabricante y Categoria del más caro de los productos
if (precio>masCaro){
	masCaro=precio;
	fabricanteCaro=fabricante;
	categoriaCara=categoria;
}

}
console.log("a) El promedio de cantidad por tipo de producto es: Alcohol: "+promedioAlcohol+" iac: "+promedioIac+" QUAT: "+promedioQ);
console.log(" b) "+categoriaMayor);
console.log(" c) Unidades de detergente con precios menos a 200 (inclusive) se compraron en total: "+acuDetBarato);
console.log(" d) el fabricante y Categoria del más caro de los productos: fabricante: "+fabricanteCaro+" categoría: "+categoriaCara );

}
