/*
function test(){
    let item = new ToDoItem("test");
    let item2 = new ToDoItem("another");
}*/

window.onload = function(){
    document.getElementById("addItem").onclick =
        saveItem;

    document.getElementById("displayItems").onclick
        = displayItems;
}

let allItems:Array<ToDoItem> = [];

function saveItem(){
    
    //get info off form
    let itemTitle:string =
        (<HTMLInputElement>
        document.getElementById("title")).value;

    //create ToDoItem object
    let newTask = new ToDoItem(itemTitle);

    //save it!
    allItems.push(newTask);
    
    //get UL from page
    addItemToPage(itemTitle);
    clearTextboxes();
}

function addItemToPage(itemTitle: string) {
    let itemList = document.getElementById("itemList");
    //create new list item
    let newItem = document.createElement("li");
    let textNode = document.createTextNode(itemTitle);
    newItem.appendChild(textNode);
    itemList.appendChild(newItem);

    //draggable test code
    newItem.setAttribute("draggable", "true");
    //add code for onDrag, ondragcenter

    //add onclick event handler to <li>
    newItem.onclick = function(){

        this.remove();

        if(this.getAttribute("class") == null){
            this.setAttribute("class", "itemDone");
        }
        else{
            this.removeAttribute("class");
        }
    };
}

function clearTextboxes(){
    (<HTMLInputElement>
    document.getElementById("title")).value = "";

    document.getElementById("title").focus();

}

function displayItems(){
    /*
    for(let i = 0; i < allItems.length; i++){
        
        let currItem:ToDoItem = allItems[i];
        alert(currItem.title);

        //same as above
        //alert(allItems[i].title);
    }
    */
    //same as above
    for(let currItem of allItems){
        alert(currItem.title);
    }

    /*
    //same loop as above
    allItems.forEach(currItem => {
        alert(currItem.title);
    });
    */
}