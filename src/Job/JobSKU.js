import { useRef, useState } from "react";
import JobOperation from "./JobOperation";
import styles from "./JobSKU.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { addOperation } from "../redux/jobSlice";

const JobSKU = (props) => {
  const dispatch = useDispatch();
  const titleRef = useRef();
  const operations = useSelector((state) => state.job.operations).filter(
    (operation) => operation.sku === props.sku.id
  );
  console.log("#2 SKU", props.sku);
  console.log("#3 operations", operations);
  const [isDisplay, setDisplay] = useState(false);
  const toggleFormHandler = (e) => {
    e.preventDefault();
    setDisplay((prevState) => !prevState);
  };
  const addOperationHandler = (e) => {
    e.preventDefault();
    dispatch(
      addOperation({
        skuID: props.sku.id,
        operationTitle: titleRef.current.value,
      })
    );
    setDisplay(false);
  };

  return (
    <div className={styles.sku}>
      <h1>{props.sku.skuTitle}</h1>
      <div className={styles.operation_container}>
        {operations.map((operation) => (
          <JobOperation operation={operation} key={operation.id} />
        ))}

        {isDisplay && (
          <Form className={styles.form} onSubmit={addOperationHandler}>
            <Form.Label>Enter new Operation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter new Operation"
              ref={titleRef}
            />
            <Form.Text className="text-muted">
              You will be able to add possible machines after adding an
              operation
            </Form.Text>
            <div className={styles.buttons}>
              <Button variant="outline-primary" type="submit">
                Add new Operation
              </Button>
              <Button variant="warning" onClick={toggleFormHandler}>
                Cancel
              </Button>
            </div>
          </Form>
        )}
        {!isDisplay && (
          <Button variant="primary" onClick={toggleFormHandler}>
            Add Operation
          </Button>
        )}
      </div>
    </div>
  );
};

export default JobSKU;
