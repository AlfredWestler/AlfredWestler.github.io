
const fireworksAnimation = lottie.loadAnimation({
    container: document.getElementById('finish-count-lottie-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'resources/fireworks_lottie.json'
});

const ringsAnimation = lottie.loadAnimation({
    container: document.getElementById('rings-lottie-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'resources/Campanas.json'
});

const partyAnimation = lottie.loadAnimation({
    container: document.getElementById('party-lottie-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'resources/Globos.json'
});

const newAnimation = lottie.loadAnimation({
    container: document.getElementById('just-lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'resources/Logo.json'
});