const add_worker_butt = document.querySelector("#add-worker");
const form_container = document.querySelector(".form-container");
const side_image_container = document.querySelector(".side-image-container");
const ajouter_worker = document.querySelector(".ajouter-worker");
const workers_holder = document.querySelector(".workers-holder");



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

//declaration des array qui contient les worker
let workers_array = [];
let it_guys = [];
let conf_guys = [];
let recept_guys = [];
let server_guys = [];
let achive_guys = [];
let break_room_guys = [];


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
    };




    if (verifier_worker(worker) === false) {
        return;
    }
    else {
        const worker_div = creer_card_worker(worker);
        workers_holder.appendChild(worker_div);
        form_container.classList.toggle("hidden");
        empty_fields();
    }
    console.log(worker);

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

