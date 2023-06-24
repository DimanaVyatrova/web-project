const searchForm = document.getElementById('search-form');

console.log("asdsdf");

searchForm.addEventListener('submit', (event) => {
    console.log("asdsdf");
    
    const userData = {};
    const selectors = signupForm.querySelectorAll('select');
    selectors.forEach(selector => {
        userData[selector.id] = selector.value;
    });

    console.log(userData);


    event.preventDefault();
});