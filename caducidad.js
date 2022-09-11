let year = prompt("Ingresa el año de caducidad del producto: ");
let mesAct = 9, yearAct = 2022;

console.log(typeof(year))

if(year == yearAct){
    let mes = prompt("Ingresa el mes de caducidad del producto: ");
    if(mes > mesAct ){
        let cantMesCad = mesAct - mes;
        if(cantMesCad > 4){
            console.log("Producto estable");
        }
        else if(cantMesCad < 5 && cantMesCad > 2){
            console.log("Producto en oferta");
        }
        else if(cantMesCad <= 2){
            console.log("Devolver producto");
        }
    }else {
        console.log("Producto caducado");
    }
}

Algoritmo edad 

Fin