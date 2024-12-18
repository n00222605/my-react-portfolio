import React from "react";
import SectionLayout from "../components/SectionLayout";
import leftImage from "../images/crcu.jpg";

const Home = () => {
    return (
        <SectionLayout
            heading="Home"
            subHeading="WELCOME TO MY WEBSITE"
            description="Here, you can learn more about me, explore my projects, and see the technologies I work with. Feel free to browse my work, and if you'd like to explore more, you can also find a link to my GitHub to view all of my React projects and repositories."
            image={leftImage}
        />
    );
};

export default Home;
