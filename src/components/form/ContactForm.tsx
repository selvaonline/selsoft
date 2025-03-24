"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
type Inputs = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  service: string;
  msg: string;
};
type Props = {
  innerPage?: boolean;
};
const ContactForm = ({ innerPage }: Props) => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Perform any additional actions before or after submitting data
    console.log(data);

    // Show a success toast
    toast.success("Contact info submitted successfully!");

    // Reset the form to default values
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`rv-2-contact__form ${
        innerPage ? "rv-inner-contact__form" : ""
      }`}
    >
      <div className="row">
        <div className="col-sm-6">
          <input
            type="text"
            id="rv-2-contact-name"
            placeholder="Name*"
            required
            {...register("name")}
          />
        </div>
        <div className="col-sm-6">
          <input
            type="email"
            id="rv-2-contact-email"
            placeholder="Email*"
            required
            {...register("email")}
          />
        </div>
        <div className="col-sm-6">
          <input
            type="tel"
            id="rv-2-contact-phone"
            placeholder="Phone"
            {...register("phone")}
          />
        </div>
        <div className="col-sm-6">
          <input
            type="text"
            id="rv-2-contact-subject"
            placeholder="Subject*"
            required
            {...register("subject")}
          />
        </div>
        <div className="col-12">
          <select id="rv-2-contact-service" {...register("service")}>
            <option value="" hidden>
              Services
            </option>
            <option value="UI/UX Solutions">UI/UX Solutions</option>
            <option value="Big Data">Big Data</option>
            <option value="HTML5 / CSS3">HTML5 / CSS3</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="CMS">CMS</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="col-12">
          <textarea
            id="rv-2-contact-message"
            placeholder="Message*"
            required
            {...register("msg")}
          ></textarea>
        </div>
        <div className="col-12">
          <button type="submit">Submit Comment</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
