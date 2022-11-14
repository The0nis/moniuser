import React, { useState } from "react";
import style from "./AddUser.module.css";
import Card from "../UI/card";
import Button from "../UI/Button";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    if (+enteredAge < 1) {
      return;
    }
    
    props.onAddUser(enteredUsername, enteredAge);
   //console.log(enteredAge, enteredUsername);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card>
      <form onSubmit={addUserHandler} className={style.form}>
        <label htmlFor="username" className={style.label}>
          Username
        </label>
        <input
          type="text"
          value={enteredUsername}
          id="username"
          className={style.input}
          onChange={usernameChangeHandler}
        />

        <label htmlFor="age" className={style.label}>
          Age (Years)
        </label>
        <input
          type="number"
          id="age"
          value={enteredAge}
          className={style.input}
          onChange={ageChangeHandler}
        />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
