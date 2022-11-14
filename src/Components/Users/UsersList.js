import React from "react";
import Card from "../UI/card";
import style from './UserList.module.css';

const UsersList = (props) => {
  return (
    <Card className={style.users}>
      <ul>
        {props.users.map((user, i) => (
          <li key={i}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
