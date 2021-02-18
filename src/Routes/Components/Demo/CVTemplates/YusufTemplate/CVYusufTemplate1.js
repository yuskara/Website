import React from "react";
import "../../../../css/CVYusufTemplate1.css";
import Pdf from "react-to-pdf";

const ref = React.createRef();

function CVYusufTemplate1 (){
   
    return(
    <>
      <header id="CVYusufTemp1-div-menu-header">

      {/* <div class="CVYusufTemp1-div-menu-logo-container">
        <img id="header-img" . src="logo.png" alt="logo"">
        <h4 class=" CVYusufTemp1-div-menu-logo">Logo Name</h4>
      </div> */}

      <button class="nav-toggle" aria-label="toggle navigation">
        <span class="hamburger"></span>
      </button>

          <nav id="nav-bar">
            <ul class="CVYusufTemp1-div-menu-nav-links">
              <li><a class="CVYusufTemp1-div-menu-nav-link" href="#">Home</a></li>
              <li><a class="CVYusufTemp1-div-menu-nav-link" href="#">Services</a></li>
              <li><a class="CVYusufTemp1-div-menu-nav-link" href="#">About</a></li>
            </ul>
          </nav>
   </header>

    <div id="CVYusufTemp1-div-main-container">
       <Pdf targetRef={ref} filename="resume.pdf">
        {({ toPdf }) => <button id="cmd" onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
     

    <div class="CVYusufTemp1-div-page" id="toPrint" ref={ref}>
      <header className="CVYusufTemp1-div-header">
        <div className="CVYusufTemp1-div-header-name">
         <h1 class="name">Joey Karate</h1>
        <h3 class="major">Full Stack Developer</h3>
        </div>
        <div className="CVYusufTemp1-div-header-photo" >
          <img src='https://icons-for-free.com/iconfiles/png/512/avatar+person+profile+user+icon-1320086059654790795.png' alt='Profile Picture' />                  
        </div>
      
      </header>
      <section class="CVYusufTemp1-div-contents">
        <section class="CVYusufTemp1-div-main-section">
          <section class="CVYusufTemp1-div-highlights">
          I am full stack developer. I can work with both the front and back ends of a website. I can tackle projects that involve databases, building user-facing websites, or even work with clients during the planning phase of projects.
          </section>
          <section class="experience">
            <div class="CVYusufTemp1-div-section-title">Experience</div>
            <div class="CVYusufTemp1-div-experience-card">
              <div class="title">Senior Developer</div>
              <div class="company">
                <span class="name">Amnick Social Enterprise</span>
                <span class="duration"> Oct 2016 - Nov 2020</span>
              </div>
              <div>
                <ul class='experience-list'>
                  <li>Strong organizational and project management skills. Proficiency with fundamental front end languages such as HTML, CSS and JavaScript. Familiarity with JavaScript frameworks such as Angular JS, React and Amber.</li>
                  <li>Project management skill</li>
                </ul>
              </div>
            </div>

            <div class="CVYusufTemp1-div-experience-card">
              <div class="title">Frontend Developer</div>
              <div class="company">
                <span class="name">BDA company</span>
                <span class="duration">Oct 2013 - Nov 2016</span>
              </div>
              <div>
                <ul class='experience-list'>
                <li>I studied on web page app.</li>
                  <li>I am good at dynamic page.</li>
                </ul>
              </div>
            </div>
          </section>
          <section class="certificates">
            <div class="CVYusufTemp1-div-section-title">Certificates</div>
            <div class="certificate-card">
              <div class="title">Full Stack Development</div>
              <div class="date">Nov 2019</div>
            </div>
            <div class="CVYusufTemp1-div-certificate-card">
              <div class="title">Fundamental of JavaScript</div>
              <div class="date">Nov 2016</div>
            </div>
          </section>
          <section class="education">
            <div class="CVYusufTemp1-div-section-title">Education</div>
            <div class="CVYusufTemp1-div-education-card">
              <div class="title">Degree in Computer Science.   </div>
              <div class="institution">Institution</div>
              <div class="date">2006 - 2013</div>
            </div>
          </section>
        </section>
        <section class="CVYusufTemp1-div-right-section">
          <section class="personal-info">
            <div class="CVYusufTemp1-div-section-title">Personal Info</div>
            <div class="CVYusufTemp1-div-info-item">
              <strong>Title</strong>
              <span class="info">Strong organizational and project management skills.</span>
              <span class="info">Proficiency with fundamental front end languages such as HTML, CSS and JavaScript.</span>
              <span class="info">Familiarity with JavaScript frameworks such as Angular JS, React and Amber.</span>
            </div>
            <div class="CVYusufTemp1-div-info-item">
              <strong>Title</strong>
              <span class="info">Information Line</span>
            </div>
            <div class="CVYusufTemp1-div-info-item">
              <strong>Title</strong>
              <span class="info">Information Line</span>
            </div>
          </section>
          <section class="skills">
            <div class="CVYusufTemp1-div-section-title">Skills</div>
            <div class="CVYusufTemp1-div-skill-card">
              <span>backend</span>
              <div class="CVYusufTemp1-div-skill-level-container">
                <div class="CVYusufTemp1-div-disc fill"></div>
                <div class="CVYusufTemp1-div-disc fill"></div>
                <div class="CVYusufTemp1-div-disc"></div>
                <div class="CVYusufTemp1-div-disc"></div>
                <div class="CVYusufTemp1-div-disc"></div>
              </div>
            </div>
            <div class="CVYusufTemp1-div-skill-card">
              <span>frontend</span>
              <div class="CVYusufTemp1-div-skill-level-container">
                <div class="CVYusufTemp1-div-disc fill"></div>
                <div class="CVYusufTemp1-div-disc fill"></div>
                <div class="CVYusufTemp1-div-disc fill"></div>
                <div class="CVYusufTemp1-div-disc">
                  <div class="CVYusufTemp1-div-half-disc-left"></div>
                </div>
                <div class="CVYusufTemp1-div-disc">
                  <div class="CVYusufTemp1-div-disc concentric-half"></div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  </div>



</>
    )
}
export default CVYusufTemplate1;