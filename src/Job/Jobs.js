import { useRef, useState } from "react";
import JobSKU from "./JobSKU";
import styles from "./Jobs.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { addSKU } from "../redux/jobSlice";

// const sampleSKUs = [
//   {
//     id: `sku_${Math.random()}`,
//     skuTitle: "Spring Water 16oz",
//     operations: [
//       {
//         id: `operation_${Math.random()}`,
//         operationTitle: "Bottle Expansion",
//         tasks: [
//           { id: `task_${Math.random()}`, machineId: "1", time: 10 },
//           { id: `task_${Math.random()}`, machineId: "2", time: 10 },
//           { id: `task_${Math.random()}`, machineId: "3", time: 8 },
//           { id: `task_${Math.random()}`, machineId: "4", time: 5 },
//         ],
//       },
//       {
//         id: `operation_${Math.random()}`,
//         operationTitle: "Some Expansion",
//         tasks: [
//           { id: `task_${Math.random()}`, machineId: "1", time: 10 },
//           { id: `task_${Math.random()}`, machineId: "2", time: 10 },
//           { id: `task_${Math.random()}`, machineId: "3", time: 8 },
//           { id: `task_${Math.random()}`, machineId: "4", time: 5 },
//         ],
//       },
//     ],
//   },
// ];

const Jobs = () => {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const skus = useSelector((state) => state.job.skus);
  console.log("#1 SKUS", skus);
  const [isDisplay, setDisplay] = useState(false);
  const toggleFormHandler = (e) => {
    e.preventDefault();
    setDisplay((prevState) => !prevState);
  };
  const addSKUHandler = (e) => {
    e.preventDefault();
    dispatch(addSKU(nameRef.current.value));
    setDisplay(false);
  };
  const generateSKUs = (skus) =>
    skus.map((sku) => <JobSKU sku={sku} key={sku.id} />);
  return (
    <div className={styles.container}>
      <h1>See SKUs below</h1>
      <div className={styles.sku_container}>
        {skus && generateSKUs(skus)}
        {isDisplay && (
          <Form className={styles.form} onSubmit={addSKUHandler}>
            <Form.Label>Enter new SKU</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter new SKU"
              ref={nameRef}
            />
            <Form.Text className="text-muted">
              You will be able to add possible operation after adding an SKU
            </Form.Text>
            <div className={styles.buttons}>
              <Button variant="outline-primary" type="submit">
                Add new SKU
              </Button>
              <Button variant="warning" onClick={toggleFormHandler}>
                Cancel
              </Button>
            </div>
          </Form>
        )}
        {!isDisplay && (
          <Button variant="primary" onClick={toggleFormHandler}>
            New SKU
          </Button>
        )}
      </div>
    </div>
  );
};

export default Jobs;
