import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/form.scss";

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dtum1os', 'template_cw5fwpu', form.current, 'N_Zr3-MstplYQvElG')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='formContainer'>
    <form ref={form} onSubmit={sendEmail}>
    <div className="inputArea">
      <label>Name</label>    
      <input type="text" name="user_name" />
      </div>
     <div className="inputArea">
      <label>Email</label>
      <input type="email" name="user_email" />
      </div> 
     <div className="inputArea test">
      <label>Message</label>
      <textarea name="message" />
      </div>  
      <input type="submit" value="Send" />
    </form>
    </div>
  );
};
export default Form;