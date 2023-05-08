import React from "react";
import { Apiurl } from "../services/apirest";
import axios from "axios";
//template
import Header from "../template/Header";

class Nuevo extends React.Component {
  state = {
    form: {
      nomEmp: "",
      apellEmp: "",
      email: "",
      password: "",
      fecNac: "",
      direccEmp: "",
      telefono: "",
      ingreso: "",
      tipoEmpleado: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(Apiurl + "empleado", this.state.form)
      .then((res) => {
        console.log(res);
        alert("Se registro empleado correctamente.");
        window.location.href = "/Dashboard";
        // Aquí puedes redireccionar al usuario a otra página después de registrar el empleado
      })
      .catch((error) => {
        console.log(error);
      });
  };

  manejadorChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  manejadorSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <h3>Editar Empleado</h3>
        </div>
        <div className="container">
          <br />
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label"> NOMBRE</label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    name="nomEmp"
                    placeholder="nomEmp"
                    type="text"
                    value={this.state.form.nomEmp}
                    onChange={this.manejadorChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label"> APELLIDO</label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    name="apellEmp"
                    placeholder="apellEmp"
                    type="text"
                    value={this.state.form.apellEmp}
                    onChange={this.manejadorChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label"> EMAIL</label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    name="email"
                    placeholder="email"
                    type="text"
                    value={this.state.form.email}
                    onChange={this.manejadorChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label">CONTRASEÑA</label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    name="password"
                    placeholder="password"
                    type="password"
                    value={this.state.form.password}
                    onChange={this.manejadorChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label">
                  FECHA DE NACIMIENTO
                </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    name="fecNac"
                    placeholder="fecNac"
                    type="text"
                    value={this.state.form.fecNac}
                    onChange={this.manejadorChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label"> DIRECCIÓN</label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    name="direccEmp"
                    placeholder="direccEmp"
                    type="text"
                    value={this.state.form.direccEmp}
                    onChange={this.manejadorChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label"> TELÉFONO</label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    name="telefono"
                    placeholder="telefono"
                    type="text"
                    value={this.state.form.telefono}
                    onChange={this.manejadorChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label"> INGRESO</label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    name="ingreso"
                    placeholder="ingreso"
                    type="text"
                    value={this.state.form.ingreso}
                    onChange={this.manejadorChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <label className="col-md-2 control-label">
                  TIPO DE EMPLEADO
                </label>
                <div className="col-md-10">
                  <input
                    className="form-control"
                    name="tipoEmpleado"
                    placeholder="tipoEmpleado"
                    type="text"
                    value={this.state.form.tipoEmpleado}
                    onChange={this.manejadorChange}
                  />
                </div>
              </div>
            </div>
            <br></br>
            <button
              type="submit"
              className="btn btn-success"
              style={{ marginRight: "10px" }}
            >
              Registrar
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Nuevo;
