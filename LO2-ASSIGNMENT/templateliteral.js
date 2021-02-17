const firstName = 'Sharmaine';
const lastName = 'Gutierrez';
const age = 29;
const city = 'Nueva Ecija';
let html;

//without tempplate string (es5)
html = '<ul><li>Name: ' +
        firstName +
        '</li><li>Age: ' +
        age +
        '</li><li>lastName: ' +
        lastName +
        '</li><li>city: ' +
        city +

        '</li><ul/>';

        document.body.innerHTML = html;

//with template string (es6)
//with function
//ternary operation * age part

function hello() {
    return 'How are you?';
}

html = `
        <ul>
            <li>First Name: ${firstName}</li>
            <li>Lastname: ${lastName}</li>
            <li>City: ${city}</li>
            <li>Age: ${age}</li>
            <li>${2 + 2}</li>
            <li>${hello()}</li>
            <li>${age > 29 ? 'Over 29' : 'Under 29'}</li> 
        <ul/>
        `;

        document.body.innerHTML = html; 