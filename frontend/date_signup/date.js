const searchForm = document.getElementById('search-form');
const submitForm = document.getElementById('submit-form');

//Търсене
searchForm.addEventListener('submit', (event) => {

//console.log('hahah');// влиза във функцията

const input_name = document.getElementById('name');
const input_fn = document.getElementById('faculty_number');

const userData = {};
userData[input_name.name] = input_name.value;
userData[input_fn.name] = input_fn.value;

fetch('../../backend/api/search-user.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData)
})
.then((httpData) => {

    return httpData.json();
})
.then((data) => {

    data.forEach(row => {

        const topic = document.getElementById('topic');
        topic.value = row.topic;

        const field = document.getElementById('field');
        field.value = row.field; 

        const technology = document.getElementById('technology');
        technology.value = row.technology;

    });

});

event.preventDefault();
});

//Submit


submitForm.addEventListener('submit', (event) => {

    const inputs = submitForm.querySelectorAll('input');
    const inputsFirstForm = searchForm.querySelectorAll('input');

    const userData = {};
    inputsFirstForm.forEach(input => {
        userData[input.name] = input.value;
    });

    inputs.forEach(input => {
         userData[input.name] = input.value;
    });

    const selectors = submitForm.querySelectorAll('select');
    selectors.forEach(selector => {
        userData[selector.id] = selector.value;
   });

   var selectObject = document.getElementById("hour");
    for (var i=0; i<selectObject.length; i++) {
        if (selectObject.options[i].value == userData["hour"]) {
            selectObject.remove(i);
        }
    }
    

    fetch('../../backend/api/date_signup.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
    .then((httpData) => {

        return httpData.json();
    })
    .then((data) => {

        const pass_rep = document.getElementById('last');
        const p = document.createElement('p');
        p.setAttribute("id", "msg");
        pass_rep.appendChild(p);

        if (data.status === 'SUCCESS') {
            const p = document.getElementById("msg");
            p.textContent = data.message;
            p.style.color = "green";
        }

        if (data.status === 'ERROR') {
            const p = document.getElementById("msg");
            p.textContent = "Грешка в сървъра. Моля, опитайте по-късно.";
            p.style.color = "red";
        }

    });

    event.preventDefault();
});
