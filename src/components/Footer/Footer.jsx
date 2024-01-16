import React, { useState } from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiOutlineMailOpen } from "react-icons/hi";
import {
  AiFillGithub,
  AiFillGitlab,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { BsFacebook, BsSlack } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";

import emailjs from "emailjs-com";

const Footer = () => {
  const [emailData, setEmailData] = useState({
    recipient: "",
    fullName: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your EmailJS service details
    const serviceID = "service_knxh8ln";
    const templateID = "template_1vorssz";
    const userID = "RfogebdZ5GDI5lNJX";
    // Prepare the email template parameters
    const templateParams = {
      to_name: "Yazan Adanouf",
      from_name: emailData.fullName,
      message: emailData.message,
    };
    // Send the email using EmailJS SDK
    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log("Email sent successfully!", response.status, response.text);
      },
      (error) => {
        console.error("Failed to send email:", error);
      }
    );

    // Reset the form fields if needed
    e.target.reset();
  };

  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container id="footer">
      <Profile>
        <Slide direction="left" delay={1}>
          <h1>Portfolio</h1>
        </Slide>
        <div className="address">
          <Slide direction="left">
            <h1>Address:</h1>
          </Slide>
          <Slide direction="left">
            <p>Syria, Damascus</p>
          </Slide>
        </div>
        <div className="links">
          <Slide style={{ padding: "10px" }} direction="left">
            <h1>Contact me directly:</h1>
          </Slide>
          <div style={{ padding: "10px" }}>
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction="left">
              <a href="tel:+963980033496">+963 980 033 496</a>
            </Slide>
          </div>
          <div style={{ padding: "10px" }}>
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide>
              <a href="mailto:yazan.adanouf.m@gmail.com">
                yazan.adanouf.m@gmail.com
              </a>
            </Slide>
          </div>
          <div style={{ padding: "10px" }}>
            <Slide direction="left">
              <span>
                <IoLogoWhatsapp />
              </span>
            </Slide>
            <Slide>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=00963980033496"
              >
                whatsapp: +963 980 033 496
              </a>
            </Slide>
          </div>
        </div>
        <div className="profiles">
          <Slide direction="left">
            <h1>Check my profiles</h1>
          </Slide>
          <div className="icons">
            <Zoom>
              <span>
                <a href="https://github.com/Yazan-496">
                  <AiFillGithub />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="https://gitlab.com/YazanAd">
                  <AiFillGitlab />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="https://www.linkedin.com/in/yazan-adanouf-44888b270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <AiFillLinkedin />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="https://www.facebook.com/profile.php?id=100008858923633">
                  <BsFacebook />
                </a>
              </span>
            </Zoom>
          </div>
        </div>
        <Fade>
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Fade>
      </Profile>
      <Form>
        <Slide direction="right">
          <form onSubmit={handleSubmit}>
            <div className="name">
              <span>
                <CgProfile />
              </span>
              <input
                type="text"
                value={emailData.fullName}
                name="fullName"
                placeholder="Fullname..."
                onChange={handleInputChange}
              />
            </div>
            <div className="email">
              <span>
                <MdAlternateEmail />
              </span>
              <input
                type="email"
                name="recipient"
                value={emailData.recipient}
                placeholder="Email..."
                onChange={handleInputChange}
              />
            </div>
            <div className="message">
              <span className="messageIcon">
                <FiMail />
              </span>
              <textarea
                cols="30"
                name="message"
                rows="10"
                value={emailData.message}
                placeholder="Message..."
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button>Submit</button>
          </form>
        </Slide>
      </Form>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Profile = styled.div`
  flex: 1;
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
    }

    p {
      width: 60%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: lightgray;
        :hover {
          color: orange;
        }
      }
    }
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: orange;
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #01be96;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;
const Form = styled.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      width: 5rem;
      height: 1.8rem;
      background-color: #01be96;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 5px #01be9551);
      cursor: pointer;
      :hover {
        filter: drop-shadow(0px 6px 9px #01be9551);
      }
    }
  }
`;
