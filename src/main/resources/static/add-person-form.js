import { saveEventPerson } from "./requests.js";
import { renderPersonTable } from "./person-table.js";

export const handlePersonFormSubmit = async () => {
  const form = document.getElementById("personForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitPerson(
      form.personName.value,
      form.lastName.value,
      form.email.value,
      getAge(form.birthDate.value)
    );
  });
};

const submitPerson = async (personName, lastName, email, birthDate) => {
  const person = { personName, lastName, email, birthDate };
  await saveEventPerson(person);
  await renderPersonTable();
};

function getAge(dateString) {
  let ageInMilliseconds = new Date() - new Date(dateString);
  return Math.floor(ageInMilliseconds/1000/60/60/24/365);
  }