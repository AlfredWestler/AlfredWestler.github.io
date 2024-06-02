
const url = "https://www.google.com.mx/maps/place/Salones+de+Eventos+Caba%C3%B1a+Encantada/@19.2295242,-99.1969413,17z/data=!3m1!4b1!4m6!3m5!1s0x85cdfdf75ba6dab3:0xc2efda4bc94ba16!8m2!3d19.2295242!4d-99.1943664!16s%2Fg%2F11bbrq9jq_?entry=ttu";
document.getElementById("enlace").href = url;
document.getElementById("frame").src = url;
document.getElementById("boton").onclick = function() {
    window.open(url, "_blank");
};