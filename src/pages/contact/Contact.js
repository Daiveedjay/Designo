// Import the Contact component's stylesheet
import "./Contact.scss";

// Import necessary components, data, and hooks
import data from "../../data.json";
import Locations from "../../components/Locations";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Define the Contact component
export default function Contact() {
  gsap.registerPlugin(ScrollTrigger);
  const about = data.aboutPage;
  const { locationData } = about;
  const navigate = useNavigate();

  // Define state variables for form input fields and the popup
  const [popup, setPopup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  // Function to reset the form input fields
  const resetForm = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phoneNumber, message);
    setPopup(true);

    // Navigate back to the home page after 2 seconds
    setTimeout(() => {
      navigate("/");
      setPopup(false);
    }, 2000);

    resetForm();
  };

  const locationRefs = useRef([]);

  useEffect(() => {
    if (locationRefs.current.length !== 0) {
      locationRefs.current.forEach((location) => {
        gsap.fromTo(
          location,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: Power4.easeOut,
            duration: 0.6,
            scrollTrigger: {
              trigger: location,
              start: "center 80%",
            },
          }
        );
      });
    }
  }, []);

  const contactRef = useRef(null);

  useEffect(() => {
    if (contactRef.current) {
      gsap.fromTo(
        contactRef.current,
        { y: "50%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          ease: Power4.easeOut,
          duration: 0.6,
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 100%",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={contactRef} className="contact-section">
      <div className="contact-field section-spacing">
        {/* Contact description */}
        <div className="contact-label__container">
          <h2 className="lead--text">Contact us</h2>
          <p className="medium-text">
            Ready to take it to the next level? Let's talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that's relatable to your
            users, drop us a line.
          </p>
        </div>
        {/* Contact form */}
        <div className="contact-form__container">
          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              <input
                className="contact-input"
                type="text"
                placeholder="Name"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </label>
            <label>
              <input
                className="contact-input"
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>
            <label>
              <input
                className="contact-input"
                type="tel"
                placeholder="Phone Number"
                required
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />
            </label>
            <textarea
              className="contact-input"
              placeholder="Message"
              rows="5"
              required
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
            {/* Submit button */}
            <button className="form-submit">Submit</button>
          </form>
        </div>

        {popup && (
          <div className="contact-pop-up">
            <h2 className="lead--text">
              Your details have been collected succesfully
            </h2>
          </div>
        )}
      </div>
      <section className="locations-section section-spacing">
        {locationData &&
          locationData.location.map((location, index) => (
            <Locations
              location={location}
              key={index}
              ref={(el) => (locationRefs.current[index] = el)}
            />
          ))}
      </section>
    </section>
  );
}
