function p6MusicContent() {
    const content = document.getElementById('p6-expandable-music');
    const button = document.getElementById('p6-button-music');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        button.textContent = 'Ocultar';
    } else {
        content.style.display = 'none';
        button.textContent = 'Ver mas';
    }
}

function p6DressCodeContent() {
    const content = document.getElementById('p6-expandable-dress');
    const button = document.getElementById('p6-button-dress');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        button.textContent = 'Ocultar';
    } else {
        content.style.display = 'none';
        button.textContent = 'Ver mas';
    }
}

function p6TipsContent() {
    const content = document.getElementById('p6-expandable-tips');
    const button = document.getElementById('p6-button-tips');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        button.textContent = 'Ocultar';
    } else {
        content.style.display = 'none';
        button.textContent = 'Ver mas';
    }
}

function p6Confirmation() {
    const content = document.getElementById('p6-expandable-confirmation');
    const button = document.getElementById('p6-button-confirmation');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        button.textContent = 'Ocultar';
    } else {
        content.style.display = 'none';
        button.textContent = 'Ver detalles';
    }
}