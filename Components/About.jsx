import React from 'react';


function About() {
    return (
        
            <div class="container about-section text-center">
                <div class="row align-items-start">
                    <div class="col-sm-12 col-lg-6" data-aos="flip-down">
                    <img className="profile_photo" src="./images/master_pro.jpeg" alt="master_pro"/>
                    </div>
                    <div class="col-sm-12 col-lg-6 text-about"  data-aos="flip-up">
                        <h4>I specialize in fullstack web development</h4>
                        <h1>The bridge between your<br/> ideas and reality</h1>
                        <p>
                            I'm passionate about building stunning, useful websites that <br/>improve user experiences. <br/>
                            I have the abilities to create dynamic websites and web applications that match<br/> your company's needs 
                            thanks to my understanding of HTML, CSS, <br/>JavaScript, bootstrap reactjs framework.
                        </p>
                    </div>
                </div>
            </div> 
        
            )
}

export default About;
