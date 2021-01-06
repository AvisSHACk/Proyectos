/*Evento abrir modal*/
document.querySelector(".main-proyectos__container").addEventListener('click', (e) => {
    let el = e.target;
    let body = document.querySelector('body');
    if(el.tagName === 'IMG'){
        let lightboxElement = document.createElement('div');
        lightboxElement.innerHTML = `
            <div class="main-lightbox__container">
                <div class="main-lightbox__close">x</div>
                <h4 class="main-lightbox__title">${el.title}</h4>
                <img class="main-lightbox__img" src="${el.src}" alt="">
                <p class="main__lightbox__description">${el.alt}</p>
            </div>
        `

        lightboxElement.className = "main-lightbox";
        body.appendChild(lightboxElement);
    }

    /*Evento cerrar*/
    document.querySelector(".main-lightbox__close").addEventListener("click", e => {
        let lightbox = document.querySelector('.main-lightbox');
        document.body.removeChild(lightbox);

    })
})


