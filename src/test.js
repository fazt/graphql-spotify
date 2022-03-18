
const user = {
    firstname: "John",
    lastname : "Doe",
    getFullName: function(){
        this.firstname + this.lastname
    }
}

function User(firstname, lastname) {
    this.firstname = "John";
    this.lastname = "Doe";
    return { }
}

class User {
    constructor(firstname, lastname) {
        this.firstname = "John";
        this.lastname = "Doe";
    }

    getFullName() {}
}


user.getFullName() //


function printName(name) {
    console.log("Hello " + name);
}

const printName2 = (name) => `Hello ${name}`

const printAge = number => `${number}`


printName2("John"); //
printAge(30) // 30

printName2(printAge(30))