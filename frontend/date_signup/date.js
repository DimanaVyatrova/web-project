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


//    var subjectObject = {
//     "12.05.23": [
//       "12:00-12:07", "12:08-12:15", "12:16-12:23"   
//     ],
//     "13.05.23": [
//         "12:00-12:07", "12:08-12:15", "12:16-12:23" 
//     ]
//   }

   var selectObject = document.getElementById("hour");
    for (var i=0; i<selectObject.length; i++) {
        if (selectObject.options[i].value == userData["hour"]) {
            selectObject.remove(i);
        }
    }
    // console.log(userData['password']);
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

    });

    event.preventDefault();
});