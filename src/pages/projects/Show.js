import React, { useEffect, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import projectsJSON from "../../data/projects.json";
import { Container, Box, Typography, Paper, Button, Stack, Chip } from "@mui/material";
import { ArrowBack } from "@mui/icons-material"; // Back arrow icon
import "../../styles/projectsShow.css"; // Import the CSS file

const Show = () => {
  const [project, setProject] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const found = projectsJSON.find((p) => p.slug === slug);
    setProject(found);
  }, [slug]);

  if (project === null) return <h2>Loading...</h2>;
  if (project === undefined) return <Navigate to={`/projects`} />;

  return (
    <Box className="layout-container">
      <Container maxWidth="lg">
        <Paper className="paper-container">
          {/* Back Button */}
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/projects"
            startIcon={<ArrowBack />}
            sx={{ marginBottom: "2rem", fontSize: "2rem" }}
          >
            {/* Only the arrow icon will appear */}
          </Button>

          {/* Title */}
          <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ color: "#fff" }}>
            {project.title}
          </Typography>

          {/* Content Layout (Image + Content) */}
          <Box className="flex-container">
            {/* Left Image Section */}
            <Box className="image-section">
              <img
                src={project.images?.[0]?.url || "./images/ccImage.jpg"}
                alt={project.title}
                className="show-image"
              />
            </Box>

            {/* Right Content Section */}
            <Box className="content-section">
              <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
                {project.title}
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ marginBottom: "1rem" }}>
                {project.description}
              </Typography>

              <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginTop: "1rem" }}>
                Technologies:
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ marginTop: "0.5rem" }}>
                {project.technologies.map((tech, idx) => (
                  <Chip key={idx} label={tech} variant="outlined" size="small" />
                ))}
              </Stack>

              <Button
                variant="contained"
                color="primary"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ marginTop: "1rem" }}
              >
                View on GitHub
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Show;
