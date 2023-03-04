import React from "react";
import "./styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
	return (
		<div className="bCardFooter">
			<a className="bCardFooterIcon" href="https://twitter.com/_mustafatasci" target="__blank"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
			<a className="bCardFooterIcon" href="https://facebook.com/mt1995" target="__blank"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
			<a className="bCardFooterIcon" href="https://instagram.com/_mustafatasci" target="__blank"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
			<a className="bCardFooterIcon" href="https://github.com/MustafaTascii" target="__blank"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
		</div>
	);
}
