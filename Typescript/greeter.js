function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var person = {
    firstName: "Jane",
    lastName: "User"
};
document.body.innerHTML = greeter(person);
