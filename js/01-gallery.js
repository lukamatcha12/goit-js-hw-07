import { galleryItems } from './gallery-items.js';

// Change code below this line

let gallery = document.querySelector(".gallery");

galleryItems.forEach(item => {
    let li = `
    <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
            />
        </a>
    </li>
    `;
    gallery.innerHTML += li;
});

gallery.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default behavior of anchor tag
    if (e.target.tagName === "IMG") {
        let bigImage = e.target.parentElement.getAttribute("href");
        let instance = basicLightbox.create(
            `<img src="${bigImage}" width="800" height="600"/>`
        );
        instance.show();

        window.addEventListener("keyup", (e) => {
            if (e.code === "Escape") {
                console.log("esc key is pressed");
                instance.close();
            }
        });
    }
});

console.log(galleryItems);