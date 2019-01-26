function newTask() {
    const task = document.getElementById("input").value;
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    const close = document.createElement("button");
    // added task (li) will receive the text what was entered
    // in the input box + button
    li.appendChild(document.createTextNode(task));
    li.appendChild(close);
    close.appendChild(document.createTextNode("X"));
    ul.appendChild(li);
    

    close.onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
    };
    // resets input box after adding task
    document.getElementById("input").value = "";
};
// creating new task
document.getElementById("addTask").onclick = function (e) {
    return newTask();
};



