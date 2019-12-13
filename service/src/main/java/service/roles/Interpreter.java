package service.roles;

public class Interpreter {

    private final String userType = "interpreter";

    private String firstName;
    private String lastName;

    public Interpreter(String firstName, String lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getUserType() {
        return userType;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }
}