const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");

const targetCountHandler = (target) => {
  let targetCount = Number(target.innerHTML);

  const updateTargetCount = (count) => {
    target.innerHTML = count;
  };

  return {
    get: () => {
      return targetCount;
    },
    increment: () => {
      targetCount++;
      updateTargetCount(targetCount);
    },
    decrement: () => {
      targetCount--;
      updateTargetCount(targetCount);
    },
  };
};

const addTodo = () => {
  targetCountHandler(itemCountSpan).increment();
  targetCountHandler(uncheckedCountSpan).increment();
  const node = newTodoNode(itemCountSpan);
  list.appendChild(node);
};

const handleTodoCheck = (e) => {
  if (e.target.checked) targetCountHandler(uncheckedCountSpan).decrement();
  else targetCountHandler(uncheckedCountSpan).increment();
};

const newTodoNode = (target) => {
  const count = targetCountHandler(target).get();
  const li = document.createElement("li");

  const input = newInputCheckbox("checkbox");
  input.addEventListener("click", handleTodoCheck);

  const todoDescription = document.querySelector('#todo-description');
  li.appendChild(document.createTextNode(`${todoDescription.value}`));
  li.appendChild(input);

  todoDescription.value = "";

  return li;
};

const newInputCheckbox = (type, text) => {
  const input = document.createElement("input");
  input.type = type;

  return input;
};
