package lt.codeacademy.personregistration.repositories;

import lt.codeacademy.personregistration.entities.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Long> {
}
