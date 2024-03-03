import projects from "./projects";

const todos = (() => {
    class Todo {
        constructor(title, description, dueDate, priority) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        }
    }

    function addTodo(title, description, dueDate, priority, projectIndex) {
        const todo = new Todo(title, description, dueDate, priority);
        projects.projectList[projectIndex].todoList.push(todo);
    }

    function deleteTodo(projectIndex, index) {
        projects.projectList[projectIndex].todoList.splice(index, 1);
    }

    return { addTodo, deleteTodo };
})();

export default todos;