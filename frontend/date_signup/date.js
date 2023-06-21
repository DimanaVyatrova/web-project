for(let i = 1; i<=13; i++) {

}

const elem = document.getElementById("1");
console.log(elem);

elem.addEventListener('click', (event) => {
    console.log("here");

    const section = document.getElementById("info");
    // const form = document.createElement("form");
    // section.appendChild(form);

    // const form_section = document.createElement("section");
    // form.appendChild(form_section);

    const p = document.createElement("text");
    p.textContent = "Записване на час за: дата 12.05.23, час " + elem.innerText;
    section.appendChild(p);

    section.appendChild(document.createElement("br"));

    const name = document.createElement("input");
    name.setAttribute("placeholder", "Име");
    section.appendChild(name);

    section.appendChild(document.createElement("br"));

    const fn = document.createElement("input");
    name.setAttribute("placeholder", "Факултетен номер");
    section.appendChild(fn);

    section.appendChild(document.createElement("br"));

    const topic = document.createElement("input");
    name.setAttribute("placeholder", "Тема на реферата");
    section.appendChild(topic);

    event.preventDefault();
});