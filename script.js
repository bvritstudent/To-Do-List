let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

function addTask() {
    let taskText = taskInput.value;
    if (taskText.trim() !== "") {
        let newTask = document.createElement("li");
        newTask.textContent = taskText;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        newTask.appendChild(deleteButton);

        taskList.appendChild(newTask);
        taskInput.value = "";
        saveData();
    } else {
        alert("Please enter a task.");
    }
}

// Event delegation for check and delete
taskList.onclick = function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.className === "deleteButton") {
        e.target.parentElement.remove();
        saveData();
    }
};

function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
}

function getData() {
    let data = localStorage.getItem("data");
    if (data) {
        taskList.innerHTML = data;
    }
}
getData();