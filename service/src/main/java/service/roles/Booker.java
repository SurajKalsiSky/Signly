package service.roles;

public class Booker {

    private final String userType = "booker";

    private String firstName;
    private String lastName;

    public Booker(String firstName, String lastName){
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
