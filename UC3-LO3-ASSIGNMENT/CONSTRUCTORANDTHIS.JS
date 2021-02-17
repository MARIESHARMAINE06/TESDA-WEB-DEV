//Object literal
// const person = {
//     name: 'SHARMAINE'
// };

// console.log(person);


//Person constructor
// function Person(){
//     this.name = 'MARIE'
// };

// const kicks = new Person();

// console.log(kicks);

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// };

// const YAEL = new Person('YAEL', 28);
// const EDGAR = new Person('EDGAR', 25);

// console.log(YAEL);
// console.log(EDGAR);


//Constructor and This Keyword
//Person constructor
function Person(name, dob){
    this.name = name;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
};

const nicko = new Person('SHARMAINE', '03/20/90');
const kicks = new Person('MARIE', '01/20/92');

console.log(SHARMAINE);
console.log(MARIE);
console.log(SHARMAINE.calculateAge());
console.log(MARIE.calculateAge());