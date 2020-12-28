import React from 'react';
import '../css/style.css';


function Central() {
  return (
    <div>
      {/* <!-- Main page --> */}
      <div class="welcome-content">
        <h1>WelCome to the StartUP Team</h1>
        <hr></hr>
        <p>For all your profession web designing and development</p>
      </div>

      {/* <!--  --> */}
      <div id="container">
        <div class="grid-boxes">

          <div class="grid-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAX8mMzrPY6fvqdLsC_QNLaakpUx22CnN6cA&usqp=CAU" alt="" class="w-100"></img>
            <h4 class="my-4">Amazing. Incredible</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum expedita est asperiores at nobis eligendi corporis repellendus natus distinctio!</p>
            <a href="#" class="btn">Our Innovation</a>
          </div>

          <div class="grid-box">
            <img src="https://d1t2cyxhsn73kx.cloudfront.net/image/article/teamwork.jpg" alt="" class="w-100"></img>
            <h4 class="my-4">Incredible how we work</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum expedita est asperiores at nobis eligendi corporis repellendus natus distinctio!</p>
            <a href="#" class="btn">Our Story</a>
          </div>

          <div class="grid-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgDlvgZ2dp9P70KYHluP4qPHdKdeI_0nsXHg&usqp=CAU" alt="" class="w-100"></img>
            <h4 class="my-4">Incredible Vision</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum expedita est asperiores at nobis eligendi corporis repellendus natus distinctio!</p>
            <a href="#" class="btn">Our Vision</a>
          </div>

        </div>
      </div>
      
      {/* <!-- Info div --> */}
      <div class="info">
        <img src="https://image.shutterstock.com/image-illustration/2d-illustration-imaginary-dreamlike-motivational-260nw-1199438935.jpg" alt="" class="info-img"></img>
        <div>
          <h2>Your Business On The Web</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae alias reiciendis deleniti possimus nemo non repellendus?
            Quae atque vero modi quidem! Autem cupiditate fugit doloribus ad amet, asperiores provident commodi.</p>
          <a href="#" class="btn">Learn More</a>
        </div>
      </div>

      <div class="visit-info">
        <div >
          <h1>We are expecting your visit</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nulla, necessitatibus eveniet unde ipsa nemo qui odit, inventore magnam voluptas porro reprehenderit.</p>
          <a href="#" target="blank" class="btn">From our Agent</a>
        </div>
        <img src="https://swaddle-wkwcb6s.stackpathdns.com/wp-content/uploads/2018/08/imaginary-world.jpg" alt="" class="visit-info-img"></img>
      </div>

      {/* <!-- port --> */}
      <div class="port">
        <h1>portfolio</h1>
        <hr></hr>
      </div>

      {/* <!-- Boxes div --> */}
      <div class="boxes">
        <div class="box">
          <img src="https://cdn.mos.cms.futurecdn.net/jgXYNK8U4o4itGBBMRtCKa-1200-80.jpg" alt="" width="350px" height="200px"></img>
          <h3>Analytics</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
        </div>
        <div class="box">
          <img src="https://timesbusinessworld.com/wp-content/uploads/2019/09/Business-Marketing0.jpg" alt="" width="350px" height="200px"></img>
          <h3>Marketing</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
        </div>

        <div class="box">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfT5VH2ZnqIk34Szx0sKBwgTJef9bAYuOog&usqp=CAU" alt="" width="350px" height="200px"></img>
          <h3>Development</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. !</p>
        </div>

        <div class="box">
          <img src="https://www.practicalparenting.com.au/media/12522/01_03_19-pitbull-landscape.jpg" alt="" width="350px" height="200px"></img>
          <h3>Support</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
        </div>
      </div>

      {/* <!-- Start Fixed Background --> */}
      <div class="portfolio">
        <img src="https://source.unsplash.com/random/200x200" alt=""></img>
        <img src="https://source.unsplash.com/random/201x200" alt=""></img>
        <img src="https://source.unsplash.com/random/202x200" alt=""></img>
        <img src="https://source.unsplash.com/random/203x200" alt=""></img>
        <img src="https://source.unsplash.com/random/204x200" alt=""></img>
        <img src="https://source.unsplash.com/random/205x200" alt=""></img>
        <img src="https://source.unsplash.com/random/206x200" alt=""></img>
        <img src="https://source.unsplash.com/random/207x200" alt=""></img>
        <img src="https://source.unsplash.com/random/208x200" alt=""></img>
        <img src="https://source.unsplash.com/random/209x200" alt=""></img>
      </div>

      <div class="advance">
        <h1>Advance to the next level</h1>
        <hr></hr>
        <h3>...See what's on the other side</h3>
      </div>

      {/* <!-- jumbotron --> */}
      <div class="row">
        <h4>Looking for quality web Design and development Services?</h4>
        <a href="#" class="btn">Contact Us Today</a>
      </div>
      
    </div>
  );
}

export default Central;