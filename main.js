const { createApp } = Vue;

createApp({
    data(){
        return{
            title : "to do list",

            todolist : [
                {
                    text : "task 1",
                    done : false,
                },
                {
                    text : "task 2",
                    done : false,
                },
                {
                    text : "task 3",
                    done : false,
                },
            ],

            newTodo : {
                text : "New task",
                done : false,
            }
        };
    },
    methods : {
        deleteTodo(index){
            this.todolist.splice(index, 1);
        },
        addNewTask(){
            console.log(this.newTodo);
            const newToDo = {
                text : this.newTodo.text,
                done : this.newTodo.done,
            };
            this.todolist.push(newToDo);
        },
        todoTrue(){
            this.todolist.done = true;
        },
    },
}).mount("#app");