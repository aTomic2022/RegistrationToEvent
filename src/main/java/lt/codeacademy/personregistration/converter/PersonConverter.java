package lt.codeacademy.personregistration.converter;

import lt.codeacademy.personregistration.dto.CreatePersonRequestDTO;
import lt.codeacademy.personregistration.dto.GetPersonResponseDTO;
import lt.codeacademy.personregistration.dto.GetPersonResponseDTO;
import lt.codeacademy.personregistration.entities.Person;

public class PersonConverter {

    public static GetPersonResponseDTO convertPersonToGetPersonResponseDTO(Person person) {
        GetPersonResponseDTO personDTO = null;
        if (person != null) {
            personDTO = new GetPersonResponseDTO();
            personDTO.setName(person.getName());
            personDTO.setId(person.getId());
            personDTO.setLastName(person.getLastName());
            personDTO.setEmail(person.getEmail());
            personDTO.setBirthDate(person.getBirthDay());
        }
        return personDTO;
    }


    public static Person convertCreatePersonRequestDtoToPerson(CreatePersonRequestDTO requestDTO) {
        Person person = null;
        if (person != null) {
            person = new Person();
            person.setName(requestDTO.getName());
            person.setLastName(requestDTO.getLastName());
            person.setEmail(requestDTO.getEmail());
        }
        return person;
    }

    public static Person patchPersonFromCreatePersonRequestDto(Person person,
                                                               CreatePersonRequestDTO requestDTO) {
        if (isNewStringValueEmptyNullOrSameAsOld(requestDTO.getName(), person.getName())) {
            person.setName(requestDTO.getName());
        }
        if (isNewStringValueEmptyNullOrSameAsOld(requestDTO.getLastName(), person.getLastName())) {
            person.setLastName(requestDTO.getLastName());
        }
        if (isNewStringValueEmptyNullOrSameAsOld(requestDTO.getEmail(), person.getEmail())) {
            person.setEmail(requestDTO.getEmail());
        }
        if (isNewStringValueEmptyNullOrSameAsOld(requestDTO.getBirthDate(), person.getBirthDay())) {
            person.setBirthDay(requestDTO.getBirthDate());
        }
        return  person;
    }

    private static boolean isNewStringValueEmptyNullOrSameAsOld(String newValue, String oldValue){
        return newValue != null && !newValue.isEmpty() && !newValue.equals(oldValue);
    }
}
