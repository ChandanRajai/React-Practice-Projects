import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar-animate"
      />
      <div className="about">
        <h2>About</h2><br/>
        <>
          <article>
            <p>
            I'm Chandan Rajai, a dedicated Web Developer equipped with a Computer Science degree. My skill set encompasses proficiency in CSS, HTML, and JavaScript for both front-end and back-end applications. In pursuit of challenging opportunities, I bring to the table project management, communication, and problem-solving skills.
            </p><br/><br/>
            <h2>Technical Proficiency and Soft Skills Overview</h2><br/>
            <p>
            My hard skills include expertise in React Js, Android, AngularJS, CSS, HTML, JavaScript, Node.js, Express.js, GitHub, JSON, Java, Npm, Redux, Tailwind CSS, UI Design, and WebPack. Complemented by soft skills like decision-making, effective communication, project management, and debugging, I aim to contribute to innovative projects.
            </p><br/><br/>
            <h2>Academic Background</h2><br/>
            <p>
            I pursued my Bachelor of Computer Application at Maharaja Krishnakumarsinhji Bhavnagar University from June 2019 to May 2022. Currently, I am undertaking my Master of Computer Application at Sardar Patel University, with an expected completion in May 2024.
            </p><br/><br/>
            <h2>Project Highlights</h2><br/>
            <p>
            In the realm of project experiences, I've developed a feature-rich ToDo application showcasing proficiency in front-end web development. Another notable project is the Text Analyzer app built with React Js, Tailwind CSS, and JavaScript, demonstrating advanced skills in React.js. Additionally, I've contributed to a responsive eCommerce frontend with modular components, efficient state management, and seamless user interactions using React Js and Redux</p>
          </article>
        </>
      </div>
    </>
  );
};

export default About;
