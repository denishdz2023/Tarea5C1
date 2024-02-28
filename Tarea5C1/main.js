class Cliente{
    constructor(clientes,comidas,bebidas,cantidadC,cantidadB){
        this.clientes= clientes
        this.comidas= comidas
        this.bebidas= bebidas
        this.cantidadC= cantidadC
        this.cantidadB= cantidadB
    }
}

class Cocina extends Cliente{
    constructor(clientes,comidas,bebidas,cantidadC,cantidadB, estadoCocinando){
        super(clientes,comidas,bebidas,cantidadC,cantidadB)
        this.estadoCocinando= estadoCocinando
    }
}




let cliente1


function enviarPedido(){
    let clientes = document.getElementById('nombreCliente').value
    let comidas = document.getElementById('comidas').value
    let bebidas = document.getElementById('bebidas').value
    let cantidadC = document.getElementById('cantidadC').value
    let cantidadB = document.getElementById('cantidadB').value
    let estadoCocinando = 'cocinandolo'

    if (cantidadC === 0 || cantidadB === 0 || clientes.trim() === '') {
        alert('Ingrese nombre y cantidad de alimento y bebidad, por favor')
        return
    }
     cliente1 = new Cocina(clientes, comidas, bebidas, cantidadC,cantidadB,estadoCocinando)

    document.getElementById('pedido').innerHTML=
    `<table border="1">`+
    `<tr>`+
    `<th>Cliente</th>`+
    `<th>Comida</th>`+
    `<th>Bebida</th>`+
    `<th>CantidadComida</th>`+
    `<th>cantidadBebida</th>`+
    `</tr>`+
    `<tr>`+
    `<td><label id="nombre"></label></td>`+
    `<td><label id="comida"></label></td>`+
    `<td><label id="bebida"></label></td>`+
    `<td><label id="cantiC"></label></td>`+
    `<td><label id="cantiB"></label></td>`+
    `</tr>`+
    `</table>`+
    `<input class="btns" id="btnListo" type="button" value="Pedido Listo" onclick="ordenLista()">`

    document.getElementById('nombre'). innerText= cliente1.clientes
    document.getElementById('comida').innerText= cliente1.comidas
    document.getElementById('bebida').innerText= cliente1.bebidas
    document.getElementById('cantiC').innerText= cliente1.cantidadC
    document.getElementById('cantiB').innerText= cliente1.cantidadB
    document.getElementById('btnListo').innerText= cliente1

    document.getElementById('estado').innerHTML=
    `<h1 id="cocinando"></h1>`
    document.getElementById('cocinando'). innerText= cliente1.estadoCocinando
    
}

function ordenLista(){

    document.getElementById('estado').innerHTML=
    `<h1 style="text-aling:center;"> Cliente:------${cliente1.clientes}------Su pedido esta listo, gracias por utilizar nuestros servicios!!</h1>`

    

}








