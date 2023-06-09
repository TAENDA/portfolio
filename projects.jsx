import React from "react";

function Project() {
     return (
      <section class="content-section" id="portfolio">
      <div class="container px-4 px-lg-5">
          <div class="content-section-heading text-center">
              <h3 class="text-secondary mb-0">PORTFOLIO</h3>
              <h2 class="mb-5" data-aos="fade-up" >RECENT PROJECTS</h2>
          </div>
          <div class="row gx-3 gy-3">
              <div class="col-lg-6" data-aos="zoom-in">
                  <a class="portfolio-item" href="#!">
                      <div class="caption">
                          <div class="caption-content">
                              <div class="h2">Stationary</div>
                              <p class="mb-0">A yellow pencil with envelopes on a clean, blue backdrop!</p>
                          </div>
                      </div>
                      <img class="img-fluid" src="images/1.jpg" alt="..." />
                  </a>
              </div>
              <div class="col-lg-6" data-aos="zoom-out">
                  <a class="portfolio-item" href="#!">
                      <div class="caption">
                          <div class="caption-content">
                              <div class="h2">Ice Cream</div>
                              <p class="mb-0">A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</p>
                          </div>
                      </div>
                      <img class="img-fluid" src="images/2.jpg" alt="..." />
                  </a>
              </div>
              <div class="col-lg-6" data-aos="zoom-in">
                  <a class="portfolio-item" href="#!">
                      <div class="caption">
                          <div class="caption-content">
                              <div class="h2">Strawberries</div>
                              <p class="mb-0">Strawberries are such a tasty snack, especially with a little sugar on top!</p>
                          </div>
                      </div>
                      <img class="img-fluid" src="images/3.jpg" alt="..." />
                  </a>
              </div>
              <div class="col-lg-6">
                  <a class="portfolio-item" href="#!">
                      <div class="caption">
                          <div class="caption-content">
                              <div class="h2">Workspace</div>
                              <p class="mb-0">A yellow workspace with some scissors, pencils, and other objects.</p>
                          </div>
                      </div>
                      <img class="img-fluid" src="images/5.jpg" alt="..." />
                  </a>
              </div>
          </div>
      </div>
  </section>
  )
}


export default Project;