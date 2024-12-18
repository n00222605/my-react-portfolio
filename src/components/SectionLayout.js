import React from "react";
import { Container, Box, Typography, Paper } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import Navbar from "../components/Navbar";  // Import Navbar component
import "../styles/section.css";  // Import the CSS file

const SectionLayout = ({ heading, subHeading, description, image }) => {
    return (
        <Box className="layout-container">
            <Container maxWidth="lg">
                <Paper className="paper-container">
                    {/* Navbar placed at the top right corner */}
                    <Navbar className="navbar-position" /> {/* Adjusts the Navbar position */}

                    {/* Flex container to align the image and content in a row */}
                    <Box className="flex-container">
                        {/* Left Image Section */}
                        <Box className="image-section">
                            <img
                                src={image}
                                alt={heading}
                            />
                        </Box>

                        {/* Right Content Section */}
                        <Box className="content-section">
                            <Typography variant="h3">
                                {heading}
                            </Typography>
                            <Typography variant="subtitle1">
                                {subHeading}
                            </Typography>
                            <Typography variant="body1">
                                {description}
                            </Typography>

                            {/* Social Media Links positioned at the bottom */}
                            <Box className="social-media-links">
                                <Facebook fontSize="large" />
                                <Twitter fontSize="large" />
                                <Instagram fontSize="large" />
                                <LinkedIn fontSize="large" />
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default SectionLayout;
