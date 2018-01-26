import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchQuestion from '../actions/index';
class FetchQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { questionid: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ questionid: event.target.value });
  }
  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchQuestion(this.state.questionid);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          Question ID :
          <input
            placeholder="Enter Question ID"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <button type="submit" className="btn btn-secondary">
            Fetch Question
          </button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchQuestion }, dispatch);
}

export default connect(null, mapDispatchToProps)(FetchQuestion);
