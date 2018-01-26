import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class HeaderNavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a class="navbar-brand" href="#">
          ITI Gurus Admin
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
                <span class="sr-only">(current)</span>
              </a>
            </li>

            <li class="nav-item">
              <Link className="nav-link" to="/">
                All Questions
              </Link>
            </li>

            <li class="nav-item">
              <Link className="nav-link" to="/questions/new">
                Create new Question
              </Link>
            </li>
          </ul>
          <form class="form-inline mt-2 mt-md-0">
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default HeaderNavBar;
