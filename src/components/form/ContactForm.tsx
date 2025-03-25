"use client";
import React, { useState } from "react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setIsSubmitting(true);
      
      // Here you would typically send data to your API
      console.log("Form data:", data);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show a success toast
      toast.success("Message sent successfully! We'll contact you shortly.");
      
      // Reset the form to default values
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`rv-2-contact__form ${
        innerPage ? "rv-inner-contact__form" : ""
      }`}
    >
      <div className="row">
        <div className="col-sm-6 mb-3">
          <input
            type="text"
            id="rv-2-contact-name"
            placeholder="Name*"
            className={errors.name ? "is-invalid" : ""}
            {...register("name", { 
              required: "Name is required",
              minLength: { value: 2, message: "Name must be at least 2 characters" }
            })}
          />
          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
        </div>
        <div className="col-sm-6 mb-3">
          <input
            type="email"
            id="rv-2-contact-email"
            placeholder="Email*"
            className={errors.email ? "is-invalid" : ""}
            {...register("email", { 
              required: "Email is required",
              pattern: { 
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                message: "Invalid email address" 
              }
            })}
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>
        <div className="col-sm-6 mb-3">
          <input
            type="tel"
            id="rv-2-contact-phone"
            placeholder="Phone"
            className={errors.phone ? "is-invalid" : ""}
            {...register("phone", { 
              pattern: { 
                value: /^[0-9\s\(\)\-\+]{7,15}$/, 
                message: "Invalid phone number" 
              }
            })}
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
        </div>
        <div className="col-sm-6 mb-3">
          <input
            type="text"
            id="rv-2-contact-subject"
            placeholder="Subject*"
            className={errors.subject ? "is-invalid" : ""}
            {...register("subject", { 
              required: "Subject is required" 
            })}
          />
          {errors.subject && <div className="invalid-feedback">{errors.subject.message}</div>}
        </div>
        <div className="col-12 mb-3">
          <select 
            id="rv-2-contact-service" 
            className={errors.service ? "is-invalid" : ""}
            {...register("service")}
          >
            <option value="" hidden>
              Services
            </option>
            <option value="AI Solutions">AI Solutions</option>
            <option value="Data Engineering">Data Engineering</option>
            <option value="Cloud Services">Cloud Services</option>
            <option value="AI Development">AI Development</option>
            <option value="Process Automation">Process Automation</option>
            <option value="Deep Learning">Deep Learning</option>
            <option value="IoT Solutions">IoT Solutions</option>
            <option value="Other Services">Other Services</option>
          </select>
          {errors.service && <div className="invalid-feedback">{errors.service.message}</div>}
        </div>
        <div className="col-12 mb-3">
          <textarea
            id="rv-2-contact-message"
            placeholder="Message*"
            className={errors.msg ? "is-invalid" : ""}
            {...register("msg", { 
              required: "Message is required",
              minLength: { value: 10, message: "Message must be at least 10 characters" }
            })}
          ></textarea>
          {errors.msg && <div className="invalid-feedback">{errors.msg.message}</div>}
        </div>
        <div className="col-12">
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
