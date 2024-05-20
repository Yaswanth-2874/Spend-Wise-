import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
import AddNewItem from "./AddNewItem";
import BeforeLogin from "../components/BeforeLogin";
import Graph from "../components/Graph";

const HomePage = () => {
  // const location = useLocation();
  const email = "yryr2004@gmail.com";
  const password = "A!^*(zd1";
  const [updateData, setUpdateData] = useState(0);
  console.log("Email : ", email);
  if (!email) return <BeforeLogin />;

  return (
    <div className="basicDesign">
      <Graph email={email} password={password} updateData={updateData} />
      <AddNewItem email={email} setUpdateData={setUpdateData} />
    </div>
  );
};

export default HomePage;
