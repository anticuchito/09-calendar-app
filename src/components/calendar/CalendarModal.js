import React from "react";
import Modal from "react-modal";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";
import { useState } from "react";
import Swal from "sweetalert2";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const nowDate = moment().minutes(0).seconds(0).add(1, "hours");
const laterDate = nowDate.clone().add(1, "hours");

Modal.setAppElement("#root");
export const CalendarModal = () => {
  // set values intials on datestart, dateend and init formulary whith set state 
  const [dateStart, setDateStart] = useState(nowDate.toDate());
  const [dateEnd, setDateEnd] = useState(laterDate.toDate());
  const [titleValid, setTitleValid] = useState(true);
  const [formValues, setFormValues] = useState({
      title: 'evento',
      notes:'',
      start:nowDate.toDate(),
      end:laterDate.toDate()
  });
// desstructuring values on formValues
  const { notes, title, end, start} = formValues;

  const handleInputchange= ({target})=> {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    });
  }

  // fuctions events
  const closeModal = () => {
    // cerrar el modal
  };
  const handleEndChange = (e) => {
    setDateEnd(e);
    setFormValues ({
      ...formValues,
      end:e
    })
  };

  const handleStartChange = (e) => {
    setDateStart(e);
    setFormValues ({
      ...formValues,
      start:e
    })
  };

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    const momentStart = moment(start);
    const momentEnd = moment(end);
    if(momentStart.isSameOrAfter(momentEnd)){
      return Swal.fire('Error', 'la fecha fin debe de ser mayor a la fecha de inicio', 'error')
    }if(title.trim().length <2){
      return  setTitleValid(false);
    }

    //realizar evualacionde bases de datos
    setTitleValid(true);
    closeModal()
    
  }
  return (
    <Modal
      isOpen={true}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      closeTimeoutMS={200}
      style={customStyles}
      className="modal "
      overlayClassName="modal-fondo"
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Fecha y hora inicio</label>
          <DateTimePicker
            className="form-control"
            onChange={handleStartChange}
            value={dateStart}
          />
        </div>

        <div className="form-group">
          <label>Fecha y hora fin</label>
          <DateTimePicker
            className="form-control"
            minDate={dateStart}
            onChange={handleEndChange}
            value={dateEnd}
          />
        </div>

        <hr />
        <div className="form-group">
          <label>Titulo y notas</label>
          <input
            type="text"
            className= {`form-control ${!titleValid && 'is-invalid'}`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={title}
            onChange={handleInputchange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            value={notes}
            onChange={handleInputchange}
            name="notes"
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};