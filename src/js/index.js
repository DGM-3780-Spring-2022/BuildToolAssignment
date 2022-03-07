function test(){
    console.log("Testing");
}

test();

let todos = []

class todo {
    constructor(name, status) {
    this.id = todos.length++;
    this.name = name;
    this.status = status;
    }
}

const addTodos = () => {

addTodos.addEventListener('click', () => {
    
});

}

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

