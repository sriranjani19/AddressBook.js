class Contact {
    
    constructor(...params) {
            this.firstName = params[0];
            this.lastName = params[1];
            this.address = params[2];
            this.city = params[3];
            this.state = params[4];
            this.zip = params[5];
            this.phoneNo = params[6];
            this.email = params[7];
        }
       
    get firstName() { return this._firstName; }
    set firstName(firstName) { this._firstName = firstName; }
      
    get lastName() { return this._lastName; }
    set lastName(lastName) { this._lastName = lastName; }
      
    get address() { return this._address; }
    set address(address) { this._address = address; }
        
    get city() { return this._city; }
    set city(city) { this._city = city; }
        
    get state() { return this._state; }
    set state(state) { this._state = state; }
       
    get zip() { return this._zip; }
    set zip(zip) { this._zip = zip; }
        
    get phoneNo() { return this._phoneNo; }
    set phoneNo(phoneNo) { this._phoneNo = phoneNo; }
        
    get email() { return this._email; }
    set email(email) { this._email = email; }
        
    toString() {
        return "First Name : " + this.firstName + ", Last Name : " + this.lastName + ", Address : " + this.address +
            ", City : " + this.city + ", State : " + this.state + ", Zip : " + this.zip + ", Phone No : " + this.phoneNo + ", Email : " + this.email;
    }
}

let addressBookArr = new Array();

function contactExists(fName, lName) {
    return addressBookArr.some(u => u.firstName == fName && u.lastName == lName);
}

function editContact(fName, lName, property, value) {
    if (contactExists(fName, lName)) {
        switch (property) {
            case "address":
                addressBookArr.find((contact) => contact.firstName == fName).address = value;
                break;
            case "city":
                addressBookArr.find((contact) => contact.firstName == fName).city = value;
                break;
            case "state":
                addressBookArr.find((contact) => contact.firstName == fName).state = value;
                break;
            case "zip":
                addressBookArr.find((contact) => contact.firstName == fName).zip = value;
                break;
            case "phone":
                addressBookArr.find((contact) => contact.firstName == fName).phoneNo = value;
                break;
            case "email":
                addressBookArr.find((contact) => contact.firstName == fName).email = value;
                break;
            default:
                console.log("Enter valid Property");
        }
    } else {
        console.log("Contact Does Not Exist");
    }
}
//UC5
function deleteContact(fName, lName) {
    if (contactExists(fName, lName)) {
        addressBookArr = addressBookArr.filter((user) => user.firstName != fName && user.lastName != lName);
    } else {
        console.log("Contact Does Not Exist");
    }
}

try {
    addressBookArr.push(new Contact("sri", "ranjani", "mengals", "dindigul", "Tamilnadhu", "416002", "8208508814", "ranjanisri@gmail.com"));
} catch (e) {
    console.error(e);
}
try {
    addressBookArr.push(new Contact("madhan", "kumar", "rajiv nagar", "dindigul", "Tamilnadhu", "416002", "91 8989898989", "madhan@gmail.com"));
} catch (e) {
    console.error(e)
}
console.log(addressBookArr);
console.log("-----------------------")
console.log("Contact edited")
editContact("madhan", "kumar", "address", "dindigul")
console.log(addressBookArr);
console.log("-----------------------")
console.log("ContactDeleted")
deleteContact("madhan", "kumars");
console.log(addressBookArr);
    

