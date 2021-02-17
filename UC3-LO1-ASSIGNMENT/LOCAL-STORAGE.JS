//Set local storage item
// LOCAL-STORAGE.setItem('name', 'SHARMAINE');
// LOCAL-STORAGE.setItem('age', 29);


//Set session storage item
// sessionStorage.setItem('name', 'MARIE');

//Remove from storage
// LOCAL-STORAGE.removeItem('age');
// LOCAL-STORAGE.removeItem('name');

//Get from storage
// const name = LOCAL-STORAGE.getItem('name');
// const age = LOCAL-STORAGE.getItem('age');

// console.log(name, age);

//Clear local storage
// LOCAL-STORAGE.clear();

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();

    const task = document.querySelector('#task').value;
    
    let tasks;
    if(LOCAL-STORAGE.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(LOCAL-STORAGE.getItem('tasks'));
    }
    tasks.push(task);

    LOCAL-STORAGE.setItem('tasks', JSON.stringify(tasks));

    alert('Task Saved');

    tasks.forEach(function(task){
        console.log(task);
    });
});