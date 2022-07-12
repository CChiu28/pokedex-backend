import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  state = { students: [] };
  async componentDidMount() {
    const response = await fetch('/students');
    const body = await response.json();
    this.setState({students: body});
  }
  render() {
    const {students} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-intro">
            <h2>Students</h2>
            {students.map(student=>
              <div key={student.id}>
                {student.userName}: {student.firstName} {student.lastName}
                </div>
            )}
          </div>
        </header>
      </div>
    );
  }
}


export default App;
