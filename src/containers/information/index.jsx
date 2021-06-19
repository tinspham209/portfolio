import React from "react";
import zaloIcon from "../../assets/img/icon-zalo.png";
import avatar from "../../assets/img/full-nguoi-edit.webp";
import "./styles.css";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <div className="app">
      <img src={avatar} alt="avatar" />
      <h2>Tín Phạm (Tins)</h2>

      <div className="social">
        <Link to="/portfolio">
          <div className="icon">
            <img
              src="https://img.icons8.com/fluent/48/000000/chrome.png"
              alt="website"
            />
          </div>
          <p>Website</p>
          <div className=""></div>
        </Link>
      </div>

      <div className="social">
        <a
          rel="noopener noreferrer"
          target="__blank"
          href="https://github.com/tinspham209"
        >
          <div className="icon">
            <img
              src="https://img.icons8.com/fluent/48/000000/github.png"
              alt="github"
            />
          </div>
          <p>Github</p>
          <div className=""></div>
        </a>
      </div>

      <div className="social">
        <a
          rel="noopener noreferrer"
          target="__blank"
          href="mailto:tinphamvan123@gmail.com"
        >
          <div className="icon">
            <img
              src="https://img.icons8.com/fluent/48/000000/gmail-new.png"
              alt="email"
            />
          </div>
          <p>Email</p>
          <div className=""></div>
        </a>
      </div>

      <div className="social">
        <a rel="noopener noreferrer" target="__blank" href="tel:+84932535175">
          <div className="icon">
            <img
              src="https://img.icons8.com/fluent/48/000000/phone.png"
              alt="phone"
            />
          </div>
          <p>Phone Number</p>
          <div className=""></div>
        </a>
      </div>

      <div className="social">
        <a
          rel="noopener noreferrer"
          target="__blank"
          href="https://www.linkedin.com/in/phamvantins/"
        >
          <div className="icon">
            <img
              src="https://img.icons8.com/color/48/000000/linkedin.png"
              alt="linkedin"
            />
          </div>
          <p>Linkedin</p>
          <div className=""></div>
        </a>
      </div>

      <div className="social">
        <a
          rel="noopener noreferrer"
          target="__blank"
          href="https://www.facebook.com/tinspham.209"
        >
          <div className="icon">
            <img
              src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
              alt="facebook"
            />
          </div>
          <p>Facebook</p>
          <div className=""></div>
        </a>
      </div>

      <div className="social">
        <a
          rel="noopener noreferrer"
          target="__blank"
          href="https://www.instagram.com/phamthitins"
        >
          <div className="icon">
            <img
              src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
              alt="instagram"
            />
          </div>
          <p>Instagram</p>
          <div className=""></div>
        </a>
      </div>

      <div className="social">
        <a
          rel="noopener noreferrer"
          target="__blank"
          href="https://zalo.me/84932535175"
        >
          <div className="icon">
            <img src={zaloIcon} alt="zalo" />
          </div>
          <p>Zalo</p>
          <div className=""></div>
        </a>
      </div>

      <div className="social">
        <a
          rel="noopener noreferrer"
          target="__blank"
          href="https://join.skype.com/invite/nIMfCFEGYbhj"
        >
          <div className="icon">
            <img
              src="https://img.icons8.com/fluent/48/000000/skype.png"
              alt="skype"
            />
          </div>
          <p>Skype</p>
          <div className=""></div>
        </a>
      </div>

      <div className="social">
        <a
          rel="noopener noreferrer"
          target="__blank"
          href="https://www.tiktok.com/@tinspham.209?"
        >
          <div className="icon">
            <img
              src="https://img.icons8.com/fluent/48/000000/tiktok.png"
              alt="tiktok"
            />
          </div>
          <p>Tiktok</p>
          <div className=""></div>
        </a>
      </div>

      <div className="social">
        <a
          rel="noopener noreferrer"
          target="__blank"
          href="https://tinsphamvan.wordpress.com/"
        >
          <div className="icon">
            <img
              src="https://img.icons8.com/color/48/000000/wordpress.png"
              alt="Blog"
            />
          </div>
          <p>Blog</p>
          <div className=""></div>
        </a>
      </div>

      <div className="social">
        <a
          rel="noopener noreferrer"
          target="__blank"
          href="https://nhantien.momo.vn/0932535175"
        >
          <div className="icon">
            <img src="https://developers.momo.vn/images/logo.png" alt="momo" />
          </div>
          <p>Momo</p>
          <div className=""></div>
        </a>
      </div>
    </div>
  );
};

export default Information;
