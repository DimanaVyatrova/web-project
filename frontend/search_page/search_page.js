const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', (event) => {
    const userData = {};
    const selectors = signupForm.querySelectorAll('select');
    selectors.forEach(selector => {
        userData[selector.id] = selector.value;
    });

    console.log(userData);


    event.preventDefault();
});