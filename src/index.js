const pantalla = document.querySelector(".pantalla");//aqui esta llamando a la etiqueta .pantalla
const botones = document.querySelectorAll(".btn");//aqui esta llamando a la etiqueta .btn

//
botones.forEach(boton =>{
    boton.addEventListener("click",() =>{

        const botonApretado = boton.textContent;
        if(boton.id === "c"){
            pantalla.textContent = "0";
            return;
        }
//------boton de borrar
        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!!" ){
                pantalla.textContent = "0";
            } else {
            pantalla.textContent = pantalla.textContent.slice(0,-1);
           } return;
        }
//------boton de igual
        if(boton.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent); //eval = evalua un conjunto de string que tenga operaciones matematicas en un solo string. no numerico
            }catch{
                pantalla.textContent = "Error!!";
            }
            return;
        }
//------Error!!
        if(pantalla.textContent === "0" || pantalla.textContent === "Error!!"){
            pantalla.textContent = botonApretado;
        }else{
            pantalla.textContent += botonApretado;
        }
    })
})
