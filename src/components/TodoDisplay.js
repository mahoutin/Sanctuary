import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "C:/Users/hooty/Desktop/sanctuary/src/App.css";


export default class TodoDisplay extends Component {
  render() {
    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">
            {" "}
            Here is your Task list
          </h3>
          <TodoItem />
          <button
            type="button"
            className="btn btn-danger btn-block text-capitalize mt-5 "
            id="todo"
            
          >
            Clear list
          </button>
        </ul>
      </div>
    );
  }
}
