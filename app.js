const contentEl = document.getElementById('content')

function moveMouse(event) {
    let yPercent = (event.clientY / window.innerHeight) * 100;
    let xPercent = (event.clientX / window.innerWidth) * 100;
    contentEl.style.transform = `translate(-${xPercent / 20}%, -${yPercent / 20}%)`;
}

window.addEventListener('mousemove', moveMouse);