import * as actions from '../actions/index';

const initialState = {
  savedCards: [{
    question: '1 + 1 = ?',
    masterAnswer: '2',
    otherAnswers: []
  }]
}

const flashCards = (state=initialState, action) => {
  switch (action.type) {
    case actions.DISPLAY_CARD:
    return{...state, savedCards: action.savedCards}

    default:
    return state
  }
}

export default flashCards
