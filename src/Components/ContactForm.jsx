import React from "react";
const ContactForm = ({ handleChange, details }) => {
  return (
    <form className="contact-form__form">
      <label className="label label-firstname">
        First Name:
        <input
          className="input-fields"
          type="text"
          name="firstname"
          value={details.firstname}
          onChange={handleChange}
          placeholder="first name"
        />
      </label>
      <label className="label label-lastname">
        Last Name:
        <input
          type="text"
          className="input-fields"
          name="lastname"
          value={details.lastname}
          onChange={handleChange}
          placeholder="last name"
        />
      </label>
      <label className="label label-age">
        Age:
        <input
          type="number"
          className="input-fields"
          name="age"
          value={details.age}
          onChange={handleChange}
          placeholder="0"
        />
      </label>
      <label className="label label-email">
        Email:
        <input
          type="email"
          className="input-fields"
          name="email"
          value={details.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </label>
    </form>
  );
};

export default ContactForm;
