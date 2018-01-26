import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import FetchReducer from './reducer_fetchquestion';
import GetQuestionsReducer from './reducer_getquestions';
// import ActiveQuestion from './reducer_activequestion';
const rootReducer = combineReducers({
  question: FetchReducer,
  allquestions: GetQuestionsReducer,
  form: formReducer
  // activeQuestion: ActiveQuestion
});

export default rootReducer;
