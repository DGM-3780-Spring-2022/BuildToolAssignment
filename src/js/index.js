const addTodos = document.querySelector('.addTodo')
const newItem = document.querySelector('#newItem')

function test(){
    console.log("Testing");
}

test();

let todos = [];

class todo {
    constructor(name) {
    this.id = todos.length+=1;
    this.name = name;
    this.complete = false;
    }
}

addTodos.addEventListener('click', () => {
    let todoName = newItem.value
    let customTodo = new todo(
        todoName
    )
    todos.push(customTodo)
    console.log(todos)
});


const todoList = (todoItems) => {
    document.querySelector('.todoList')
    async (todos) => {
    for (let i=0; i<=todoItems.length; i++) {
    let itemDiv = document.createAttribute('div')
    itemDiv.class = "newDivision"
    let statusLabel = document.createElement('input')
    statusLabel.type = "checkbox";
    statusLabel.class = false;
    let idLabel = document.createElement('p')
    idLabel.textContent = todos.length ++;
    let itemLabel = document.createElement('p')
    itemLabel.textContent = todos[i].item;
    let buttonLabel = document.createElement('button')
    buttonLabel.textContent = "Edit item"
    buttonLabel.class = "edit"
    itemDiv.appendChild(statusLabel)
    itemDiv.appendChild(idLabel)
    itemDiv.appendChild(itemLabel)
    itemDiv.appendChild(buttonLabel)
    return itemDiv
    }
}
}

todoList(todos);

const editTodo = () => {

}

const deleteTodos = () => {
    
}

