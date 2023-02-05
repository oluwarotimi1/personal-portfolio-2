import React from "react";
import { Container } from "react-bootstrap";
import css from "./bookasession.module.css";
import "./bookasession.css";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import logo from "../../assets/sound_logo.png";
import { Link } from "react-router-dom";

const BookASession = () => {
  // const [errors, setErrors] = useState("")
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    swal({
      title: "Message Sent",
      text: "A Reply Will Be Sent To Your Email Shortly, Thanks!",
      icon: "success",
      button: "Return",
    });
    console.log(data);
  };
  return (
    <>
      <Link to="/">
        <div className="header_section">
          <img src={logo} alt="" width="80" height="80" />
          <span>SoundTechWorks</span>
        </div>
      </Link>

      <Container>
        <div className="container">
          <div className="contact-box">
            <div className="left"></div>
            <div className="right">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Contact Us</h2>
                <input
                  type="text"
                  className="field"
                  placeholder="Your Name"
                  {...register("firstName", { required: true })}
                  aria-invalid={errors.firstName ? "true" : "false"}
                />

                {errors.firstName?.type === "required" && (
                  <p role="alert">First name is required</p>
                )}

                <input
                  type="text"
                  className="field"
                  placeholder="Your Email"
                  {...register("mail", {
                    required: "Email Address is required",
                  })}
                  aria-invalid={errors.mail ? "true" : "false"}
                />

                {errors.mail && <p role="alert">{errors.mail?.message}</p>}
                <input
                  className="field"
                  placeholder="Phone"
                  type="text"
                  {...register("phoneNumber", {
                    required: "Please input phone number",
                  })}
                />
                {errors.phoneNumber && (
                  <p role="alert">{errors.phoneNumber?.message}</p>
                )}
                <textarea placeholder="Message" className="field"></textarea>
                <button className="btn" onClick={handleSubmit}>
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BookASession;
