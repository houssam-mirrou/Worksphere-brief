const add_worker_butt = document.querySelector("#add-worker");
const form_container = document.querySelector(".form-container");
const side_image_container = document.querySelector(".side-image-container");
const ajouter_worker = document.querySelector(".ajouter-worker");
const workers_holder = document.querySelector(".workers-holder");


//plan grids

//desktop
const conference_desktop = document.querySelector(".conference-desktop");
const reception_desktop = document.querySelector(".reception-desktop");
const server_desktop = document.querySelector(".server-desktop");
const break_room_desktop = document.querySelector(".break-room-desktop");
const archive_desktop = document.querySelector(".archive-desktop");
const security_desktop = document.querySelector(".security-desktop");

//phone
const reception_phone = document.querySelector(".reception-phone");
const conference_phone = document.querySelector(".conference-phone");
const break_room_phone = document.querySelector(".break-room-phone");
const server_phone = document.querySelector(".server-phone");
const archive_phone = document.querySelector(".archive-phone");
const security_phone = document.querySelector(".security-phone");


//declaration des array qui contient les worker
let workers_array = [];


//worker informations
const first_name = document.querySelector("#first-name");
const last_name = document.querySelector("#last-name");
const role = document.querySelector("#role");
const image = document.querySelector("#image");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const add_experience = document.querySelector(".add-experience");
const experiences_container = document.querySelector(".experiences-container");

const cancel_btn = document.querySelector(".cancel-btn");
const add_btn = document.querySelector(".add-btn");



//les fonction pour la verification des champ
function test_first_name(name) {
    let regex = /^[A-Za-z]{3,}$/;
    if (regex.test(name) === true) {
        return true;
    }
    return false;
}

function test_last_name(last_name) {
    let regex = /^[A-Za-z ]+$/;
    if (regex.test(last_name) === true) {
        return true;
    }
    return false;
}

function test_role(role) {
    let roles = ["Receptionist", "IT Technician", "Security Agent", "Manager", "Cleaning", "Other"];
    for (let temp of roles) {
        if (temp.toLowerCase() === role.toLowerCase()) {
            return true;
        }
    }
    return false;
}

function test_mail(mail) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(mail) === true) {
        return true;
    }
    return false;
}


function test_phone(phone) {
    const regex = /^[0-9]{8,15}$/;
    if (regex.test(phone) === true) {
        return true;
    }
    return false;
}

function test_image(image) {
    let regex = /\.(jpg|jpeg|png)$/i;
    if (regex.test(image) === true) {
        return true;
    }
    return false;
}

function test_exp_title(experience_title) {
    let ragex = /^[a-zA-Z ]{4,}$/;
    if (ragex.test(experience_title) === true) {
        return true;
    }
    return false;
}

function test_comp_title(company_title) {
    let ragex = /^[a-zA-Z ]{4,}$/;
    if (ragex.test(company_title) === true) {
        return true;
    }
    return false;
}

function test_description(description) {
    let ragex = /^[a-zA-Z ]{20,}$/;
    if (ragex.test(description) === true) {
        return true;
    }
    return false;
}

function test_date(exp_start, exp_end) {
    console.log(exp_start);
    console.log(exp_end);
    let start_date = new Date(exp_start);
    let end_date = new Date(exp_end);

    let date = (end_date.getFullYear() - start_date.getFullYear());
    console.log(date);

    let month = end_date.getMonth() - start_date.getMonth();
    console.log(month);

    if (month <= 0 || date < 0) {
        return false;
    }
    return true;
}


function verifier_worker(worker) {
    if (test_first_name(worker.first_name) === false) {
        first_name.focus();
        return false;
    }
    if (test_last_name(worker.last_name) === false) {
        last_name.focus();
        return false;
    }
    if (test_role(worker.role) === false) {
        role.focus();
        return false;
    }
    if (test_mail(worker.mail) === false) {
        email.focus();
        return false;
    }
    if (test_phone(worker.phone_number) === false) {
        phone.focus();
        return false;
    }
    if (test_image(worker.img) === false) {
        worker.img = "img/profile.png";
    }
    if (worker.experiences.length !== 0) {
        // get all blocks again (same order!)
        const blocks = document.querySelectorAll(".exp-block");

        worker.experiences.forEach((exp, i) => {

            const block = blocks[i];  // matching DOM block

            if (test_exp_title(exp.title) === false) {
                block.querySelector(".exp-title").focus();
                return false;
            }

            if (test_comp_title(exp.company) === false) {
                block.querySelector(".exp-company").focus();
                return false;
            }

            if (test_date(exp.start, exp.end) === false) {
                block.querySelector(".exp-duration-start").focus();
                return false;
            }

            if (test_description(exp.desc) === false) {
                block.querySelector(".exp-desc").focus();
                return false;
            }
        });
    }

    return true;
}


//fonction ceerer card_ worker

function creer_card_worker_container(worker) {
    const worker_div = document.createElement("div");
    worker_div.classList.add("flex", "flex-row", "gap-2", "bg-[#B9B8B4]", "rounded-[16px]", "items-center", "p-5", "relative");
    console.log(worker.img);
    const image = document.createElement("img");
    image.src = worker.img;
    image.classList.add("rounded-full", "w-[50px]", "h-[50px]", "crop", "object-cover",
        "object-center");

    const name_role_div = document.createElement("div");
    name_role_div.classList.add("flex", "flex-col", "gap-2");

    const fullname = document.createElement("h1");
    fullname.textContent = worker.first_name + " " + worker.last_name;
    const worker_role = document.createElement("h1");
    worker_role.textContent = worker.role;

    name_role_div.appendChild(fullname);
    name_role_div.appendChild(worker_role);

    const right_div = document.createElement("div");
    right_div.classList.add("flex", "flex-row", "place-content-between", "items-center", "w-full");

    const edit_butt = document.createElement("button");
    edit_butt.textContent = "Edit";
    edit_butt.classList.add("bg-[#F0A500]", "text-white", "rounded-[16px]", "p-2", "w-[70px]");
    const delete_button = document.createElement("i");
    delete_button.classList.add("fa-circle-minus", "fa-solid", "text-red-500");
    delete_button.classList.add("absolute", "top-2", "right-2");
    console.log(delete_button);
    const edit_delete_div = document.createElement("div");
    edit_delete_div.classList.add("flex", "flex-row", "items-center", "h-full");
    edit_delete_div.appendChild(edit_butt);

    const delete_div = document.createElement("div");
    delete_div.classList.add("flex", "items-start", "h-full", "justify-start");
    delete_div.appendChild(delete_button);
    edit_delete_div.appendChild(delete_div);

    right_div.appendChild(name_role_div);
    right_div.appendChild(edit_butt);
    worker_div.appendChild(delete_button);
    worker_div.appendChild(image);
    worker_div.appendChild(right_div);
    return worker_div;
}

//button listener pour afficher la form pour remplisser les information du worker
add_worker_butt.addEventListener("click", () => {
    form_container.classList.toggle("hidden");
})

form_container.addEventListener("click", () => {
    form_container.classList.toggle("hidden");
})

//pour stopper le close event sur le div de la form
ajouter_worker.addEventListener("click", (event) => {
    event.stopPropagation();
});

cancel_btn.addEventListener("click", () => {
    form_container.classList.toggle("hidden");
})

function empty_fields() {
    first_name.value = "";
    last_name.value = "";
    role.value = "";
    image.value = "";
    email.value = "";
    phone.value = "";
    while (experiences_container.firstChild) {
        experiences_container.removeChild(experiences_container.firstChild);
    }
}

add_btn.addEventListener("click", () => {
    const experiences_blocks = document.querySelectorAll(".exp-block");

    let experiences = [];
    experiences_blocks.forEach((block) => {
        let title = block.querySelector(".exp-title").value;
        let company = block.querySelector(".exp-company").value;
        let start = block.querySelector(".exp-duration-start").value;
        let end = block.querySelector(".exp-duration-end").value;
        let desc = block.querySelector(".exp-desc").value;
        experiences.push({
            title: title,
            company: company,
            start: start,
            end: end,
            desc: desc
        })

    })

    let worker = {
        first_name: first_name.value,
        last_name: last_name.value,
        role: role.value,
        img: image.value,
        mail: email.value,
        phone_number: phone.value,
        experiences: experiences,
        assigned: 0
    };



    if (verifier_worker(worker) === false) {
        return;
    }
    else {
        const worker_div = creer_card_worker_container(worker);
        workers_holder.appendChild(worker_div);
        form_container.classList.toggle("hidden");
        empty_fields();
    }
    console.log(worker);
    workers_array.push(worker);
    console.log(workers_array);
    reset_salles();
    reset_fields_containers();
    add_workers_to_fields();
})

add_experience.addEventListener("click", () => {
    const exp_block = document.createElement("div");
    exp_block.classList.add("flex", "flex-col", "gap-4", "exp-block", "p-5", "border-2", "border-[#4A4A4A]", "rounded-[16px]")
    exp_block.innerHTML =
        `
            <div class="flex flex-row place-content-between">
                <h1> Experience</h1>
                <i class="fa-solid fa-minus text-red-500 delete_item"></i>
            </div>

            <div class="flex flex-row place-content-between items-center">
                <label>Job Title</label>
                <input type="text" class="rounded-2xl p-4 bg-[#F5F2EB] exp-title"
                    placeholder="Job title (ex: IT Technician)">
            </div>

            <div class="flex flex-row place-content-between items-center">
                <label>Company</label>
                <input type="text" class="rounded-2xl p-4 bg-[#F5F2EB] exp-company"
                    placeholder="Company (ex: OCP)">
            </div>

            <div class="flex flex-row place-content-between items-center">
                <label>Start Date:</label>
                <input type="date" class="rounded-2xl p-4 bg-[#F5F2EB] exp-duration-start">
            </div>

            <div class="flex flex-row place-content-between items-center">
                <label>End Date:</label>
                <input type="date" class="rounded-2xl p-4 bg-[#F5F2EB] exp-duration-end">
            </div>

            <div class="flex flex-col gap-4">
                <label>Description</label>
                <textarea class="rounded-2xl p-4 bg-[#F5F2EB] exp-desc"
                        placeholder="Description (ex: Maintenance of servers)"></textarea>
            </div>
        `;


    const delete_item = exp_block.querySelector(".delete_item");
    delete_item.addEventListener("click", () => {
        experiences_container.removeChild(exp_block);
    })
    experiences_container.appendChild(exp_block);
})



function create_plus_item() {
    const item_div = document.createElement("div");
    item_div.classList.add("flex", "items-center", "w-full", "justify-center");
    const plus_div = document.createElement("div");
    plus_div.classList.add("plus", "rounded-xl", "bg-[#4A90E2]", "p-3", "text-white");
    const plus_icon = document.createElement("i");
    plus_icon.classList.add("fa-solid", "fa-plus");
    plus_div.appendChild(plus_icon);
    item_div.appendChild(plus_div);
    return item_div;
}

function create_user_on_room(worker, phone_container, desktop_container) {

    const worker_div_phone = document.createElement("div");
    worker_div_phone.className = "bg-[#FAF8F3] flex flex-col relative items-center justify-center rounded-3xl text-center";

    const img_p = document.createElement("img");
    img_p.src = worker.img;
    img_p.className = "w-10 h-10 rounded-full";

    const name_p = document.createElement("h1");
    name_p.textContent = worker.first_name + " " + worker.last_name;

    const del_p = document.createElement("i");
    del_p.className = "fa-solid fa-circle-minus text-red-500 absolute top-2 right-2";


    const worker_div_desktop = document.createElement("div");
    worker_div_desktop.className = "bg-[#FAF8F3] flex flex-col relative items-center justify-center rounded-3xl text-center";

    const img_d = document.createElement("img");
    img_d.src = worker.img;
    img_d.className = "w-10 h-10 rounded-full";

    const name_d = document.createElement("h1");
    name_d.textContent = worker.first_name + " " + worker.last_name;

    const del_d = document.createElement("i");
    del_d.className = "fa-solid fa-circle-minus text-red-500 absolute top-2 right-2";


    del_p.addEventListener("click", () => {
        phone_container.removeChild(worker_div_phone);
        desktop_container.removeChild(worker_div_desktop);
        worker.assigned = 0;
        filter_workers(workers_array);
    });

    del_d.addEventListener("click", () => {
        phone_container.removeChild(worker_div_phone);
        desktop_container.removeChild(worker_div_desktop);
        worker.assigned = 0;
        filter_workers(workers_array);
    });


    // Build DOM
    worker_div_phone.append(img_p, name_p, del_p);
    worker_div_desktop.append(img_d, name_d, del_d);

    phone_container.appendChild(worker_div_phone);
    desktop_container.appendChild(worker_div_desktop);
}




/*
    first_name: first_name.value,
        last_name: last_name.value,
        role: role.value,
        img: image.value,
        mail: email.value,
        phone_number: phone.value,
        experiences: experiences,
*/


//fonction ceerer card_ worker

function creer_card_worker(worker) {
    const worker_div = document.createElement("div");
    worker_div.classList.add("flex", "flex-row", "gap-2", "bg-[#B9B8B4]", "rounded-[16px]", "items-center", "p-5", "relative");
    console.log(worker.img);
    const image = document.createElement("img");
    image.src = worker.img;
    image.classList.add("rounded-full", "w-[50px]", "h-[50px]", "crop", "object-cover",
        "object-center");

    const name_role_div = document.createElement("div");
    name_role_div.classList.add("flex", "flex-col", "gap-2");

    const fullname = document.createElement("h1");
    fullname.textContent = worker.first_name + " " + worker.last_name;
    const worker_role = document.createElement("h1");
    worker_role.textContent = worker.role;

    name_role_div.appendChild(fullname);
    name_role_div.appendChild(worker_role);

    const right_div = document.createElement("div");
    right_div.classList.add("flex", "flex-row", "place-content-between", "items-center", "w-full");


    right_div.appendChild(fullname);
    right_div.appendChild(name_role_div);
    worker_div.appendChild(image);
    worker_div.appendChild(right_div);
    return worker_div;
}

const add_workers_container = document.querySelector(".add-workers-container");
add_workers_container.addEventListener("click", (event) => {
    event.stopPropagation();
})

const workers_container = document.querySelector(".workers-container");
workers_container.addEventListener("click", () => {
    workers_container.classList.toggle("hidden");
})

function create_plus_item_container(workers, container, desktop_container) {
    const plus_div = create_plus_item();
    const item_plus = plus_div.querySelector(".plus");

    const plus_div_desktop = create_plus_item();
    const item_plus_desktop = plus_div_desktop.querySelector(".plus");

    function openMenu() {
        
        while (add_workers_container.firstChild) {
            add_workers_container.removeChild(add_workers_container.firstChild);
        }
        reset_salles();
        filter_workers(workers_array);
        workers_container.classList.toggle("hidden");

        let roomWorkers = [];

        if (container === conference_phone) roomWorkers = salle_conference;
        else if (container === reception_phone) roomWorkers = salle_reception;
        else if (container === break_room_phone) roomWorkers = salle_personelle;
        else if (container === server_phone) roomWorkers = salle_serveur;
        else if (container === archive_phone) roomWorkers = salle_archive;
        else if (container === security_phone) roomWorkers = salle_securite;

        for (let worker of roomWorkers) {
            const temp_worker = creer_card_worker(worker);
            add_workers_container.appendChild(temp_worker);

            temp_worker.addEventListener("click", () => {
                worker.assigned = 1;
                console.log(worker);
                const plusElement = container.querySelector(".plus");
                const plusElement_desktop = desktop_container.querySelector(".plus");

                if (plusElement) {
                    plusElement.parentNode.remove();
                } 
                if (plusElement_desktop) {
                    plusElement_desktop.parentNode.remove();
                }
                create_user_on_room(worker, container, desktop_container);

                create_plus_item_container(workers, container, desktop_container);
                filter_workers(workers_array);
                workers_container.classList.toggle("hidden");
            });
        }
    }

    item_plus.addEventListener("click", openMenu);
    item_plus_desktop.addEventListener("click", openMenu);

    container.appendChild(plus_div);
    desktop_container.appendChild(plus_div_desktop);
}



//les arrays de tout les 
let it_guys = [];
let conf_guys = [];
let recept_guys = [];
let server_guys = [];
let achive_guys = [];
let break_guys = [];
let security_guys = [];
let managers_guys = [];
let cleaning_guys = [];
let others_gays = [];

let salle_conference = [];
let salle_reception = [];
let salle_serveur = [];
let salle_securite = [];
let salle_personelle = [];
let salle_archive = [];

let current_salle_conference = [];
let current_salle_reception = [];
let current_salle_serveur = [];
let current_salle_securite = [];
let current_salle_personelle = [];
let current_salle_archive = [];


function filter_workers(workers_array) {
    for (let worker of workers_array) {
        if (worker.assigned === 0) {
            if (worker.role === "Receptionist") {
                salle_reception.push(worker);
                salle_conference.push(worker);
                salle_personelle.push(worker);
                salle_archive.push(worker);
            }
            if (worker.role === "IT Technician") {
                it_guys.push(worker);
                salle_conference.push(worker);
                salle_serveur.push(worker);
                salle_personelle.push(worker);
                salle_archive.push(worker);
            }
            if (worker.role === "Security Agent") {
                salle_conference.push(worker);
                salle_securite.push(worker);
                salle_personelle.push(worker);
                salle_archive.push(worker);
            }
            if (worker.role === "Manager") {
                salle_reception.push(worker);
                salle_conference.push(worker);
                salle_serveur.push(worker);
                salle_securite.push(worker);
                salle_personelle.push(worker);
                salle_archive.push(worker);

            }
            if (worker.role === "Cleaning") {
                salle_conference.push(worker);
                salle_personelle.push(worker);
            }
            if (worker.role === "Other") {
                salle_conference.push(worker);
                salle_personelle.push(worker);
            }
        }

    }
}

function reset_salles() {
    salle_conference = [];
    salle_reception = [];
    salle_serveur = [];
    salle_securite = [];
    salle_personelle = [];
    salle_archive = [];
}

function reset_fields_containers() {
    conference_phone.innerHTML = "";
    reception_phone.innerHTML = "";
    break_room_phone.innerHTML = "";
    server_phone.innerHTML = "";
    archive_phone.innerHTML = "";
    security_phone.innerHTML = "";
}



function add_workers_to_fields() {
    filter_workers(workers_array);
    create_plus_item_container(salle_conference, conference_phone, conference_desktop);
    create_plus_item_container(salle_reception, reception_phone, reception_desktop);
    create_plus_item_container(salle_personelle, break_room_phone, break_room_desktop);
    create_plus_item_container(salle_serveur, server_phone, server_desktop);
    create_plus_item_container(salle_archive, archive_phone, archive_desktop);
    create_plus_item_container(salle_securite, security_phone, security_desktop);
}
