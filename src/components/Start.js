import React from 'react';
import Problems from './Problems';
import NewProblem from './NewProblem';
import Articles from './Articles';

export class Start extends React.Component {
  render() {
    return (
      <div className="Start">
        <Problems />
        <NewProblem />
        <Articles />
      </div>
    );
  }
}
