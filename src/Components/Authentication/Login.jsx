import style from "./Authentication.module.css";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import decoration from "../../Assets/Decorations/relax.svg";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(props.wrongAuth);
  return (
    <div className={style.container}>
      <div className={style.customContainer}>
        <div className={style.login_container}>
          <div className={style.registration}>
            <div className={style.title}>Enter your profile</div>
            {!props.wrongAuth ? (
              <div></div>
            ) : (
              <div className={style.wrongAuth}>Wrong email or password</div>
            )}
            <div className={style.input}>
              <div className={style.inputContainer}>
                <div className={style.customInput}>
                  <input
                    value={email}
                    onInput={(evt) => setEmail(evt.target.value)}
                    type="text"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className={style.inputContainer}>
                <div className={style.customInput}>
                  <input
                    value={password}
                    onInput={(evt) => setPassword(evt.target.value)}
                    type="text"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className={style.buttonContainer}>
                <button
                  onClick={() => {
                    props.login({
                      email,
                      password,
                    });
                  }}
                  className={style.button}
                >
                  Login
                </button>
              </div>
              <div className={style.link}>
                <div>Don't have a profile yet?</div>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "var(--color-active)" : "black",
                  })}
                  to="/auth/registration"
                >
                  <div className={style.linkClick}> Register now</div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
      <div>
        <img className={style.img} src={decoration} alt="" />
      </div>
    </div>
  );
}
export default Login;
