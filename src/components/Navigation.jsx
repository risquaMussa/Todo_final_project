import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 2rem;
  background-color: #f4f4f4;
  border-bottom: 1px solid #ccc;

  a {
    margin-left: 2rem;
    text-decoration: none;
    color: #333;
    font-weight: 500;
    font-size: 1.1rem;
    transition: color 0.3s ease, border-bottom 0.3s ease;

    &:hover {
      color: #0077cc; /* Change text color on hover */
    }

    &.active {
      border-bottom: 2px solid #0077cc; /* Underline the active link */
    }
  }
`;
const Navigation = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/todos">TodoList</Link>
    </Nav>
  );
};
export default Navigation;
