import handlers from "./handlers";
import projects from "./projects";

const render = (() => {
    const contentDiv = document.querySelector("#content-div");

    function render() {  
        // localStorage.setItem("projectList", JSON.stringify(projects.projectList));
        
        const projectsHeadDiv = document.createElement("div");
        projectsHeadDiv.classList.add("projects-head-div");

        const projectsHead = document.createElement("h2");
        projectsHead.setAttribute("id", "projects-head");
        projectsHead.textContent = "Projects";

        const addProjectBtn = document.createElement("button");
        addProjectBtn.setAttribute("id", "add-project");
        addProjectBtn.textContent = "Add Project";

        contentDiv.appendChild(projectsHeadDiv);
        projectsHeadDiv.appendChild(projectsHead);
        projectsHeadDiv.appendChild(addProjectBtn);

        for (let i = 0; i < projects.projectList.length; i++) {
            let project = projects.projectList[i];  

            const projectContainer = document.createElement("div");
            projectContainer.classList.add("project-container");
            projectContainer.setAttribute("data-index", `${i}`)

            const todoListContainer = document.createElement("div");
            todoListContainer.classList.add("todo-list-container");
            todoListContainer.setAttribute("data-index", `${i}`);

            const projectTitleDiv = document.createElement("div");
            projectTitleDiv.classList.add("project-title-div");

            const projectTitle = document.createElement("h3");
            projectTitle.textContent = `${project.title}`;
            projectTitle.classList.add("project-title");

            const projectDesc = document.createElement("h4");
            projectDesc.textContent = `${project.description}`;
            projectDesc.classList.add("project-desc");

            const deleteProjectBtn = document.createElement("button");
            deleteProjectBtn.classList.add("delete-project");
            deleteProjectBtn.textContent = "Delete Project";

            const todosHead = document.createElement("h2");
            todosHead.classList.add("todos-head");
            todosHead.textContent = "To-Dos";

            contentDiv.appendChild(projectContainer)
            projectContainer.appendChild(projectTitleDiv);
            projectTitleDiv.appendChild(projectTitle);
            projectContainer.appendChild(projectDesc);
            projectTitleDiv.appendChild(deleteProjectBtn);
            projectContainer.appendChild(todosHead);
            projectContainer.appendChild(todoListContainer);

            for (let j = 0; j < project.todoList.length; j++) {
                let todo = project.todoList[j];  

                const todoContainer = document.createElement("div");
                todoContainer.classList.add("todo-container");
                todoContainer.setAttribute("data-index", `${j}`)

                const todoTitleDiv = document.createElement("div");
                todoTitleDiv.classList.add("todo-title-div");

                const todoTitle = document.createElement("h4");
                todoTitle.textContent = `${todo.title}`;
                todoTitle.classList.add("todo-title");

                const todoDetails = document.createElement("div");
                todoDetails.classList.add("todo-details");

                const todoDesc = document.createElement("h5");
                todoDesc.textContent = `${todo.description}`;
                todoDesc.classList.add("todo-desc");

                const todoDueDate = document.createElement("h5");
                todoDueDate.textContent = `Due Date: ${todo.dueDate}`;
                todoDueDate.classList.add("todo-due-date");

                const todoPrio = document.createElement("h5");
                todoPrio.textContent = `Priority: ${todo.priority}`;
                todoPrio.classList.add("todo-prio");

                const detailsBtn = document.createElement("button");
                detailsBtn.classList.add("expand-details")
                detailsBtn.textContent = "Details";

                const deleteTodoBtn = document.createElement("button");
                deleteTodoBtn.classList.add("delete-todo")
                deleteTodoBtn.textContent = "Delete Todo";
                
                todoListContainer.appendChild(todoContainer);
                todoContainer.appendChild(todoTitleDiv)
                todoTitleDiv.appendChild(todoTitle);
                
                todoTitleDiv.appendChild(detailsBtn);
                todoTitleDiv.appendChild(deleteTodoBtn);

                todoContainer.appendChild(todoDetails);
                todoDetails.appendChild(todoDesc);
                todoDetails.appendChild(todoDueDate);
                todoDetails.appendChild(todoPrio);
            }

        const form = document.createElement("form");

        const todoTitleInput = document.createElement("input");
        todoTitleInput.classList.add("todo-title-input");
        todoTitleInput.setAttribute("type", "text");
        todoTitleInput.setAttribute("placeholder", "Title");

        const todoDescInput = document.createElement("input");
        todoDescInput.classList.add("todo-desc-input");
        todoDescInput.setAttribute("type", "text");
        todoDescInput.setAttribute("placeholder", "Description");

        const todoDueDateInput = document.createElement("input");
        todoDueDateInput.classList.add("todo-due-date-input");
        todoDueDateInput.setAttribute("type", "date");
        todoDueDateInput.setAttribute("placeholder", "Due Date");

        const todoPrioInput = document.createElement("select");
        todoPrioInput.classList.add("todo-priority-input");
        todoPrioInput.setAttribute("name", "todo-priority");
        todoPrioInput.setAttribute("placeholder", "Priority");

        const prioLow = document.createElement("option");
        prioLow.setAttribute("value", "Low");
        prioLow.textContent = "Low";

        const prioMed = document.createElement("option");
        prioMed.setAttribute("value", "Med");
        prioMed.textContent = "Med";

        const prioHigh = document.createElement("option");
        prioHigh.setAttribute("value", "High");
        prioHigh.textContent = "High";

        const submitTodoBtn = document.createElement("button");
        submitTodoBtn.classList.add("submit-todo");
        submitTodoBtn.setAttribute("type", "submit");
        submitTodoBtn.textContent = "Submit";

        todoPrioInput.appendChild(prioLow);
        todoPrioInput.appendChild(prioMed);
        todoPrioInput.appendChild(prioHigh);

        form.appendChild(todoTitleInput);
        form.appendChild(todoDescInput);
        form.appendChild(todoDueDateInput);
        form.appendChild(todoPrioInput);
        form.appendChild(submitTodoBtn);
        todoListContainer.appendChild(form);
        }
    }

    function toggleDetails(details) {
        if (details.style.display === "block") {
            details.style.display = "none";
          } else {
            details.style.display = "block";
        }
    }

    function renderProjectForm() {
        const projectsHead = document.querySelector("#projects-head");

        const form = document.createElement("form");

        const titleInput = document.createElement("input");
        titleInput.setAttribute("id", "project-title-input");
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("placeholder", "Title");

        const descInput = document.createElement("input");
        descInput.setAttribute("id", "project-desc-input");
        descInput.setAttribute("type", "text");
        descInput.setAttribute("placeholder", "Description");

        const submitProjectBtn = document.createElement("button");
        submitProjectBtn.setAttribute("id", "submit-project");
        submitProjectBtn.setAttribute("type", "submit");
        submitProjectBtn.textContent = "Submit";

        form.appendChild(titleInput);
        form.appendChild(descInput);
        form.appendChild(submitProjectBtn);
        projectsHead.appendChild(form);

        handlers.submitNewProject();
    }
    
    function clearDom() {
        contentDiv.innerHTML = "";
    }
    
    return  { 
            render,
            toggleDetails,
            renderProjectForm, 
            clearDom
            }
})();

export default render;