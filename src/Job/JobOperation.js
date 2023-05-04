import styles from "./JobOperation.module.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTaskByTaskID } from "../redux/jobSlice";

const JobOperation = (props) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.job.tasks).filter(
    (task) => task.operation === props.operation.id
  );
  console.log("#4 operation", props.operation);
  console.log("#5 tasks", tasks);
  const machineRef = useRef();
  const timeRef = useRef();
  const [isDisplay, setDisplay] = useState(false);
  const machineArr = JSON.parse(localStorage.machines) || [];
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Machine ID", machineRef.current.value);
    console.log("Time", timeRef.current.value);
    dispatch(
      addTask({
        machineID: machineRef.current.value,
        time: timeRef.current.value,
        operationID: props.operation.id,
      })
    );
    setDisplay(false);
  };
  const toggleFormHandler = (e) => {
    e.preventDefault();
    setDisplay((prevState) => !prevState);
  };
  return (
    <div className={styles.container}>
      <div className={styles.operation}>
        <h2>{props.operation.operationTitle}</h2>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Machine ID</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks &&
              tasks.map((task) => (
                <tr key={Math.random()}>
                  <td>{task.machineID}</td>
                  <td>{task.time}</td>
                  <td
                    className={styles.deleteButton}
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(deleteTaskByTaskID(task.id));
                    }}
                  >
                    🗑
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        {isDisplay && (
          <Form onSubmit={formSubmitHandler}>
            <Form.Select aria-label="Default select example" ref={machineRef}>
              <option>Select Machine</option>
              {machineArr.map((machine) => (
                <option value={machine.id} key={machine.id}>
                  {machine.name}
                </option>
              ))}
            </Form.Select>
            <Form.Control
              type="number"
              placeholder="Enter time required"
              ref={timeRef}
            />
            <div className={styles.buttons}>
              <Button variant="outline-primary" type="submit">
                Submit
              </Button>
              <Button variant="danger" onClick={toggleFormHandler}>
                Cancel
              </Button>
            </div>
          </Form>
        )}

        {!isDisplay && (
          <Button variant="primary" onClick={toggleFormHandler}>
            Add New Machine Option
          </Button>
        )}
      </div>
      <p>-&gt;</p>
    </div>
  );
};

export default JobOperation;
