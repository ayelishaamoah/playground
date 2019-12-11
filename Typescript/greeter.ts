interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var person =  {
    firstName: "Jane",
    lastName: "User"
};

document.body.innerHTML = greeter(person);