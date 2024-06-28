
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
    path: 'resources/rings_lottie.json'
});

const partyAnimation = lottie.loadAnimation({
    container: document.getElementById('party-lottie-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'resources/party_conffeti_lottie.json'
});