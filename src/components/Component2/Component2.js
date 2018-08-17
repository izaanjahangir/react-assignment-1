import React, { Component } from 'react';
import '../../App.css';
import './Component2.css';
import TaskHeading from '../TaskHeading/TaskHeading';


class Component2 extends Component {
  render() {
    return (
        <div>
            <TaskHeading title="Task:02" task="import Something from 'package' VS import {Something} from 'package'" />
            <div className="Task-body">
              <div className="row">
                  <div className="my-2 box col-md-6">
                    <h5>import Something from 'package':</h5>
                    <p>
                      When you export default (whether it is an object, a function, a class, etc.) then this import statement may then be used to import such defaults.
                      It is used to obtain the default exported module from the file. The module file might contain more than one module but only contain one default module.
                      When you import in this way, you are not required to put curly braces on the module name. This specifies that this import is default.
                    </p>
                  </div>
                  <div className="my-2 box col-md-6">
                    <h5>import &#123;Something&#125; from 'package:</h5>
                    <p>
                      When you export (whether it is an object, a function, a class, etc.) then this import statement may then be used to import such modules.
                      It is used to obtain the exported module from the file which is not default. The module file might contain more than one module but only contain one default module.
                      When you import in this way, you are required to put curly braces on the module name. This specifies that this import isn't default.
                    </p>
                  </div>
                </div>
              </div>
        </div>
    );
  }
}

export default Component2;
