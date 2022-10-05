import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import Search from './Components/search';
import MainInfo from './Components/MainInfo';

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
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    students: [],
    pokeData: null
  };

  // async componentDidMount() {
  //   const response = await fetch('/students');
  //   const body = await response.json();
  //   this.setState({students: body});
  // }
  componentDidUpdate() {
    console.log(this.state.pokeData);
  }

  onSubmit(data) {
    this.setState({pokeData: data});
  }
  render() {
    const {students} = this.state;
    return (
      <div className="container">
        <div>
          <Search onSubmitted={this.onSubmit}/>
        </div>
        <div>
          {this.state.pokeData && <MainInfo pokeData={this.state.pokeData}/> }
        </div>
      </div>
    );
  }
}


export default App;

  {/* <div className="App-intro">
            <h2>Students</h2>
            {students.map(student=>
              <div key={student.id}>
                {student.userName}: {student.firstName} {student.lastName}
                </div>
            )}
          </div> */}