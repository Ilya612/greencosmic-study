import style from "./Authentication.module.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import CheckEmail from "./CheckEmail";
import decoration from "../../Assets/Decorations/relax.svg";

function Authentication(props) {
  const [username, setUsername] = useState(""); // '' is the initial state value
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const enterHandler = (e) => {
    if (e.key === "Enter") {
      props.registration({
        email,
        username: email.split("@")[0],
        password,
      });
    }
  };
  useEffect(() => {
    document.addEventListener("keyup", enterHandler);
    return function () {
      document.removeEventListener("keyup", enterHandler);
    };
  });
  return (
    <div className={style.container}>
      <div>
        <div className={style.container}>
          <div className={style.customContainer}>
            <div className={style.login_container}>
              <div className={style.registration}>
                <div className={style.title}>
                  Before you start, you need to create an account
                </div>
                {!props.wrongAuth ? (
                  <div></div>
                ) : (
                  <div className={style.wrongAuth}>
                    Email or username is already registrated
                  </div>
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
                        onInput={(evt) => {
                          if (password.length <= 7) {
                            setPassword(evt.target.value);
                          }
                        }}
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className={style.buttonContainer}>
                    <button
                      onClick={() => {
                        if (password.length === 7) {
                          props.registration({
                            email,
                            username: email.split("@")[0],
                            password,
                          });
                        }
                      }}
                      className={style.button}
                    >
                      Registration
                    </button>
                  </div>
                  <div className={style.link}>
                    <div>Already have an account?</div>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "var(--color-active)" : "black",
                      })}
                      to="/"
                    >
                      <div className={style.linkClick}> Sign-In?</div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
      <div>
        <img className={style.img} src={decoration} alt="" />
      </div>
    </div>
  );
}
export default Authentication;
