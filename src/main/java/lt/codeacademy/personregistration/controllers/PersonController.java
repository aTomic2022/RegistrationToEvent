package lt.codeacademy.personregistration.controllers;

import lt.codeacademy.personregistration.dto.CreatePersonRequestDTO;
import lt.codeacademy.personregistration.dto.GetPersonResponseDTO;
import lt.codeacademy.personregistration.entities.Person;
import lt.codeacademy.personregistration.services.PersonRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static lt.codeacademy.personregistration.converter.PersonConverter.*;

@CrossOrigin
@RestController
@RequestMapping("/person-registration")
public class PersonController {

    @Autowired
    private PersonRegistrationService personRegistrationService;

    @GetMapping
    public List<Person> getAllPersons() {
        return personRegistrationService.getAllPersons();
    }

    @PostMapping
    public void createPerson(@RequestBody CreatePersonRequestDTO createPersonRequestDTO) {
        Person person = convertCreatePersonRequestDtoToPerson(createPersonRequestDTO);
        this.personRegistrationService.savePerson(person);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> putPersonById(@PathVariable(name = "id") Long id,
                                              @RequestBody CreatePersonRequestDTO requestDTO) {
        Person person = this.personRegistrationService.getPersonById(id);
        if (person == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Person newPerson = convertCreatePersonRequestDtoToPerson(requestDTO);
        newPerson.setId(person.getId());
        this.personRegistrationService.savePerson(newPerson);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Void> patchPersonById(@PathVariable(name = "id") Long id,
                                                @RequestBody CreatePersonRequestDTO requestDTO) {
        Person person = this.personRegistrationService.getPersonById(id);
        if (person == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        patchPersonFromCreatePersonRequestDto(person, requestDTO);
        this.personRegistrationService.savePerson(person);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<GetPersonResponseDTO> getOwnerById(@PathVariable(name = "id") Long id) {
        Person person = this.personRegistrationService.getPersonById(id);
        if (person == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(convertPersonToGetPersonResponseDTO(person));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePersonById(@PathVariable(name = "id") Long id) {
        Person person = this.personRegistrationService.getPersonById(id);
        this.personRegistrationService.deletePersonById(id);
        return ResponseEntity.ok().build();
    }
}
