package lt.codeacademy.personregistration.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CreatePersonRequestDTO {
    private String name;
    private String lastName;
    private String email;
    private String birthDate;

    @Override
    public String toString() {
        return "CreatePersonRequestDTO{" +
                "name='" + name + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", birthDate='" + birthDate + '\'' +
                '}';
    }
}
