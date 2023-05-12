const robotron = document.querySelector("#robotron");

robotron.addEventListener("click", (e) => {
    console.log(e);
});

function dizOi(nome) {
    console.log("Oi, " + nome)
    console.log("Bem-vindo ao Robotron 2000!")
}

dizOi("Melk");