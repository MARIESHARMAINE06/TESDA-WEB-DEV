//Object
const person = {
    firstName: 'Sharmaine',
    lastName: 'Gutierrez',
    age: 29,
    email: 'mariesharmainegutierrez@gmail.com',
    hobbies : ['Singing', 'Dancing', 'Watching'],
    address: {
        city: 'Nueva Ecija',
        street: 'Tambo Aforable',
    },
    getBirthYear: function () {
        return 2021 - this.age;      
    }

};

let value;

value = person;
console.log(value)

value = person.firstName;
console.log(value)

value = person.lastName;
console.log(value)

value = person.age;
console.log(value)

value = person.hobbies[0];
console.log(value)

value = person.address.city;
console.log(value)

value = person.getBirthYear(); //property method when calling needs ()
console.log(value)


const people = [{name: 'Cinderella', age: 29}, {name: 'Cindy', age: 28}, 
    {name: 'Charles', age: 30}];

//for loop
for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
} 