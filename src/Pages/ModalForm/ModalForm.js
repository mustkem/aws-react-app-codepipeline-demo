import React, { useState } from "react";

import "./style.scss";

import InitialFormData from "./add-order-form-config";
import { checkValidity } from "../../helpers/utility";

import InputBox from "../../Components/InputBox";

function ModalForm() {
  const [formData, setFormData] = useState(() => InitialFormData);

  const handleChangeFormField = (event) => {
    const updatedFormData = {
      ...formData,
      [event.target.name]: {
        ...formData[event.target.name],
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          formData[event.target.name].validation
        ),
        touched: true,
      },
    };

    let isFormValid = true;
    for (let name in updatedFormData) {
      isFormValid = updatedFormData[name].valid && isFormValid;
    }
    setFormData(updatedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormData = { ...formData };
    // //touch true //
    Object.keys(newFormData).forEach((key) => {
      formData[key].touched = true;
    });

    setFormData(newFormData);

    let isFormValid = true;
    Object.keys(newFormData).every((key) => {
      isFormValid = isFormValid * formData[key].valid;
      if (!isFormValid) return false;
      else return true;
    });

    if (isFormValid) {
      //call action
    }
  };

  return (
    <div className="home-content main-content">
      <div className="container">
        <h1>Modal Form</h1>
        <div className="modal-form">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="ip-field-wrp">
                <label>First Name</label>
                <InputBox
                  {...formData["f_name"]}
                  onChange={handleChangeFormField}
                  placeholder="Enter"
                />
              </div>
              <div className="ip-field-wrp">
                <label>Mobile Number</label>
                <InputBox
                  {...formData["m_number"]}
                  onChange={handleChangeFormField}
                  placeholder="Enter"
                />
              </div>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalForm;
