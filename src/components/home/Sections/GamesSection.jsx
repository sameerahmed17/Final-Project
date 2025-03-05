import React from "react";
import {  Typography,  Box } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "../../assets/who-hiring.png";
import { Link } from "react-router-dom";

const GamesSection = () => {
  return (
    <>
      {/* Hiring Section */}
      <Box  >
        <img className="w-100 rounded-2" src={Image1} alt="Hiring" />
 
      <Box className="text-center mt-4">
        <Typography
          variant="body2"
          color="text.secondary"
          className="d-flex flex-wrap justify-content-center gap-2"
        >
          <Link>About</Link> <Link>Accessibility</Link> <Link>Help Center</Link>
          <Link>Privacy & Terms</Link> <Link>Ad Choices</Link>
          <Link>Advertising</Link>
          <Link>Business Services</Link> <Link>Get the LinkedIn app</Link>
          <Link>More</Link>
        </Typography>
        <Typography variant="body2" className="mt-4 text-secondary">
          LinkedIn Corporation © 2025
        </Typography>
      </Box>
      </Box>
    </>
  );
};

export default GamesSection;
