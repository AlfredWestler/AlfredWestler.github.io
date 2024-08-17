function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param)
}

const id = getQueryParam("id") //for firebase id data base
const change = getQueryParam("change") //to set the current change to product visualize

if(id !== null) {
    document.getElementById("input-query").innerText = `production id: ${id}`;
} else {
    document.getElementById("input-query").innerText = `No se encontró el parámetro "id" en la URL.`;
}