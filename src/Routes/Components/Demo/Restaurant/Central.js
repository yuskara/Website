import React from "react";
import '../../../css/ResCentral.css';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Central() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 150, friction: 20 },
  }));

  return (
    <animated.div
      class="restaurant_home_center"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <h1 className="res_title_h1">WELCOME</h1>
      <p className="res_paragraph_p">
        Dear guests, you are welcomed to dine with us at good food rastaurant we
        will serve you with the mouth watering dishes. Have a pleasant dining
        experience.
      </p>
      <div className="res_sup_icon">
        <sup>&darr;</sup>
      </div>

      <a href="#" className="res_button">
        <span className="res_span">Book Now</span>
      </a>
    </animated.div>
  );
}

export default Central;