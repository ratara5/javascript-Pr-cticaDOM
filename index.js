let button=document.querySelector(".send-button")
let oldValue=button.value;
button.value=oldValue.toUpperCase();

const contenedor = document.querySelector(".flex-container");
let contador=0;

function crearLlave(nombre,modelo,precio){
    contador++;
	img = "<img class='llave-img' src='llave.png'>";
	nombre = `<h2>${nombre}</h2>`;
	modelo = `<h3 id='${modelo}'>Modelo: ${modelo}</h3>`;
	precio = `<p>Precio: <b>$${precio}</b></p>`;
	return [img,nombre,modelo,precio];
}

const changeHidden=(number)=>{
    document.querySelector(".llave-data").value=number
}

let fragmentoDocumento=document.createDocumentFragment();

for(var i=1;i<=20;i++){
    
    let modeloRandom=Math.round(Math.random()*1000+30); //número aleatorio entre 30 y 40
    let precioRandom=Math.round(Math.random()*10000);
    let llave=crearLlave(`Llave ${i}`,`${modeloRandom}`,precioRandom);
    let div=document.createElement("DIV");
    div.addEventListener("click",()=>{changeHidden(modeloRandom)})
    div.tabIndex=i;
    div.classList.add(`flex-item`,`item-${i}`);
    div.innerHTML=llave[0]+llave[1]+llave[2]+llave[3];
    fragmentoDocumento.appendChild(div);
}
contenedor.appendChild(fragmentoDocumento);
