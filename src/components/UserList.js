import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUser, setlistOfUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((listOfUser) => {
        setlistOfUser(listOfUser.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {listOfUser.map((user) => {
          return(
        <div key={user.id}> 
            <h2 style={{color:"red", fontSize:"20px"}}>USER ID: {user.userId}</h2>
            <h3 style={{color:"blue", fontSize:"20px", width:'600px'}}>USER TITLE: {user.title}</h3>
            {/* <h5 style={{fontSize:"18px"}}>USER TITLE: {user.title}</h5> */}
            <h4 style={{width:'600px', color:'grey'}}>USER BODY: {user.body}</h4>
        </div>)
      })}
    </div>
  );
};

export default UserList;
