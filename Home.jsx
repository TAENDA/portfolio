import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";




function Home() {
    useEffect(()=> {
        AOS.init({duration: 2500});
      }, []);
      
    return (
    <div class="container text-center home" id="home">
        <div class="row align-items-start"> 
            <div class="col" data-aos="zoom-in-down">
            <div class="developer">
                <h1>
                    hi! i'm Tatenda
                    <br/>
                    a fullstack <span>developer</span>
                </h1>
                <p><span class="badge bg-secondary">i breathe life into ideas</span></p>
                <button href="#shell" >Contact Me!</button>
            </div>
            </div>
            <div class="col"  data-aos="zoom-in-up">
                <div class="rotating-container">
                   <img class="profile_photo" src="/images/4t.jpeg" alt="profile_photo"/>
                   <img class="icon i1" src="/images/java-script-logo.png" alt="#"/>   
                   <img class="icon i2" src="/images/react.png" alt="#"/>   
                   <img class="icon i3" src="/images/visual-basic.png" alt="#"/>   
                   <img class="icon i4" src="/images/bootstrap.png" alt="#"/>   
                   <img class="icon i5" src="/images/css-3.png" alt="#"/>   
                   <img class="icon i6" src="/images/database-storage.png" alt="#"/>                  
                </div>
                
            </div>
        </div>
    </div>
    )
}

export default Home;