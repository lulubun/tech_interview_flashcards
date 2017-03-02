import React from 'react';
import Problems from './Problems';
import NewProblem from './NewProblem';
import Articles from './Articles';
//import '../App.css';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Problems />
        <NewProblem />
        <Articles />
      </div>
    );
  }
}
