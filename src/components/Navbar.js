import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import "../styles/navbar.css";  // Import the CSS file

const Navbar = () => {
  return (
    <Box className="navbar">
      {/* Logo Section */}
      <Typography variant="h6" component="div" className="logo">
        Creative Computing
      </Typography>

      {/* Navigation Links */}
      <Box className="nav-links">
        <Button component={Link} to="/" className="nav-link">
          Home
        </Button>
        <Button component={Link} to="/about" className="nav-link">
          About
        </Button>
        <Button component={Link} to="/contact" className="nav-link">
          Contact
        </Button>
        <Button component={Link} to="/projects" className="nav-link">
          Projects
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
