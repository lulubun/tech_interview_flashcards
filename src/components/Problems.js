import React from 'react';
import {connect} from 'react-redux';

export class Problems extends React.Component {
  render() {
    return (
      <div className="problems_list">
        {this.props.problemsList}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  problemsList: state.flashCardsRed.savedCards
})

export default connect(mapStateToProps)(Problems);
