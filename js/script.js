const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('todo-button');
const buttonList = document.getElementsByClassName('todo-delete');
const todoList = document.getElementById('todo-list');
const todoItems = document.getElementsByClassName('todo-item');

const buttonClickHandler = (e) => {
  const inputValue = todoInput.value;

  const li = document.createElement('li');
  li.classList = 'list-group-item todo-item';

  const h3 = document.createElement('h3');
  h3.innerText = inputValue;

  const button = document.createElement('button');
  button.classList = 'btn btn-danger todo-delete';
  button.innerHTML = 'Delete';
  button.addEventListener('click', deleteHandler);

  li.appendChild(h3);
  li.appendChild(button);
  todoList.appendChild(li);

  todoInput.value = '';
};

const deleteHandler = (e) => {
  const value = e.target.parentNode.childNodes[0].innerHTML;
  const filterTodo = [...todoItems].filter((node) => {
    return node.childNodes[0].innerHTML != value;
  });

  todoList.innerHTML = '';
  for (let index = 0; index < filterTodo.length; index++) {
    todoList.appendChild(filterTodo[index]);
  }
};

todoButton.addEventListener('click', buttonClickHandler);

// function buttonClickHandler2() {
//   console.log(this);
// }
