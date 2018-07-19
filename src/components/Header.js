import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>

    <button>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink> {/* NavLink activeClassName lets customize with css */}
    </button>

    <button>
      <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    </button>

  </header>
);

export default Header;