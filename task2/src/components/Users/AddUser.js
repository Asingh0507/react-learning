import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

export const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error,setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0 ) {
        setError({
            title:"Invalid Input",
            message:"Please enter valid name and age (Non-empty values)",
        })
      return;
    }
    if (+age < 1){
        setError({
            title:"Invalid Age",
            message:"Please enter a valid age (>0) ",
        })
    }

    props.onAddUser(username, age);

    setAge("");
    setUsername("");
  };

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };
  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm = {errorHandler}/>}
      <Card class={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username"> Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={usernameChangeHandler}
          ></input>

          <label htmlFor="age"> Age (Years) </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={ageChangeHandler}
          ></input>

          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </div>
  );
};
