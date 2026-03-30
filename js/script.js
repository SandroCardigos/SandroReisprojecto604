const form = document.getElementById("form");

if(form){

form.addEventListener("submit", function(e){


let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let mensagem = document.getElementById("mensagem").value;

if(nome === "" || email === "" || mensagem === ""){

alert("Preencha todos os campos");

}else{

alert("Mensagem enviada com sucesso!");

}

});

}