import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
  faGithubAlt,
  faGithubSquare
} from "@fortawesome/free-brands-svg-icons";

export default function Connect() {
  return (
    <div className="social-container">
      <h3>Connect with me:</h3>
      <a
        href = "https://www.youtube.com/user/dardcore/videos?view_as=subscriber"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a
        href = "https://www.facebook.com/profile.php?id=3228993"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/shrines_music" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href = "https://www.instagram.com/deek.da.sneak/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>


      <a
        href = "https://www.linkedin.com/in/derrekgass/"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>


      <a
        href = "https://www.linkedin.com/in/derrekgass/"
        className="github social"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

    </div>
  );
}
