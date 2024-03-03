import todos from "./todos";
import projects from "./projects";
import render from "./render";

const handlers = (() => {
    
    function showProjectForm() {
        const addProjectBtn = document.querySelector("#add-project");
        addProjectBtn.addEventListener('click', () => {
            render.renderProjectForm();
        })
    }
    
    function submitNewProject() {
        const submitProjectBtn = document.querySelector("#submit-project");
        submitProjectBtn.addEventListener('click', (e) => {
            e.preventDefault();
            let title = document.querySelector("#project-title-input").value;
            let description = document.querySelector("#project-desc-input").value;
            let todoList = [];
            projects.addProject(title, description, todoList);
            render.clearDom();
            render.render();
            showProjectForm();
            removeProject();
            submitNewTodo();
            removeTodo();
            expandTodo();
        });
    }

    function removeProject() {
        const deleteProjectBtn = document.querySelectorAll(".delete-project");
        deleteProjectBtn.forEach((button) => {
            button.addEventListener('click', (e) => {
                const projectIndex = e.currentTarget.parentNode.getAttribute("data-index");
                projects.deleteProject(projectIndex);
                render.clearDom();
                render.render();
                showProjectForm();
                removeProject();
                submitNewTodo();
                removeTodo();
                expandTodo();
            })
        })
    }

    function submitNewTodo() {
        const submitTodoBtn = document.querySelectorAll(".submit-todo");
        submitTodoBtn.forEach((button) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                let title = document.querySelector(".todo-title-input").value;
                let description = document.querySelector(".todo-desc-input").value;
                let dueDate = document.querySelector(".todo-due-date-input").value;
                let priority = document.querySelector(".todo-priority-input").value;
                const projectIndex = e.currentTarget.parentNode.parentNode.getAttribute("data-index");
                todos.addTodo(title, description, dueDate, priority, projectIndex);   
                render.clearDom();
                render.render();
                showProjectForm();
                removeProject();
                submitNewTodo();
                removeTodo();
                expandTodo();

                console.log(title.value)
                console.log(projects.projectList)
            })
        })    
    }

    function removeTodo() {
        const deleteTodoBtn = document.querySelectorAll(".delete-todo");
        deleteTodoBtn.forEach((button) => {
            button.addEventListener('click', (e) => {
                const projectIndex = e.currentTarget.parentNode.parentNode.parentNode.parentNode.getAttribute("data-index");
                const index = e.currentTarget.parentNode.parentNode.getAttribute("data-index");
                todos.deleteTodo(projectIndex, index);
                render.clearDom();
                render.render();
                showProjectForm();
                removeProject();
                submitNewTodo();
                removeTodo();
                expandTodo();
            })
        })
    }

    function expandTodo() {
        const detailsBtn = document.querySelectorAll(".expand-details");
        detailsBtn.forEach((button) => {
            button.addEventListener('click', (e) => {
                const details = e.currentTarget.parentNode.parentNode.children[1];
                render.toggleDetails(details);
            })
        })    
    }

    return  { 
            showProjectForm,
            submitNewProject, 
            removeTodo,
            expandTodo, 
            removeProject, 
            submitNewTodo, 
            }
})();

export default handlers;
