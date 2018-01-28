import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import FetchReducer from './reducer_fetchquestion';
import GetQuestionsReducer from './reducer_getquestions';
import GetCategoriesReducer from './Category/index';

const rootReducer = combineReducers({
  question: FetchReducer,
  allquestions: GetQuestionsReducer,
  form: formReducer,
  allcategories: GetCategoriesReducer
});

export default rootReducer;
