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
    <div className="formContainer">
      
      <form ref={form} onSubmit={sendEmail}>
      <h2>Contact Me</h2>
        <input type="text" name="user_name" />
        <input type="email" name="user_email" />

        <textarea name="message" cols="30" />

        <input className="contactBtn" type="submit" value="Send" />
      </form>
    </div>
  );
};
export default Form;
