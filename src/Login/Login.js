import styles from "./Login.module.css";
import img3 from "../img/img3.png";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const idRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();

  const userArr = JSON.parse(localStorage.userArr);
  console.log("User Arr", userArr);

  const style = {
    backgroundImage: `url(${img3})`,
  };

  const clickHandler = (e) => {
    e.preventDefault();
    const input = {
      id: idRef.current.value,
      pass: passRef.current.value,
    };
    console.log("Input", input);

    const idChecked = userArr.filter(function (user) {
      return user.id === input.id;
    });
    if (idChecked.length === 0 || !idChecked) {
      alert("Khong ton tai id");
    } else {
      const user = idChecked[0];
      if (user.pass !== input.pass) {
        alert("Mat khau khong dung");
      } else {
        localStorage.currentUser = JSON.stringify(user);
        navigate("/");
      }
    }
  };
  return (
    <div>
      <div className={styles.formContainer} style={style}>
        <form action="form">
          <h2> Login </h2>
          <input type="text" name="ID" placeholder="ID" ref={idRef}></input>
          <input
            type="password"
            name="Password"
            placeholder="Password"
            ref={passRef}
          ></input>
          <button type="Submit" id="Submit" onClick={clickHandler}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
