
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
    path: 'resources/data_net_anim.json'
});

const partyAnimation = lottie.loadAnimation({
    container: document.getElementById('party-lottie-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'resources/data_net_anim.json'
});