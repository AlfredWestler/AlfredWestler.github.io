const churchUrl = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAsl_wF89EpRrIYJ1-nxn70zPk_Jt2SpuQ&q=Rectoría+San+Buenaventura"
const eventUrl = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAsl_wF89EpRrIYJ1-nxn70zPk_Jt2SpuQ&q=Salones+de+Eventos+Cabaña+Encantada"
document.getElementById("event_maps_frame").src = eventUrl;
document.getElementById("church_maps_frame").src = churchUrl;