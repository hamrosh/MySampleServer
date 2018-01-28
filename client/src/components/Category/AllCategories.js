import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { allCategories, delCategory } from '../../actions/Category';
import Image from './deleteimg.png';
import { Link } from 'react-router-dom';

class AllCategories extends Component {
  componentDidMount() {
    this.props.allCategories(1);
  }

  deleteCategory(categoryid) {
    this.props.delCategory(categoryid, () => {});
    this.props.allCategories(1);
  }

  renderCategories() {
    console.log(this.props.allcategories);

    return _.map(this.props.allcategories, category => {
      return (
        <li className="list-group-item" key={category._id}>
          {category.CategoryName}
          <img
            className="float-right"
            onClick={() => {
              this.deleteCategory(category._id);
            }}
            src={Image}
            height="16px"
            width="auto"
          />
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="text-right">
          <Link className="btn btn-primary" to="/category/new">
            Create new Category
          </Link>
        </div>
        <h3>Categories</h3>
        <ul className="list-group">{this.renderCategories()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { allcategories: state.allcategories };
}
export default connect(mapStateToProps, { allCategories, delCategory })(
  AllCategories
);
