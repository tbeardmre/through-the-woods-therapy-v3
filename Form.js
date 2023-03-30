import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    alert("Thankyou for getting connected!")

    emailjs
      .sendForm(
        "service_h7ebk2r",
        "template_9ybvmds",
        form.current,
        "UrJpELOtGMnpj3uiY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <br/>
      <label>Email</label>
      <input type="email" name="user_email" />
      <br/>
      <label>Message</label>
      <textarea name="message" />
      <br/><br/>
      <input type="submit" value="Send" className="submit" />
    </form>
  );
};
