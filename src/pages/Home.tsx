import { useUser } from "hooks/UserContext";
import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <div>
      <h1>Home Page!</h1>
      <h2>{user ? user.username : ""}</h2>
      <div>{process.env.REACT_APP_API_BASE_URL}</div>
      <Link to="/welcome">Go to User 42 Page</Link>
    </div>
  );
};

export default HomePage;
