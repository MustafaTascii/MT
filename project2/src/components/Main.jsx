import React from "react";
import "./styles/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const LinkStyle = {
    color: "var(--white)",
    fontSize: "1.24rem",
    fontWeight: 400,
    lineHeight: "15px",
    cursor: "pointer"
};


export default function Header() {
    return (
        <div className="bCardBody">
            <div className="bCardPinfo">
                <h1 className="bCardName"> Mustafa Taşçı </h1>
                <h3 className="bCardTitle"> Import Specialist & Frontend Developer</h3>
                <a style={LinkStyle} href="mustafatasci.com" target="_blank">mustafatasci.com</a>
            </div>

            <div className="bCardBtnAll">
                <a href="mailto:mustafatasci1304@gmail.com" target="_blank"> <button className="bCardEmailBtn bCardBtn"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>Email</button></a>
                <a href="https://www.linkedin.com/in/mustafa-taşçı/" target="_blank"><button className="bCardLinkedInBtn bCardBtn"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> LinkedIn</button></a>
            </div>
            <div className="bCardTextAll">
                <h3 className="bCardTextAbout">About</h3>
                <div>
                    <p className="bCardText"> I am an Import Application Specialist at Alarko Carrier, which is a major heating & cooling products manufacturer in Kocaeli, Turkey.  Also, I am currently learning blockchain systems and software in a Blockchain software boot camp and mostly focus on the FrontEnd side of it and am always looking for new things to learn.</p></div>
                <div>
                    <h3 className="bCardTextInterests"> Interests</h3>
                    <p className="bCardText">  Supply Chain | Stocks and Cryptocurrencies | AI, Software and Blockchain Enthusiast | Basketballer | Flower Lover | Coin Collector </p>

                </div>
            </div>

        </div>
    )
}
