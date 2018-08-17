import React, { Component } from 'react';
import '../../App.css';
import TaskHeading from '../TaskHeading/TaskHeading';


class Component1 extends Component {
  render() {
    const name = "Hello World";
    const obj = {name: "Hello World Object"}
    const data = ['We', 'are', 'United'] //Show these in seperate tags
    const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] //Show these in seperate tags
    const complex = [{company: 'XYZ', jobs: ['Javascript', 'React']}, {company: 'ABC', jobs: ['AngularJs', 'Ionic']}]
    return (
        <div>
            <TaskHeading title="Task:01" task="Render some data into components" />
            <div className="Task-body">
                <p>{name}</p>
                <p>{obj.name}</p>     
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            {data.map((value)=>{
                                return <td key={value}>{value}</td>
                            })}
                        </tr>
                        <tr>
                            {list.map((value)=>{
                                return <td key={value.name}>{value.name}</td>
                            })}
                        </tr>
                    </tbody>
                </table>
                    {complex.map((data)=>{
                        return(
                            <table className="table table-bordered" key={data.company}>
                                <thead>
                                    <tr>
                                        <th colSpan="2" className="text-center">{data.company}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {data.jobs.map((jobs)=>{
                                            return <td key={jobs}>{jobs}</td>
                                        })}
                                    </tr>
                                </tbody>
                            </table>
                        ) 
                    })}
                </div>
            </div>
    );
  }
}

export default Component1;
