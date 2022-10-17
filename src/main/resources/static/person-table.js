import {
  getAllPersons,
  updateEventPerson,
  deletePersonById,
} from "./requests.js";

export const renderPersonTable = async () => {
  const persons = await getAllPersons();
  if (document.getElementById("personTable")) {
    document.getElementById("personTable").remove();
  }
  const table = document.createElement("table");
  table.id = "personTable";
  table.className = "table";

  renderPersonTableHeaders(table);
  const tbody = document.createElement("tbody");
  persons.forEach((person) => {
    renderPersonTableRow(tbody, person);
  });

  table.appendChild(tbody);
  document.getElementById("personContainer").appendChild(table);
};

const renderTableCell = (innerText, className) => {
  const td = document.createElement("td");
  if (innerText) {
    td.innerText = innerText;
  }
  if (className) {
    td.className = className;
  }
  return td;
};

const renderTableHeader = (innerText) => {
  const th = document.createElement("th");
  th.innerText = innerText;
  return th;
};

const renderActionButtons = (actionsCell, id) => {
  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.className = "editButton btn btn-outline-warning"
  editButton.addEventListener("click", () => {
    handleEdit(id);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.className = "deleteButton btn btn-outline-danger";
  deleteButton.addEventListener("click", () => {
    handleDelete(id);
  });

  actionsCell.append(editButton, deleteButton);
};

const handleEdit = async (id) => {
  const tr = document.getElementById(`person-${id}`);

  const personNameCell = tr.querySelector(".personNameCell");
  const personNameInput = document.createElement("input");
  personNameInput.type = "text";
  personNameInput.value = personNameCell.innerText;
  personNameCell.innerText = "";
  personNameCell.appendChild(personNameInput);

  const lastNameCell = tr.querySelector(".lastNameCell");
  const lastNameInput = document.createElement("input");
  lastNameInput.type = "text";
  lastNameInput.value = lastNameCell.innerText;
  lastNameCell.innerText = "";
  lastNameCell.appendChild(lastNameInput);

  const emailCell = tr.querySelector(".emailCell");
  const emailInput = document.createElement("input");
  emailInput.type = "text";
  emailInput.value = emailCell.innerText;
  emailCell.innerText = "";
  emailCell.appendChild(emailInput);

   const birthDateCell = tr.querySelector(".birthDateCell");
   const birthDateInput = document.createElement("input");
   birthDateInput.type = "text";
   birthDateInput.value = birthDateCell.innerText;
   birthDateCell.innerText = "";
   birthDateCell.appendChild(birthDateInput);

  const actionsCell = tr.querySelector(".actionsCell");
  actionsCell.querySelector(".editButton").remove();
  actionsCell.querySelector(".deleteButton").remove();

  const saveButton = document.createElement("button");
  saveButton.innerText = "Save";
  saveButton.className = "saveButton btn btn-success";
  saveButton.addEventListener("click", () => {
    handleUpdate(id);
  });

  const cancelButton = document.createElement("button");
  cancelButton.innerText = "Cancel";
  cancelButton.className = "cancelButton btn btn-outline-dark";
  cancelButton.addEventListener("click", () => {
    window.location.reload();
  });

  actionsCell.append(saveButton, cancelButton);
};

const handleUpdate = async (id) => {
  const tr = document.getElementById(`person-${id}`);

  const personNameCell = tr.querySelector(".personNameCell");
  const personNameInput = personNameCell.querySelector("input");

  const lastNameCell = tr.querySelector(".lastNameCell");
  const lastNameInput = lastNameCell.querySelector("input");

  const emailCell = tr.querySelector(".emailCell");
  const emailInput = emailCell.querySelector("input");

  const birthDateCell = tr.querySelector(".birthDateCell");
  const birthDateInput = birthDateCell.querySelector("input");

  const person = {
    personName: personNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    birthDate: birthDateInput.value,
  };

  await updateEventPerson(person, id);
  await renderPersonTable();
};

const handleDelete = async (id) => {
  await deletePersonById(id);
  await renderPersonTable();
};

const renderPersonTableRow = (tbody, person) => {
  const tr = document.createElement("tr");
  tr.id = `person-${person.id}`;
  const personNameCell = renderTableCell(person.personName, "personNameCell");
  const lastNameCell = renderTableCell(person.lastName, "lastNameCell");
  const emailCell = renderTableCell(person.email, "emailCell");
  const birthDateCell = renderTableCell(person.birthDate, "birthDateCell");
  const actionsCell = renderTableCell(undefined, "actionsCell");
  renderActionButtons(actionsCell, person.id);
  tr.append(personNameCell, lastNameCell, emailCell, birthDateCell, actionsCell);

  tbody.appendChild(tr);
};

const renderPersonTableHeaders = (table) => {
  const tr = document.createElement("tr");
  const thead = document.createElement("thead");
  tr.appendChild(thead);
  const personNameTh = renderTableHeader("Name");
  const lastNameTh = renderTableHeader("Last name");
  const emailTh = renderTableHeader("Email");
  const birthDateTh = renderTableHeader("Age");
  const actionsTh = renderTableHeader("Actions");

  thead.append(personNameTh, lastNameTh, emailTh, birthDateTh, actionsTh);
  table.appendChild(thead);
};

