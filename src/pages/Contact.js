import React from "react";
import SectionLayout from "../components/SectionLayout";
import leftImage from "../images/crcu.jpg";

const Contact = () => {
    return (
        <SectionLayout
            heading="Contact"
            subHeading="LET'S CONNECT"
            description="Feel free to reach out if you have any questions, inquiries, or just want to connect! You can contact me at kaden@email.com or reach me through my college email at n00222605@iadt.ie. I'm always open to collaborating on new projects or discussing opportunities. Don't hesitate to send me a message – I look forward to hearing from you!"
            image={leftImage}
        />
    );
};

export default Contact;