import { useState, Fragment } from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./Machines.module.css";
import data from "../mock-data.json";
import ReadOnlyRow from "../Machines/ReadOnlyRow";
import EditableRow from "./EdittableRow";
import img4 from "../img/img4.png";

const Machines = () => {
  const [infors, setInfors] = useState(data);
  const [addFormData, setAddFormData] = useState({
    id: "",
    name: "",
  });

  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
  });

  const [editInforId, seteditInforId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newInfor = {
      id: addFormData.id,
      name: addFormData.name,
    };

    const newInfors = [...infors, newInfor];
    setInfors(newInfors);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedInfor = {
      id: editFormData.id,
      name: editFormData.name,
    };

    const newInfors = [...infors];

    const index = infors.findIndex((infor) => infor.id === editInforId);

    newInfors[index] = editedInfor;
    setInfors(newInfors);
    seteditInforId(null);
  };

  const handleEditClick = (event, infor) => {
    event.preventDefault();
    seteditInforId(infor.id);
    const formValue = {
      id: infor.id,
      name: infor.name,
    };
    setEditFormData(formValue);
  };

  const handleCancelClick = () => {
    seteditInforId(null);
  };

  const handleDeleteClick = (inforId) => {
    const newInfors = [...infors];

    const index = infors.findIndex((infor) => infor.id === inforId);

    newInfors.splice(index, 1);

    setInfors(newInfors);
  };

  const style = {
    backgroundImage: `url(${img4})`,
  };
  return (
    <div>
      <NavBar />
      <div className={styles.machine} style={style}>
        <div className={styles.tableContainer}>
          <h1>Add a new machine</h1>
          <form onSubmit={handleAddFormSubmit}>
            <input
              type="text"
              name="id"
              required="required"
              placeholder="ID"
              onChange={handleAddFormChange}
            ></input>
            <input
              type="text"
              name="name"
              required="required"
              placeholder="Name"
              onChange={handleAddFormChange}
            ></input>
            <button type="ADD" id="ADD">
              ADD
            </button>
          </form>
        </div>

        <div>
          <form onSubmit={handleEditFormSubmit}>
            <h2>Machines</h2>
            <table className={styles.tableMachines}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Machines</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {infors.map((infor) => (
                  <Fragment key={infor.id}>
                    {editInforId === infor.id ? (
                      <EditableRow
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadOnlyRow
                        infor={infor}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Machines;
