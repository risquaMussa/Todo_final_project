import React from "react";
const Home = () => {
  return (
    <div>
      <h1>Welcome to the Todo App</h1>
      <p>This is landing page.</p>
      <footer>
        <small>
          copy right &copy; Risqua Mussa.
          {new Date().getFullYear()}
        </small>
      </footer>
    </div>
  );
};

export default Home;
