import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBusinessTime, faMicrochip, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function Work() {

    return (
            <div className="my-passion">
                <div class="card" data-aos="fade-right">
                    <span>
                        <img src="../images/svg_red.png" class="card-img-top svg_passion" alt="redSvg" />
                        <FontAwesomeIcon className="svg_icon" icon={faThumbsUp} />
                    </span>
                    <div class="card-body">
                        <h2 class="card-title">Passionate</h2>
                        <p class="card-text">My passion lies in developing responsive,<br/>user-friendly and <br/>visually appealing websites and applications</p>
                    </div>
                </div>
                <div class="card" data-aos="flip-up">
                    <span>  
                        <img src="../images/svg_green.png" class="card-img-top svg_passion" alt="greenSvg" />
                        <FontAwesomeIcon className="svg_icon" icon={faMicrochip} />
                    </span>
                    <div class="card-body">
                        <h2 class="card-title">Dedicated</h2>
                        <p class="card-text">To staying up-to-date with the latest<br/> technologies,
                        and continuously seeking <br/>opportunities to enhance skills and knowledge.</p>
                    </div>
                </div>
                <div class="card" data-aos="fade-left" >
                    <span>
                        <img src="../images/svg_purple.png" class="card-img-top svg_passion" alt="purpleSvg" />
                        <FontAwesomeIcon className="svg_icon" icon={faBusinessTime} />
                    </span>
                    <div class="card-body">
                        <h2 class="card-title">Time Management</h2>
                        <p class="card-text">I posses the ability to work with designers,<br/>
                        project managers and other <br/>developers to deliver projects on time </p>
                    </div>
                </div>
            </div>
     
    )
}

export default Work;