import React from "react";
import { useSelector } from "react-redux";

function NavBar() {
  const { tasksList, error } = useSelector((state) => state.tasks);
  return (
    <div>
      <h1 className="text-center my-4 text-primary"> project managenment</h1>
      <p className="text-center lead">
        Currently {tasksList.length} task {tasksList.length} pending
      </p>
      {!error ? null : <h5 className="text-center text-danger">{error}</h5>}
    </div>
  );
}

export default NavBar;
