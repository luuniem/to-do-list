import React, { Component } from "react";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import "./App.scss";
import Form from "./components/Form";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: "",
      tasks: []
    };
    // this.checkInputHandler = this.checkInputHandler.bind(this);
  }

  //update value from form
  updateValueHandler = e => {
    this.setState({
      newTask: e.target.value
    });
  };

  addTaskHandler = e => {
    e.preventDefault();
    //create a new task with random id
    const newTask = {
      id: 1 + Math.random(),
      value: this.state.newTask.slice()
    };

    //copy list of tasks from line 15
    const tasks = [...this.state.tasks];

    //adds task to task list
    tasks.push(newTask);

    //update state with new task list and reset newTask
    this.setState({
      newTask: "",
      tasks
    });
  };
  deleteTaskHandler = id => {
    const tasks = [...this.state.tasks];
    const updatedTasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks: updatedTasks
    });
  };

  render() {
    const { addTaskHandler, updateValueHandler, deleteTaskHandler } = this;
    const { newTask, tasks } = this.state;
    let taskList = (
      <div>
        {tasks.map(task => {
          return (
            <Task
              key={task.id}
              message={task.value}
              deleteTask={() => deleteTaskHandler(task.id)}
            />
          );
        })}
      </div>
    );

    return (
      <div className="App">
        <h3 className="title">To Do List</h3>
        <Form
          onSubmit={addTaskHandler}
          value={newTask}
          onChange={updateValueHandler}
        />
        <h5>Adding: {newTask}</h5>
        <TaskList theList={taskList} />
      </div>
    );
  }
}
export default App;
