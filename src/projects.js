const projects = (() => {
        let projectList = [
            {
                title: "Test Project",
                description: "Project Description",
                todoList: [
                    {
                        title: "Test Todo",
                        description: "Todo description",
                        dueDate: "2024-3-1",
                        priority: "High"
                    },
                    {
                        title: "Test Todo 2",
                        description: "Todo description 2",
                        dueDate: "2024-3-12",
                        priority: "Low"
                    },
                    {
                        title: "Test Todo 5",
                        description: "Todo description 5",
                        dueDate: "2024-3-12",
                        priority: "Low"
                    }
                ]
            },
            {
                title: "Test Project 2",
                description: "Project Description 2",
                todoList: [
                    {
                        title: "Test Todo 3",
                        description: "Todo description 3",
                        dueDate: "2024-3-1",
                        priority: "High"
                    },
                    {
                        title: "Test Todo 4 ",
                        description: "Todo description 4",
                        dueDate: "2024-3-12",
                        priority: "Low"
                    }
                ]
            } 
        ]
        // const projectsFromStorage = JSON.parse(localStorage.getItem("projectList"));
        // projectList = projectsFromStorage;

    class Project {
        constructor(title, description, todoList) {
            this.title = title;
            this.description = description;
            this.todoList = todoList;
        }
    }

    function addProject(title, description, todoList) {
        const project = new Project(title, description, todoList);
        projectList.push(project);
    }

    function deleteProject(projectIndex) {
        projects.projectList.splice(projectIndex, 1);
    }

    return { projectList, addProject, deleteProject }
})();

export default projects;