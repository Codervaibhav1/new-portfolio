import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xykonolq");

  if (state.succeeded) {
    return (
      <div className="sec ct-sec">
        <h2>✅ Message sent successfully!</h2>
      </div>
    );
  }

  return (
    <>
      <div className="sec ct-sec" id="contact-form">
        <div className="stag">Let's talk</div>

        <div className="stitle">Get in touch</div>

        <div className="ssub">
          Open to full-time roles, freelance projects, and collaborations
        </div>

        <div className="ct-box">
          {/* Left Side */}
          <div className="ct-l">
            <h3>Let's build something great together</h3>

            <p>
              Whether you need a React app, a custom WordPress site, or a
              Shopify store — I'd love to hear about your project. I'll get back
              within 24 hours.
            </p>

            <div className="ct-links">
              {/* Email */}
              <a
                href="mailto:vaibhavknw1@gmail.com"
                className="cl"
                rel="noreferrer"
              >
                📧 vaibhavknw1@gmail.com
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/vaibhav-upadhyay-9489b7219/"
                className="cl"
                target="_blank"
                rel="noreferrer"
              >
                💼 LinkedIn — Vaibhav Upadhyay
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Codervaibhav1"
                className="cl"
                target="_blank"
                rel="noreferrer"
              >
                🐙 GitHub — @vaibhav-upadhyay
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/916264898617"
                className="cl"
                target="_blank"
                rel="noreferrer"
              >
                📱 WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="ct-form">
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="fg">
                <label>Your Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email */}
              <div className="fg">
                <label>Email Address</label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                />

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              {/* Message */}
              <div className="fg">
                <label>Message</label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                ></textarea>

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="fsub mt-3"
                disabled={state.submitting}
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
