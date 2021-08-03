
// mock employeeData
const employeeData = [
    {
        id: 1,
        candidateId: "c1",
        laptopId: "l1",
        date: "2021-08-03",
        delete: false,
    },
    {
        id: 2,
        candidateId: "c2",
        laptopId: "l2",
        date: "2021-08-03",
        delete: false,
    },
    {
        id: 3,
        candidateId: "c3",
        laptopId: "l3",
        date: "2021-08-03",
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
                <span type="button" class="btn btn-outline-dark btn-sm mx-1" onclick="showEditRecord(${index});">edit</span>
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

const showEditRecord = (index) => {
    let editContainer = document.getElementById("editContainer");
    editContainer.classList.remove("editDisplay");
    let editData = employeeData[index]
    editContainer.innerHTML = `
    <h2>Edit record:-</h2>
        <div class="container my-3">
            <input class="inputElement" value=${editData.id} id="editedEnterId" type="number" placeholder="enterID">
            <input class="inputElement" value=${editData.candidateId} id="editedCandidateID" type="text" placeholder="candidateID">
            <input class="inputElement" value=${editData.laptopId} id="editedLaptopID" type="text" placeholder="LaptopID">
            <input class="inputElement" value=${editData.date} id="editedDate" type="date" placeholder="date">
            <input class="inputElement" value=${editData.delete} id="editedBool" type="text" placeholder="t/f">
            <button class="btn btn-outline-dark btn-sm mx-1"
                onclick="editSubmitted('editContainer',${index},['editedEnterId','editedCandidateID','editedLaptopID','editedDate','editedBool']);">Submit</button>
        </div>
    `
    showData(employeeData);
}

const editSubmitted = (idOfEditContainer, editedRecord, idOfEditedData) => {
    let editContainer = document.getElementById(idOfEditContainer);
    editContainer.classList.add("editDisplay");

    let editId = document.getElementById(idOfEditedData[0]).value;
    let editCandidateId = document.getElementById(idOfEditedData[1]).value;
    let editLaptopId = document.getElementById(idOfEditedData[2]).value;
    let editDate = document.getElementById(idOfEditedData[3]).value;
    let editDelete = document.getElementById(idOfEditedData[4]).value;

    let formData = {
        index: employeeData.length + 1,
        id: editId,
        candidateId: editCandidateId,
        laptopId: editLaptopId,
        date: editDate,
        delete: editDelete,
    };

    employeeData.splice(editedRecord, 1, formData);
    showData(employeeData);





}

showData(employeeData);
