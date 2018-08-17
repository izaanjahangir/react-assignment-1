import React, { Component } from 'react';
import '../../App.css';
import './TaskHeading.css';

class TaskHeading extends Component {
  render() {
    return (
         <div className="Task-heading text-center">
            <h4>{this.props.title}</h4>
            <p>{this.props.task}</p>
        </div> 
    );
  }
}

export default TaskHeading;
