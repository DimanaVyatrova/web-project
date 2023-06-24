const table= document.getElementById('table');

fetch('../../backend/api/schedule.php')
    .then(response => {
        return response.json();
    })
    .then(rows => {
        rows.forEach(row => {
            const tableRow = document.createElement('tr');

            const tableRowHour = document.createElement('td');
            tableRowHour.innerText = row.hour;
            tableRow.appendChild(tableRowHour);
            console.log(row.hour);

            // const tableRowName = document.createElement('td');
            // tableRowHour.innerText = row.name;
            // tableRow.appendChild(tableRowName);

            // const tableRowFN = document.createElement('td');
            // tableRowHour.innerText = row.faculty_number;
            // tableRow.appendChild(tableRowFN);

            // const tableRowTopic = document.createElement('td');
            // tableRowHour.innerText = row.topic;
            // tableRow.appendChild(tableRowTopic);

            // table.appendChild(tableRow);

        });


    });