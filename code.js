window.onload = function () {
    document.getElementById("addItem").onclick =
        saveItem;
    document.getElementById("displayItems").onclick
        = displayItems;
};
let allItems = [];
function saveItem() {
    let itemTitle = document.getElementById("title").value;
    let newTask = new ToDoItem(itemTitle);
    allItems.push(newTask);
    addItemToPage(itemTitle);
    clearTextboxes();
}
function addItemToPage(itemTitle) {
    let itemList = document.getElementById("itemList");
    let newItem = document.createElement("li");
    let textNode = document.createTextNode(itemTitle);
    newItem.appendChild(textNode);
    itemList.appendChild(newItem);
    newItem.setAttribute("draggable", "true");
    newItem.onclick = function () {
        this.remove();
        if (this.getAttribute("class") == null) {
            this.setAttribute("class", "itemDone");
        }
        else {
            this.removeAttribute("class");
        }
    };
}
function clearTextboxes() {
    document.getElementById("title").value = "";
    document.getElementById("title").focus();
}
function displayItems() {
    for (let currItem of allItems) {
        alert(currItem.title);
    }
}
class ToDoItem {
    constructor(title) {
        this.title = title;
    }
}
