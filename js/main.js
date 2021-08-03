const employeeData = [
    {
        id: 1,
        candidateId: "c1",
        laptopId: "l1",
        date: "03/08/2021",
        delete: false
    },
    {
        id: 2,
        candidateId: "c2",
        laptopId: "l2",
        date: "03/08/2021",
        delete: false
    },
    {
        id: 3,
        candidateId: "l3",
        laptopId: "c3",
        date: "03/08/2021",
        delete: false
    }
]

let html = "";

employeeData.forEach(function (element) {
    html += `
    <tr>
                    <th scope="row">${element.id}</th>
                    <td>${element.candidateId}</td>
                    <td>${element.laptopId}</td>
                    <td>${element.date}</td>
                    <td>
                   ${element.delete}</td>
                    <td>
                        <span type="button" class="btn btn-outline-dark btn-sm mx-1">edit</span>

                    </td>
                </tr>
`
});

let rows = document.getElementById('employeesData');

rows.innerHTML = html;