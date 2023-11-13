import { useState } from "react";

const Tasks = () => {
  return (
    <>
      <div>
        <form className="form-container">
          <label htmlFor="tasks">Create Task</label>
          <input id="tasks" type="text" className="form-input" />
        </form>
      </div>
    </>
  );
};

export default Tasks;
