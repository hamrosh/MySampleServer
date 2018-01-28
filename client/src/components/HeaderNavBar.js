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
                Questions
              </Link>
            </li>

            <li class="nav-item">
              <Link className="nav-link" to="/category/all">
                Category
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default HeaderNavBar;
