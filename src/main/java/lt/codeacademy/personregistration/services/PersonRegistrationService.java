package lt.codeacademy.personregistration.services;

import lt.codeacademy.personregistration.entities.Person;
import lt.codeacademy.personregistration.repositories.PersonRepository;

import java.util.List;
import java.util.Optional;

public class PersonRegistrationService {
    private final PersonRepository personRepository;

    public PersonRegistrationService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    public List<Person> getAllPersons() {
        return this.personRepository.findAll();
    }

    public void deletePerson(Long id) {
        this.personRepository.deleteById(id);
    }

    public void savePerson(Person person) {
        this.personRepository.save(person);
    }

    public Person getPersonById(Long id) {
        Optional<Person> person = this.personRepository.findById(id);
        return person.orElse(null);
    }
}
