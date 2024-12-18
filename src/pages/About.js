import React from "react";
import SectionLayout from "../components/SectionLayout";
import leftImage from "../images/crcu.jpg";

const About = () => {
  return (
    <SectionLayout
      heading="About Me"
      subHeading="Kaden Armstrong - Creative Computing"
      description="My name is Kaden Armstrong, and I am currently studying Creative Computing at IADT, Dun Laoghaire. Throughout my studies, I have developed a strong interest in front-end development and user experience (UX) design, where I enjoy blending creativity with technical problem-solving. I enjoy creating intuitive and visually appealing designs that are both functional and engaging. As a budding developer, I am constantly exploring new technologies and design trends, striving to improve my skills and stay up-to-date with industry advancements. Whether it's designing sleek user interfaces or coding interactive web applications, I love the challenge of bringing ideas to life in a way that resonates with users. In addition to my studies, I actively engage in personal projects and collaborations to further develop my craft and expand my understanding of the digital landscape."
      image={leftImage}
    />
  );
};

export default About;
