// Declaracion de variables y constantes globales
const IVA = 0.21;

// Declaracion de funciones
const calcularIVA = (precio) => {
    return precio * IVA;
}

const calcularDescuento = (precio, porcentaje) => {
    return (precio * porcentaje)/100;
}

const calcularPrecioFinal = (precioBruto, porcentajeDescuento) => { 
    let valorDescuento = calcularDescuento(precioBruto, porcentajeDescuento);
    let subTotal = precioBruto - valorDescuento;
    let valorIva = calcularIVA(subTotal);
    return valorIva + subTotal;
}

const calcularPromedioPrecio = () => {
    let continuar = "";                    
    let sumatoria = 0;
    let cant = 0;
    do {
        sumatoria += parseFloat(prompt("Ingrese precio"));                        
        cant++;
        continuar = prompt("¿Desea ingresar más precios? S/N");    
    } while (continuar == "S");
    
    return sumatoria/cant;    
}

const mostrarMenu = () => {
    let salir = false;
    let opcion = "";
    do {
        opcion = prompt("Ingrese el número de la opción a utilizar:\n 1-Calcular IVA \n 2-Calcular Desuento \n 3-Calcular Precio Final \n 4-Calcular promedio de Precios \n 5-Salir");                
        
        // Caso en el que presione el boton cancelar o la tecla ESC
        if (opcion == null) {
            salir = true;        
        }else{            
            // Casteo la opcion a entero para utilizar el menu numérico
            const opcionNumerica = parseInt(opcion);
            switch (opcionNumerica) {
                case 1: 
                    let valorUno = parseFloat(prompt("Ingrese el precio del producto en pesos"));
                    alert("El valor del IVA es de: $"+ calcularIVA(valorUno));           
                    break;
                case 2:
                    let precio = parseFloat(prompt("Ingrese el precio del producto en pesos"))
                    let valorDos = parseFloat(prompt("Ingrese el porcentaje de descuento"));
                    alert("El descuento es de: $"+ calcularDescuento(precio, valorDos)); 
                    break;            
                case 3:             
                    let precioBruto = parseFloat(prompt("Ingrese el precio del producto en pesos"));
                    let porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento"));
                    alert("El precio final es de: $"+ calcularPrecioFinal(precioBruto, porcentajeDescuento));
                    break;  
                case 4:
                    alert("El promedio de precio es de: $"+ calcularPromedioPrecio());
                    break;
                case 5:
                    salir = true;
                    break;
                
                default:
                    alert("Opción incorrecta");
                    break;
            }    
        }        
    } while (!salir);    
}

// Main
mostrarMenu();