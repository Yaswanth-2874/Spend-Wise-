import React, { useState } from "react";
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";

const AddNewItem = (props) => {
  const { email, setUpdateData } = props;
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");
  const [isExpenditure, setIsExpenditure] = useState(true);
  const [isNumber, setIsNumber] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setIsNumber(!isNaN(cost));
    if (cost === "" || isNaN(cost) || !category) {
      alert("Enter valid cost fool");
      return;
    }
    setLoading(true);
    setUpdateData((prevState) => prevState + 1);
    axios
      .put(`http://localhost:4000/users/${email}`, {
        category: category,
        description: description,
        cost: parseFloat(cost),
        balance: 2100,
        isExpenditure: isExpenditure,
      })
      .then(() => setLoading(false))
      .catch((e) => console.log(e));
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "20px 20px",
        backgroundColor: "rgb(255, 255, 220)",
        borderRadius: "30px",
      }}
    >
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              value={isExpenditure}
              onChange={(e) => setIsExpenditure(e.target.checked)}
              icon={<CheckCircleOutlinedIcon />}
              checkedIcon={<CheckCircleIcon />}
            />
          }
          label="Mark as Expenditure"
        />
      </FormGroup>
      <FormControl fullWidth>
        <InputLabel id="category">Category</InputLabel>
        <Select
          labelId="category"
          id="demo-simple-select"
          value={category}
          label="Category"
          required
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value={"Food"}>Food</MenuItem>
          <MenuItem value={"Education"}>Education</MenuItem>
          <MenuItem value={"Daily Living"}>Daily Living</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Description"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        label="Cost"
        value={cost}
        variant="outlined"
        required
        onChange={(e) => setCost(e.target.value)}
        error={!isNumber}
        helperText={!isNumber && "Enter a valid Amount"}
      />
      <LoadingButton size="large" onClick={handleClick} loading={loading}>
        Add Item <AddIcon fontSize="medium" />
      </LoadingButton>
    </form>
  );
};

export default AddNewItem;
