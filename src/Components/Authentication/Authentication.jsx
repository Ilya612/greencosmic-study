import style from "./Authentication.module.css";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import CheckEmail from "./CheckEmail";
import decoration from "../../Assets/Decorations/relax.svg";

function Authentication(props) {
  const [username, setUsername] = useState(""); // '' is the initial state value
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={style.container}>
      <div>
        {props.state.isLoading.statusCode === 200 ? (
          <CheckEmail />
        ) : (
          <div className={style.container}>
            <div className={style.customContainer}>
              <div className={style.login_container}>
                <div className={style.registration}>
                  <div className={style.title}>Create your profile</div>
                  <div className={style.input}>
                    <div className={style.inputContainer}>
                      <div className={style.customInput}>
                        <input
                          value={username}
                          onInput={(evt) => setUsername(evt.target.value)}
                          type="text"
                          placeholder="Username"
                        />
                      </div>
                    </div>

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
                          props.registration({
                            email,
                            username,
                            password,
                          });
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
        )}
      </div>
      <div>
        <img className={style.img} src={decoration} alt="" />
      </div>
    </div>
  );
}
export default Authentication;
