// Seleciona todas as divs com a classe "caixa"
let divs = document.querySelectorAll(".caixa");

// Adiciona um evento de clique para cada div
divs.forEach(div => {
    
    let corInicial = div.style.backgroundColor;

    div.addEventListener("click", function() {
        // Se a cor atual for preta, volta para a cor inicial
        if (div.style.backgroundColor === "black") {
            div.style.backgroundColor = corInicial;
        } else {
            // Se não for preta, muda para a cor preta
            div.style.backgroundColor = "black";
        }
    });
});
