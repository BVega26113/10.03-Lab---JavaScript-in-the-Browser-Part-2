function domLoaded() {
    console.log("Script loaded and DOM is ready!");

    const addBtn = document.querySelector("#add-btn");
    const taskInput = document.querySelector("#task-input");

    if (addBtn) {
        addBtn.addEventListener("click", addBtnClick);
    }

    if (taskInput) {
        taskInput.addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                addBtnClick();
            }
        });
    }

    const existingBtns = document.querySelectorAll(".done-btn");
    existingBtns.forEach(btn => {
        btn.addEventListener("click", removeTask);
    });
}

function addBtnClick() {
    const taskInput = document.querySelector("#task-input");
    const taskValue = taskInput.value;

    if (taskValue.trim() !== "") {
        addTask(taskValue);
        
        taskInput.value = "";
        taskInput.focus();
    }
}

function addTask(newTask) {
    const li = document.createElement("li");
    li.innerHTML = `<span class="task-text">${newTask}</span><button class="done-btn">&#10006;</button>`;

    const ol = document.querySelector("ol");
    ol.appendChild(li);

    const lastButton = li.querySelector(".done-btn");
    lastButton.addEventListener("click", removeTask);
}

function removeTask(event) {
    const taskItem = event.currentTarget.parentNode;
    const ol = taskItem.parentNode;
    ol.removeChild(taskItem);
}

domLoaded();