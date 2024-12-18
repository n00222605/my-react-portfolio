import React from "react";
import { Container, Typography, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Grid v2
import ProjectCard from "../../components/ProjectCard"; // Import the ProjectCard component
import { ArrowBack } from "@mui/icons-material"; // Back arrow icon
import { Link } from "react-router-dom";
import "../../styles/projectsIndex.css"; // Import the new CSS file

// Import your JSON data
import projects from "../../data/projects.json";

const Projects = () => {
  return (
    <Container className="projects-container">
      {/* Back Button (only the arrow) */}
      <IconButton
        color="primary"
        component={Link}
        to="/"
        sx={{ marginBottom: "2rem", fontSize: "2rem" }}
      >
        <ArrowBack />
      </IconButton>

      {/* Title */}
      <Typography variant="h4" component="h1" gutterBottom align="center">
        My Projects
      </Typography>

      {/* Flex container for the project cards */}
      <div className="projects-flex-container">
        <Grid container spacing={3} justifyContent="center">
          {projects.map((project, index) => (
            <Grid size={6} key={project.slug} className="project-grid-item">
              <ProjectCard project={project} index={index} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Projects;
