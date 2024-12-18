import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, CardActions, Button, Chip, Stack } from "@mui/material";
import "../styles/projectCard.css"; // Import custom styles

const ProjectCard = ({ project, index }) => {
    return (
        <Card key={index} className="project-card" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            {/* Content */}
            <CardContent sx={{ flex: 1 }}>
                {/* Title */}
                <Typography gutterBottom variant="h6" component="div" className="project-title">
                        {project.title}
                </Typography>

                {/* Technologies */}
                <Typography variant="body2" color="text.secondary" className="project-tech-label">
                    <b>Technologies:</b>
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" className="project-tech-stack">
                    {project.technologies.map((tech, idx) => (
                        <Chip key={idx} label={tech} variant="outlined" size="small" className="project-chip" />
                    ))}
                </Stack>
            </CardContent>

            {/* Actions */}
            <CardActions sx={{ marginTop: 'auto' }}>
                <Button size="small" component={Link} to={`/projects/${project.slug}`} className="project-button">
                    View Project
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProjectCard;
