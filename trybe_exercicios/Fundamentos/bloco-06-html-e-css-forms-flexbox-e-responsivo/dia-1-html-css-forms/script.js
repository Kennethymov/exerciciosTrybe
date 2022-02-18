function interromperPadrao() {
    event.preventDefault();
};


function limparInfo() {
    document.querySelector("#full-name").value = "";
    document.querySelector("#resposta").value = "";
}

window.onload = function () {
    const buttonEnviar = document.querySelector("#submit");
    buttonEnviar.addEventListener("click", interromperPadrao)
    const buttonClear = document.querySelector("#clear");
    buttonClear.addEventListener("click", limparInfo)
}
