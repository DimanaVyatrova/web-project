const table= document.getElementById('table');

fetch('../../backend/api/schedule.php')
    .then(response => {
        return response.json();
    })
    .then(rows => {
        console.log(rows);
        rows.forEach(row => {
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