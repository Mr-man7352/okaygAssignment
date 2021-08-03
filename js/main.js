
// mock employeeData
const employeeData = [
    {
        id: 1,
        candidateId: "c1",
        laptopId: "l1",
        date: "03/08/2021",
        delete: false,
    },
    {
        id: 2,
        candidateId: "c2",
        laptopId: "l2",
        date: "03/08/2021",
        delete: false,
    },
    {
        id: 3,
        candidateId: "l3",
        laptopId: "c3",
        date: "03/08/2021",
        delete: false,
    },
];

// this function displays the, all employee record
const showData = (dataOfEmployee) => {
    let html = "";
    dataOfEmployee.forEach(function (element, index) {
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
                <span type="button" class="btn btn-outline-dark btn-sm mx-1" onclick="deleteRecord(${index});">delete</span>
            </td>
        </tr>
    `;
    });

    let rows = document.getElementById("employeesData");
    rows.innerHTML = html;
};

// this function display the form to add record
const formDisplay = (idFormContainer) => {
    let formContainer = document.getElementById(idFormContainer);
    formContainer.classList.remove("formDisplay");
};

// this function add record to employee data
const formSubmitted = (idFormContainer, idOfInputs) => {
    let formContainer = document.getElementById(idFormContainer);
    formContainer.classList.add("formDisplay");
    let fromId = document.getElementById(idOfInputs[0]).value;
    let formCandidateId = document.getElementById(idOfInputs[1]).value;
    let fromLaptopId = document.getElementById(idOfInputs[2]).value;
    let fromDate = document.getElementById(idOfInputs[3]).value;
    let fromDelete = document.getElementById(idOfInputs[4]).value;

    let formData = {
        index: employeeData.length + 1,
        id: fromId,
        candidateId: formCandidateId,
        laptopId: fromLaptopId,
        date: fromDate,
        delete: fromDelete,
    };

    employeeData.push(formData);
    showData(employeeData);

};

// this function delete the record
const deleteRecord = (index) => {
    console.log(employeeData[index])
    employeeData.splice(index, 1)
    showData(employeeData);

}

showData(employeeData);
