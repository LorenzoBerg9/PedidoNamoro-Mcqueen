function sim() {
    var mensagem = "A gente S2:";
    var confirmacao = confirm(mensagem);
    if (confirmacao) {
        window.location.href = "https://www.youtube.com/watch?v=b2SIMDxHfL0";
    }
}

function desvia(){
    var btn = document.getElementById("btn");
    btn.style.position = `absolute`;
    btn.style.bottom = geraPosicao(10,90);
    btn.style.left = geraPosicao(10,90);
    console.log("opa, desviei...")
}

function geraPosicao(min, max){
    return Math.random() * (max - min) + min + "%";
}