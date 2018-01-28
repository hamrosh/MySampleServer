import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCategory } from '../../actions/Category';

class CategoryForm extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? ' has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.addCategory(values, () => {
      this.props.history.push('/category/all');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
        name="AddCategoryForm"
      >
        <Field
          label="Category"
          name="CategoryName"
          component={this.renderField}
        />
        <Field
          label="Description"
          name="Description"
          component={this.renderField}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link
          to="/category/all"
          style={{ marginLeft: 5 }}
          className="btn btn-danger"
        >
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.CategoryName) {
    errors.CategoryName = 'Enter a Category';
  }

  if (!values.Description) {
    errors.Description = 'Enter the Description for the Category';
  }

  return errors;
}

export default reduxForm({ validate, form: 'AddCategoryForm' })(
  connect(null, { addCategory })(CategoryForm)
);
