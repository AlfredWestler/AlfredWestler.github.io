//Fecha Objetivo
const countDownDate = new Date("Nov 17, 2024 16:00:00").getTime();

const x = setInterval(
    function() {

        // Obtiene la fecha y hora actual
        const now = new Date().getTime();

        // Calcula la diferencia entre la fecha objetivo y la fecha actual
        const difference = countDownDate - now;

        // Calcula los días, horas, minutos y segundos restantes
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Muestra la cuenta regresiva en un elemento HTML
        document.getElementById("table-days").innerHTML = days.toString();
        document.getElementById("table-hours").innerHTML = hours.toString();
        document.getElementById("table-minutes").innerHTML = minutes.toString();
        document.getElementById("table-seconds").innerHTML = seconds.toString();

        // Si la cuenta regresiva ha terminado, muestra un mensaje
        if (difference < 0) {
            clearInterval(x);
            showContainer(false)
        } else {
            showContainer(true)
        }
    },
    1000
);

function showContainer(condition) {

    const styleSheet = document.styleSheets[0]; // Accede al primer stylesheet (styles.css)

    if (condition) {
        if (styleSheet) {
            // Modifica las regla a none
            styleSheet.insertRule('.p2-count-down { display: flex; }', styleSheet.cssRules.length);
            styleSheet.insertRule('.p2-finish-count { display: flex; }', styleSheet.cssRules.length);
        }
    } else {
        if (styleSheet) {
            // Modifica las regla a none
            styleSheet.insertRule('.p2-count-down { display: flex; }', styleSheet.cssRules.length);
            styleSheet.insertRule('.p2-finish-count { display: flex; }', styleSheet.cssRules.length);
        }
    }
}