const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('new_btn');

window.onload = function () {
    loadToDos();
};

function createToDo(text) {
    const todoDiv = document.createElement('div');
    todoDiv.textContent = text;

    todoDiv.addEventListener('click', function () {
        if (confirm('Remove this task?')) {
            todoDiv.remove();
            saveToDos();
        }
    });

    ftList.appendChild(todoDiv);
}

newBtn.addEventListener('click', function () {
    const text = prompt('Enter a new TO DO:');

    if (text !== null) {
        const cleanText = text.trim();
        if (cleanText !== '') {
            createToDo(cleanText);
            saveToDos();
        }
    }
});

function saveToDos() {
    const todos = [];
    const items = ftList.querySelectorAll('div');

    for (let i = 0; i < items.length; i++) {
        todos.push(items[i].textContent);
    }

    const jsonStr = JSON.stringify(todos);
    const date = new Date();
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
    document.cookie = `ft_list=${encodeURIComponent(jsonStr)}; expires=${date.toUTCString()}; path=/`;
}

function loadToDos() {
    const cookies = document.cookie.split(';');

    for (const cookie of cookies) {
        const trimmedCookie = cookie.trim();
        if (trimmedCookie.startsWith('ft_list=')) {
            const jsonStr = decodeURIComponent(trimmedCookie.substring('ft_list='.length));
            if (jsonStr) {
                try {
                    const todos = JSON.parse(jsonStr);
                    if (Array.isArray(todos)) {
                        todos.forEach((text) => createToDo(text));
                    }
                } catch (error) {
                    console.error('Unable to parse todo list.', error);
                }
            }
            break;
        }
    }
}