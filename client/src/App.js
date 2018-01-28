import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import QuestionList from './containers/question_list';
// import QuestionDetails from './containers/question_detail';
import FetchQuestion from './containers/fetchquestions';
import QuestionDetails from './containers/question_detail';
class App extends Component {
  render() {
    return (
      <div>
        <FetchQuestion />
        <QuestionDetails />
      </div>
    );
  }
}

export default App;
