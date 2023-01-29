let slideElement  = document.querySelector("#slide")
let btn = document.querySelector("#btn_gerar");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#senha");
let conteiner = document.querySelector("#show");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*+-/";

let novaSenha = "";

sizePassword.innerHTML = slideElement.value;
slideElement.oninput = function (){
    sizePassword.innerHTML = this.value
}
function gerarSenha(){


    let pass = "";
    for (let i = 0, n = charset.length; i < slideElement.value; ++i) {
        pass  += charset.charAt(Math.floor(Math.random()*n));
        
    }

    conteiner.classList.remove("hide");
    password.innerHTML= pass; 
    novaSenha= pass; 
}

function copySenha(){
    alert("senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha);
}
