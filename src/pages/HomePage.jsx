import React from "react";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const userData = location.state;
  console.log(userData);
  return <div>{userData.email}</div>;
};

export default HomePage;
