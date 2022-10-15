package lt.codeacademy.personregistration.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class GetPersonResponseDTO {
    private Long id;
    private String personName;
    private String lastName;
    private String email;
    private String birthDate;
}
