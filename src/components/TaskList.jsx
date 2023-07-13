import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import MyVerticallyCenteredModal from "../components/UpdateTask";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTaskFromServer,
  getTasksFromServer,
  removeTaskFromList,
  setSelectedTask,
} from "../slices/tasksSlice";

function TaskList(props) {
  const { tasksList } = useSelector((state) => state.tasks);
  const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasksFromServer());
  }, [dispatch]);

  const updateTask = (task) => {
    console.log("update complete");
    setModalShow(true);
    dispatch(setSelectedTask(task));
  };
  const deleteTask = (task) => {
    console.log("deletecomplete");
    dispatch(deleteTaskFromServer(task))
      .unwrap()
      .then(() => {
        dispatch(removeTaskFromList(task));
      });
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasksList &&
            tasksList.map((task, index) => {
              return (
                <tr className="text-center align-middle" key={task.id}>
                  <td>{index + 1}</td>
                  <td className="text-wrap align-middle">{task.title}</td>
                  <td className="text-wrap align-middle">{task.description}</td>
                  <td className="text-wrap align-middle lh-lg">
                    <Button
                      variant="primary"
                      className="mx-2 my-1"
                      onClick={() => updateTask(task)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                    <Button variant="primary" onClick={() => deleteTask(task)}>
                      <i className="bi bi-trash3"></i>
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default TaskList;
