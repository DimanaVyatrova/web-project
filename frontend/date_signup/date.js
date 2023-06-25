const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (event) => {
    console.log("ahahaha");
    const inputs = signupForm.querySelectorAll('input');

    const userData = {};
    inputs.forEach(input => {
         userData[input.name] = input.value;
    });

    const selectors = signupForm.querySelectorAll('select');
    selectors.forEach(selector => {
        userData[selector.id] = selector.value;
   });

   var selectObject = document.getElementById("hour");
    for (var i=0; i<selectObject.length; i++) {
        if (selectObject.options[i].value == userData["hour"]) {
            selectObject.remove(i);
        }
    }
    //console.log(userData['password']);
    console.log(userData);
    console.log(JSON.stringify(userData));

    fetch('../../backend/api/date_signup.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
    .then((httpData) => {
        console.log(httpData);

        return httpData.json();
    })
    .then((data) => {
        console.log("here");
        console.log(data);

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