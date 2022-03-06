function test(){
    console.log("Testing");
}

test();

let todos = [
    {
        id: 1,
        item: "Do Homework",
        complete: false,
    },
    {
        id: 2,
        item: "Search for Internships",
        complete: false,
    },
    {
        id: 3,
        item: "Travel Home",
        complete: false,
    },
]

const todoList = (todoItems) => {
    document.querySelector('.todoList')
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

todoList(todos);

addTodos.addEventListener('click', () => {

});

const editTodo = () => {

}

const deleteTodos = () => {
    
}

