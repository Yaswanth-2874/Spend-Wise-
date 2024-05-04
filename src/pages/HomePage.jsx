import React from "react";
import { useLocation } from "react-router-dom";
import AddNewItem from "../components/AddNewItem";

const HomePage = () => {
  const location = useLocation();
  const userData = location.state;
  if (!userData)
    return (
      <>LOGIN FIRST FOOL JUST A PLACEHOLDER FOR NOW DONT COMPLAIN ABOUT IT</>
    );
  console.log(userData);
  return (
    <div>
      <AddNewItem email={userData.email} />
    </div>
  );
};

export default HomePage;
