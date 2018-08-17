import React, { Component } from 'react';
import '../../App.css';
import TaskHeading from '../TaskHeading/TaskHeading';
import UserPosts from '../UserPosts/UserPosts';



class Component3 extends Component {
  render() {
        return (
            <div>
                <TaskHeading title="Task:03" task="Rendering data from API (Hardcoded from variable)" />
                <div className="Task-body">
                    <h4 className="text-center">Posts:</h4>
                    <UserPosts />              
                </div>
            </div>
        );
  }
}

export default Component3;
