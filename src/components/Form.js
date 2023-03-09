import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/form.scss";

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dtum1os",
        "template_cw5fwpu",
        form.current,
        "N_Zr3-MstplYQvElG"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div class="contact-container">
      <div className="formContainer">
        <form ref={form} onSubmit={sendEmail}>
          <h2>Contact Me</h2>
          <input
            type="text"
            name="user_name"
            tabIndex="1"
            placeholder="name*"
            required
          />
          <input
            type="email"
            name="user_email"
            tabIndex="2"
            placeholder="email*"
            required
          />

          <textarea
            className="textForm"
            name="message"
            cols="60"
            tabIndex="3"
            placeholder="message*"
            required
          />

          <input
            className="contactBtn"
            type="submit"
            value="Send"
            tabIndex="4"
          />
        </form>
      </div>
    </div>
  );
};
export default Form;
