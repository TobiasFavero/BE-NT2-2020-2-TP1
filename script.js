const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

const targetCountHandler = (target) => {
  let targetCount = Number(target.innerHTML);
  
  return {
    get: () => { return targetCount },
    increment: () => {
      targetCount ++;
      target.innerHTML = targetCount;
    }
  };
};

const addTodo = () => {
  targetCountHandler(itemCountSpan).increment();
  const node = newTodoNode(itemCountSpan);
  list.appendChild(node);
};

const uncheckTodo = (e) => {
  targetCountHandler(uncheckedCountSpan).increment();
  const todoToRemove = document.querySelector(`#${e.target.id}`)
  todoToRemove.remove();
};

const newTodoNode = (target) => {
  const count = targetCountHandler(target).get();
  const node = document.createElement('li');
  const textNode = document.createTextNode(`TODO: ${count}`);
  node.appendChild(textNode);
  node.addEventListener('click', uncheckTodo);
  node.setAttribute('id', `todo${count}`);
  
  return node;
};

