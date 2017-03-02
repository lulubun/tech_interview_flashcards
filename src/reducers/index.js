import {combineReducers} from 'redux'
import flashCardsRed from './flashCardsRed'
import articlesRed from './articlesRed'

const allReducers = combineReducers({
  flashCardsRed,
  articlesRed
})

export default allReducers
