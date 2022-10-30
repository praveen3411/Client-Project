import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthLogin } from "../Redux/UserAuth/Auth.action";

export default function LoginPage() {
  // let authdata = useSelector((store) => store.auth.isSucccess);
  const [email, seteamil] = useState("");
  const [password, setpassword] = useState("");

  let navigate = useNavigate();
  const dispatch = useDispatch();
  let location = useLocation();
  let takingdata = location.state?.data || "/dashboard";
  let handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      dispatch(AuthLogin({ email, password })).then((result) => {
        navigate(takingdata, { replace: true });
      });
    }
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
          />
        </form>
      </FormWrapper>
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
