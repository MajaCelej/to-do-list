{
    let tasks = [];
    let hideDoneTasks = false;

    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            { content: newTaskContent },];

        render();
    };

    const removeTask = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            ...tasks.slice(taskIndex + 1),
        ];

        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            {
                ...tasks[taskIndex],
                done: !tasks[taskIndex].done,
            },
            ...tasks.slice(taskIndex + 1),
        ];

        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const renderTasks = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
              <li class="task__list">
              <span class="task__ToDoList">
              <button class="js-done task__js--done">${task.done ? "✔" : ""} </button>
              <span class="task__content ${task.done ? "task__content--done" : ""}">
              ${task.content}
              </span>
              <button class="js-remove task__js--remove">🗑</button>
              </span>
              </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const bindButtonsEvents = () => { }; //if

    const renderButtons = () => {
        const buttonsElement = document.querySelector(".js-newButtons");

        if (tasks.length > 0) {
            buttonsElement.innerHTML = `
            <span class="task__newButtons">
            <button class="task__hideOrShowAllDone">${hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone zadania</button>
            <button class="task__markAllDone"> ${tasks.every(({ done }) => done) ? "disabled" : ""} Oznacz wszystkie zadania jako ukończone</button>
            </span>`;
        } else {
        buttonsElement.innerHTML = ``;
    }


    //document.querySelector(".js-newButtons").innerHTML = htmlString;
    // Powinna wyglądać jak funcja wyżej i mieć HTMLa na podstawie tasks tablicy i hideDoneTasks
    // ukryć przyciski w CSS display:none, wyłączony -> atrybut - disabled
}

const render = () => {
    renderTasks();
    renderButtons();
    bindButtonsEvents();
    bindEvents();
};

const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskElement = document.querySelector(".js-newTask");
    const newTaskContent = newTaskElement.value.trim();

    if (newTaskContent !== "") {
        addNewTask(newTaskContent);
        newTaskElement.value = "";
    }

    newTaskElement.focus();
};

const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
};

init();
};