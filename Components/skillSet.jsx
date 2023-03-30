import React from "react";

function Skills() {

    return (
      <div>
          <h3 className="text-center" data-oas="fade-right">SELF DEVELOPED SKILLS</h3>
          <div class="skills-box-body" >
              <div class="skill-inner" data-oas="fade-up">
                <div class="box">
                  <div class="percent">
                    <svg className="skills-svg">
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div class="number">
                      <h2>95<span>%</span></h2>
                    </div>
                  </div>
                  <h2 class="text">Html & CSS</h2>
                </div>
              </div>
              <div class="skill-inner" data-oas="fade-down">
                <div class="box">
                  <div class="percent">
                    <svg className="skills-svg">
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div class="number">
                      <h2>75<span>%</span></h2>
                    </div>
                  </div>
                  <h2 class="text">Javascript</h2>
                </div>
              </div>
              <div class="skill-inner " data-oas="fade-up">
                <div class="box">
                  <div class="percent">
                    <svg className="skills-svg">
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div class="number">
                      <h2>77<span>%</span></h2>
                    </div>
                  </div>
                  <h2 class="text">reactJs</h2>
                </div>
              </div>
              <div class="skill-inner" data-oas="fade-up">
                <div class="box">
                  <div class="percent">
                    <svg className="skills-svg">
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div class="number">
                      <h2>69<span>%</span></h2>
                    </div>
                  </div>
                  <h2 class="text">nodejs & expressJs</h2>
                </div>
              </div>
              </div>
              <h3 className="text-center" data-oas="fade-up">GET IN TOUCH WITH ME</h3>
    </div>
    )
}

export default Skills;