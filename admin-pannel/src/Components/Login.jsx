import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthLogin } from "../Redux/UserAuth/Auth.action";
import ErrorAlert from "../Resuable/Error";
export default function LoginPage() {
  const [email, seteamil] = useState("");
  const [password, setpassword] = useState("");
  const [Alert, SetAlert] = useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let location = useLocation();
  let takingdata = location.state?.data || "/dashboard";
  let hel = () => {
    SetAlert(true);
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    dispatch(AuthLogin({ email, password })).then((result) => {
      if (email === "eve.holt@reqres.in" && password === "cityslicka") {
        SetAlert(true);
      } else {
        SetAlert(false);
        alert("INVALID CREDENTIALS 👋🏻");
      }
      navigate(takingdata, { replace: true });
      SetAlert(true);
    });
  };
  return (
    <div>
      <br />
      <br />
      <center>
        <h1 style={{ color: "skyblue" }}>ADMIN-LOGIN</h1>
      </center>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Email">Email Address</label>
          <br />
          <input
            type={"email"}
            value={email}
            onChange={(e) => seteamil(e.target.value)}
            placeholder="Enter Your E-Mail here"
            required
          />
          <br />
          <label htmlFor="Email">Admin Password</label>
          <br />
          <input
            type={"password"}
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter Your Password here"
            required
          />
          <br />
          <br />
          <input
            style={{
              backgroundColor: "black",
              color: "white",
              fontWeight: "bold",
            }}
            type={"submit"}
            value={"LOGIN"}
            onClick={hel}
          />
        </form>
      </FormWrapper>
      {/* <Box>{Alert === true ? <ErrorAlert /> : null}</Box> */}
      <br />
      <br />
      <center>
        <h3>Login using Request-Response Api</h3>
      </center>
      <br />
      <center>
        <ul>
          <li>Email: eve.holt@reqres.in</li>
          <li>Password: cityslicka</li>
        </ul>
      </center>
    </div>
  );
}

const FormWrapper = styled.div`
  form {
    width: 300px;
    padding: 20px;
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content: center;
    border: 2px solid grey;
    border-radius: 10px;
    border-left-color: #4fc8ff;
  }
  form input {
    padding: 8px;
    border: 2px solid black;
    borderradius: 10px;
    text-align: center;
    border-radius: 5px;
    border-left-color: #4fc8ff;
  }
`;
