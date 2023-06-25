const searchForm = document.getElementById('search-form');

console.log("asdsdf");

searchForm.addEventListener('submit', (event) => {
    console.log("in listener");

    const myNode = document.getElementById("table");
    while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild);
    }

    const tableRow = document.createElement('tr');

    const tableColumnHour = document.createElement('th');
    tableColumnHour.innerText = "Час";
    tableRow.appendChild(tableColumnHour);

    const tableColumnName = document.createElement('th');
    tableColumnName.innerText = "Име";
    tableRow.appendChild(tableColumnName);

    const tableColumnFN = document.createElement('th');
    tableColumnFN.innerText = "ФН";
    tableRow.appendChild(tableColumnFN);

    const tableColumnTopic = document.createElement('th');
    tableColumnTopic.innerText = "Тема";
    tableRow.appendChild(tableColumnTopic);

    myNode.appendChild(tableRow);

    const userData = {};
    const selectors = searchForm.querySelectorAll('select');
    selectors.forEach(selector => {
        userData[selector.id] = selector.value;
    });

    console.log(userData);
    console.log(JSON.stringify(userData));

    fetch('../../backend/api/search.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
    .then((httpData) => {

        console.log("HttpData");
        console.log(httpData);

        return httpData.json();
    })
    .then((data) => {
        console.log("data");
        console.log(data);

        const table= document.getElementById('table');

        data.forEach(row => {
            console.log(row);
            const tableRow = document.createElement('tr');

            const tableRowHour = document.createElement('td');
            tableRowHour.innerText = row.hour;
            tableRow.appendChild(tableRowHour);

            const tableRowName = document.createElement('td');
            tableRowName.innerText = row.name;
            tableRow.appendChild(tableRowName);

            const tableRowFN = document.createElement('td');
            tableRowFN.innerText = row.faculty_number;
            tableRow.appendChild(tableRowFN);

            const tableRowTopic = document.createElement('td');
            tableRowTopic.innerText = row.topic;
            tableRow.appendChild(tableRowTopic);

            table.appendChild(tableRow);

        });
    });

    event.preventDefault();
});