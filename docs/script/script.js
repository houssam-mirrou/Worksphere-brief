const add_worker_butt = document.querySelector("#add-worker");
const form_container = document.querySelector(".form-container");
const side_image_container = document.querySelector(".side-image-container");
const ajouter_worker = document.querySelector(".ajouter-worker");

add_worker_butt.addEventListener("click", () => {
    form_container.classList.toggle("hidden");
})

form_container.addEventListener("click", () => {
    form_container.classList.toggle("hidden");

})
ajouter_worker.addEventListener("click", (event) => {
    event.stopPropagation();
});
