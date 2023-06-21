const registrationForm = document.getElementById('registration-form');

registrationForm.addEventListener('submit', (event) => {

    const inputs = registrationForm.querySelectorAll('input');

    const userData = {};
    inputs.forEach(input => {
        userData[input.name] = input.value;
    });

    console.log(userData['password']);
    console.log(userData);

    fetch('../../backend/api/registration.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: ""
    })
    .then((httpData) => {

        console.log("HttpData");
        console.log(httpData);

        return httpData.json();
    })
    .then((data) => {
        console.log("data");
        console.log(data);
        const pass_rep = document.getElementById('pass-repeat');
        const p = document.createElement('p');
        p.setAttribute("id", "msg");
        pass_rep.appendChild(p);

        if (data.status === 'SUCCESS') {
            const p = document.getElementById("msg");
            p.textContent = "Регистрацията е успешна!"
            p.style.color = "green";
        }

        if (data.status === 'ERROR') {
            const p = document.getElementById("msg");
            p.textContent = data.message;
            p.style.color = "red";
        }

    });

    event.preventDefault();
});