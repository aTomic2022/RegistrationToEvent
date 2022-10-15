const API_BASE_URL = "http://localhost:8080";

export const getAllPersons = async () => {
  const response = await fetch(`${API_BASE_URL}/person-registration`);
  const eventPersons = await response.json();
  return eventPersons;
};

export const updateEventPerson = async (person, id) => {
  await fetch(`${API_BASE_URL}/person-registration/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(person),
  });

  alert(`[Person ${id}] successfully updated`);
};

export const deletePersonById = async (id) => {
  await fetch(`${API_BASE_URL}/person-registration/${id}`, {
    method: "DELETE",
  });
  alert(`[Person ${id}] successfully deleted`);
};

export const saveEventPerson = async (person) => {
  await fetch(`${API_BASE_URL}/person-registration`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(person),
  });
  alert(`Person successfully added`);
};
