var randomnum = Math.floor(Math.random() * 101)

function Chutar() {
    var chute = document.getElementById("mental").value;
    var resultado = document.getElementById("result");

    var certo = "Acertou";
    var errado = "Errou";

    if (chute == randomnum){
        resultado.innerHTML = certo;
    }    
    else {
        resultado.innerHTML = errado;
    };
    
    console.log(randomnum);
}
