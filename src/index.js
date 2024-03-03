import handlers from "./handlers";
import render from "./render";

render.render();

handlers.showProjectForm();
handlers.removeProject();
handlers.submitNewTodo();
handlers.removeTodo();
handlers.expandTodo();