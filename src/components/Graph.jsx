import React, { useState, useEffect } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import axios from "axios";

function Graph(props) {
  const { email, password, updateData } = props;
  const [userData, setUserData] = useState();
  const fetchData = () => {
    axios
      .post("http://localhost:4000/users/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (!response.data) {
          alert("Something went wrong");
        } else if (response.data.status === "bad") {
          alert("Incorrect credentials");
        } else {
          setUserData(response.data);
        }
      })
      .catch((e) => console.log("Not able to login due to ", e));
  };
  // eslint-disable-next-line
  useEffect(fetchData, [updateData]);

  if (!userData) return <>Loading</>;
  return (
    <PieChart
      series={[
        {
          data: userData.data,
          innerRadius: 30,
          outerRadius: 100,
          paddingAngle: 5,
          cornerRadius: 5,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -5 },
        },
      ]}
      height={200}
      width={400}
    ></PieChart>
  );
}

export default Graph;
