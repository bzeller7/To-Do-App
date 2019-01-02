class ToDoItem{
    title:string;
    description:string;
    dateAdded:Date;
    dateCompleted:Date;
    isCompleted:boolean;
    category:string;

    constructor(title:string){
        this.title = title;
    }
}