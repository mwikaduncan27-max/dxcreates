const STORAGE_KEY = 'dxcreates-todo-items';
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const tasksSummary = document.getElementById('tasks-summary');
const clearCompletedBtn = document.getElementById('clear-completed');
const filterButtons = document.querySelectorAll('.filter-btn');
const todoTemplate = document.getElementById('todo-item-template');

let todos = loadTodos();
let activeFilter = 'all';

function loadTodos() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to load tasks from localStorage', error);
    return [];
  }
}

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function updateSummary() {
  const total = todos.length;
  const remaining = todos.filter((todo) => !todo.completed).length;
  tasksSummary.textContent = `${remaining} of ${total} task${total === 1 ? '' : 's'} left`;
}

function getFilteredTodos() {
  if (activeFilter === 'active') {
    return todos.filter((todo) => !todo.completed);
  }

  if (activeFilter === 'completed') {
    return todos.filter((todo) => todo.completed);
  }

  return todos;
}

function renderTodos() {
  const filteredTodos = getFilteredTodos();
  todoList.innerHTML = '';

  if (!filteredTodos.length) {
    const emptyState = document.createElement('li');
    emptyState.className = 'empty-state';
    emptyState.textContent = activeFilter === 'all'
      ? 'No tasks yet. Add your first task above.'
      : 'No tasks in this view.';
    todoList.appendChild(emptyState);
    updateSummary();
    return;
  }

  filteredTodos.forEach((todo) => {
    const fragment = todoTemplate.content.cloneNode(true);
    const item = fragment.querySelector('.todo-item');
    const checkbox = fragment.querySelector('input[type="checkbox"]');
    const text = fragment.querySelector('.todo-text');
    const deleteButton = fragment.querySelector('.delete-btn');

    item.dataset.id = todo.id;
    if (todo.completed) {
      item.classList.add('completed');
      checkbox.checked = true;
    }

    text.textContent = todo.text;

    checkbox.addEventListener('change', () => {
      toggleTodo(todo.id);
    });

    deleteButton.addEventListener('click', () => {
      deleteTodo(todo.id);
    });

    todoList.appendChild(fragment);
  });

  updateSummary();
}

function addTodo(text) {
  const trimmedText = text.trim();
  if (!trimmedText) return;

  todos.unshift({
    id: Date.now().toString(),
    text: trimmedText,
    completed: false,
  });

  saveTodos();
  renderTodos();
}

function toggleTodo(todoId) {
  todos = todos.map((todo) =>
    todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
  );
  saveTodos();
  renderTodos();
}

function deleteTodo(todoId) {
  todos = todos.filter((todo) => todo.id !== todoId);
  saveTodos();
  renderTodos();
}

function clearCompleted() {
  todos = todos.filter((todo) => !todo.completed);
  saveTodos();
  renderTodos();
}

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addTodo(todoInput.value);
  todoInput.value = '';
  todoInput.focus();
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;

    filterButtons.forEach((btn) => {
      btn.classList.toggle('active', btn === button);
    });

    renderTodos();
  });
});

clearCompletedBtn.addEventListener('click', clearCompleted);

renderTodos();
