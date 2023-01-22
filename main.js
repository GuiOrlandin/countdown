const diasEl = document.querySelector("#dias")
const horasEl = document.querySelector("#horas")
const minutosEl = document.querySelector("#minutos")
const segundosEl = document.querySelector("#segundos")

const dataFinal = "1 Jan 2024"

function countdown() {
    const dataEsperada = new Date(dataFinal);
    const presenteData = new Date();

    const totalSegundos = (dataEsperada - presenteData) / 1000;

    const dias = Math.floor(totalSegundos / 3600 / 24 );
    const horas = Math.floor(totalSegundos/ 3600) % 24;
    const mins = Math.floor(totalSegundos/ 60) % 60;
    const segundos = Math.floor(totalSegundos) % 60;

    
    diasEl.innerHTML = `${formatTime(dias)}`;
    horasEl.innerHTML = `${formatTime(horas)}`;
    minutosEl.innerHTML = `${formatTime(mins)}`;
    segundosEl.innerHTML = `${formatTime(segundos)}`;


    function formatTime(time){
        return time < 10 ? `0${time}` : time;
    }
}

countdown();

setInterval(countdown, 1000);