import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedinIn, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
        <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div class="nav-back container-fluid">
                <FontAwesomeIcon className="header-icon" icon={faLaptopCode} />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#portfolio">projects</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#about">about me</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link download" href="#home">Download Resume</a>
                    </li>
                </ul>
                <div className="d-flex">
                    <FontAwesomeIcon className="header-icon" icon={faInstagram} />
                    <FontAwesomeIcon className="header-icon" icon={faGithub} />
                    <FontAwesomeIcon className="header-icon" icon={faLinkedinIn} />
                    <FontAwesomeIcon className="header-icon" icon={faWhatsapp} />

                </div>
                </div>
            </div>
        </nav>
    )
}


export  default Header;