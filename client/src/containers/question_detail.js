import React, { Component } from 'react';
import { connect } from 'react-redux';
class FetchQuestion extends Component {
  render() {
    if (!this.props.question) {
      return 0;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Opt 1</th>
            <th>Opt 2 </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.props.question.question.Question}</td>
            <td>{this.props.question.question.Option1}</td>
            <td>{this.props.question.question.Option2}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ question }) {
  return { question };
}

export default connect(mapStateToProps)(FetchQuestion);
