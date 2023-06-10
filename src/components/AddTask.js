import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [name, setName] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };

  const addATask = (event) => {
    event.preventDefault();
    if (name !== "") {
      addTask(name);
      setName("");
    }
  };

  return (
    <form className="form" onSubmit={addATask}>
      <input
        className="form-control col-2"
        type="text"
        name="name"
        placeholder="Add Task"
        style={{ display: "inline", width: "80%", margin: "1%" }}
        value={name}
        onChange={changeName}
      />
      <input type="submit" value="Add" className="btn btn-primary col-2" />
    </form>
  );
};

export default AddTask; 
