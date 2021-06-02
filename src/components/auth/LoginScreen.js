import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { startLogin, startRegister } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import "./login.css";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const [formLoginValues, handleLoginInputChange] = useForm({
    lEmail: "fernando@gmail.com",
    lPassword: "123456",
  });
  const [formRegisterValues, handleRegisterInputChange] = useForm({
    Rname: "miguel",
    Remail: "miguel@gmail.com",
    Rpassword1: "1234567",
    Rpassword2: "1234567",
  });

  const { lEmail, lPassword } = formLoginValues;
  const { Rname, Remail, Rpassword1, Rpassword2 } = formRegisterValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(lEmail, lPassword));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (Rpassword1 !== Rpassword2) {
      return Swal.fire("Error", "Password don`t match", "error");
    }
    dispatch(startRegister(Rname, Remail, Rpassword1));
  };

  return (
    <div>
      <div className="container login-container">
        <div className="row">
          <div className="col-md-6 login-form-1">
            <h3>Ingreso</h3>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Correo"
                  name="lEmail"
                  value={lEmail}
                  onChange={handleLoginInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  name="lPassword"
                  value={lPassword}
                  onChange={handleLoginInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  className="btnSubmit"
                  placeholder="Contraseña"
                  name="lPassword"
                  value="Login"
                />
              </div>
            </form>
          </div>

          <div className="col-md-6 login-form-2">
            <h3>Registro</h3>
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  name="Rname"
                  value={Rname}
                  onChange={handleRegisterInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo"
                  name="Remail"
                  value={Remail}
                  onChange={handleRegisterInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  name="Rpassword1"
                  value={Rpassword1}
                  onChange={handleRegisterInputChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Repita la contraseña"
                  name="Rpassword2"
                  value={Rpassword2}
                  onChange={handleRegisterInputChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  className="btnSubmit"
                  value="Crear cuenta"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
