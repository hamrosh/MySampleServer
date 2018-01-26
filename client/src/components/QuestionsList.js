import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getQuestions } from '../actions/index';
import { Link } from 'react-router-dom';
class QuestionList extends Component {
  componentDidMount() {
    this.props.getQuestions();
  }

  renderQuestions() {
    return _.map(this.props.allqt, question => {
      return (
        <li className="list-group-item" key="question._id">
          {question.Question}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="text-right">
          <Link className="btn btn-primary" to="/questions/new">
            Create new Question
          </Link>
        </div>
        <h3>Questions</h3>
        <ul className="list-group">{this.renderQuestions()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { allqt: state.allquestions };
}
export default connect(mapStateToProps, { getQuestions })(QuestionList);
