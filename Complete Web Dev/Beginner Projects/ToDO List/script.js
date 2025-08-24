const tasksHTML = `<div class="actions">
    <button class="save"><i class="fa-solid fa-check"></i></button>
    <button class="delete"><i class="fa-solid fa-xmark"></i></button>
</div>`;

let taskCount = document.querySelector("#taskCount");
let taskList = document.querySelector("#listContainer");
let taskInput = document.querySelector("#task");
let add = document.querySelector("#addBtn");

// Load saved tasks on page load
document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
    updateTaskCount();
});

// Add new task
add.addEventListener('click', () => {
    let text = taskInput.value.trim();
    if (text.length === 0) {
        alert("Cannot add empty task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `<span class="task-text">${text}</span>` + tasksHTML;

    taskList.prepend(li);
    taskInput.value = "";

    attachTaskEvents(li);
    updateTaskCount();
});

// Update task counter
function updateTaskCount() {
    let allLi = document.querySelectorAll("#listContainer li");
    let selectedLi = document.querySelectorAll('#listContainer li[tag="selected"]');

    let totalCount = allLi.length;
    let selectedCount = selectedLi.length;

    taskCount.innerText = selectedCount + "/" + totalCount;
    saveTasks();
}

// Attach events for save + delete
function attachTaskEvents(li) {
    let saveBtn = li.querySelector(".save");
    let deleteBtn = li.querySelector(".delete");

    saveBtn.addEventListener("click", () => {
        li.setAttribute("tag", "selected");
        updateTaskCount();
    });

    deleteBtn.addEventListener("click", () => {
        li.remove();
        updateTaskCount();
    });
}

// Save to localStorage
function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#listContainer li").forEach(li => {
        tasks.push({
            text: li.querySelector(".task-text").innerText,
            selected: li.getAttribute("tag") === "selected"
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load from localStorage
function loadTasks() {
    let storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    storedTasks.forEach(task => {
        let li = document.createElement("li");
        li.setAttribute("tag", task.selected ? "selected" : "");
        li.innerHTML = `<span class="task-text">${task.text}</span>` + tasksHTML;

        taskList.appendChild(li);
        attachTaskEvents(li);
    });
}
