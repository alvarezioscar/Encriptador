const textArea = document.querySelector(".form__input");
const imagenMuneco = document.querySelector(".result__img");
const loaderIcon = document.querySelector(".loader");
const mensajeResultado = document.querySelector(".result__title");
const textoResultado = document.querySelector(".result__text");
const botonEncriptar = document.querySelector(".form__btn");
const botonDesencriptar = document.querySelectorAll(".form__btn");
const botonCopiar = document.querySelector(".result__btn");
const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];


//Función para encriptar
function encriptarMensaje(mensaje){
    let mensajeEncriptado = "";
    for(let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
        for(let j=0; j<llaves.length; j++){
            if(letra === llaves[j][0]){
                encriptada = llaves[j][1];
            break;
            }
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;
}

//Función para desencriptar
function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g')
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0])
    }
    return mensajeDesencriptado;
}

//Ocultar elementos
textArea.addEventListener("input", (e)=>{
    imagenMuneco.style.display = "none";
    loaderIcon.classList.remove("hidden");
    mensajeResultado.textContent = "Capturando Mensaje";
    textoResultado.textContent = " ";
})

//Acciones del botón Encriptar
botonEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarMensaje(mensaje);
    textoResultado.textContent=mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    loaderIcon.classList.add("hidden");
    mensajeResultado.textContent = "El resultado es:";
})


//Acciones del botón de Desencriptar
botonDesencriptar[1].addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    textoResultado.textContent=mensajeDesencriptado;
    botonCopiar.classList.remove("hidden");
    loaderIcon.classList.add("hidden");
    mensajeResultado.textContent = "El resultado es:";
})

//Acciones del botón de Copiar
botonCopiar.addEventListener("click", (e)=>{
    let textoCopiado = textoResultado.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=>{
       imagenMuneco.style.display = "block";
       loaderIcon.classList.add("hidden");
       mensajeResultado.textContent = "El texto se copio correctamente"
       textoResultado.textContent = " ";
       botonCopiar.classList.add("hidden");
    })
})
