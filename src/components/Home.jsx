import React from "react";
import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 2rem;
  background-color: #f9f9f9;
  text-align: center;
  color: #333;
`;
const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #0077cc;
`;

const Footer = styled.footer`
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #666;

  small {
    display: inline-block;
    margin-top: 1rem;
  }
`;
const Home = () => {
  return (
    <HomeWrapper>
      <div>
        <Title>Welcome to the Todo App</Title>
        <p>
          This app is a simple todo app that allows you to add, delete and
          update todos.
        </p>
        <Footer>
          <small>
            copy right &copy; {new Date().getFullYear()} Risqua Mussa. All right
            reserved
          </small>
        </Footer>
      </div>
    </HomeWrapper>
  );
};

export default Home;
