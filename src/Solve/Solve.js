import React from "react";
import styles from "./Solve.module.css";

function Solve() {
  return (
    <div className="container">
      <div className="row">
        <div className="col1">
          <table className="table1">
            <thead>
              <tr>
                <th colSpan="2">Thong so</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>So</td>
                <td>0</td>
              </tr>
              <tr>
                <td>May toi thieu</td>
                <td>63</td>
              </tr>
              <tr>
                <td>So lan lap lai toi thieu</td>
                <td>2419</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col2">
          <table className="table2">
            <thead>
              <tr>
                <th colSpan="2">Tieu chi dung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="number"
                    name="So lan lap toi da"
                    value="1000"
                    style="width: 4em;"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Thoi gian toi da tinh bang giay</td>
                <td>
                  <input
                    type="number"
                    name="thoi gian toi da"
                    className="form=controll"
                    placeholder="Max number of iterations"
                    value="30"
                    style="width: 4em;"
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Solve;
