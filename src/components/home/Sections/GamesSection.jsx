import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "../../assets/who-hiring.png";
import { Link } from "react-router-dom";

const GamesSection = () => {
  return (
    <Box>
      <Card className="mb-3">
        <CardContent>
          <Typography variant="h6" className="fw-bold">
            Today's puzzle games
          </Typography>
          <Box className="d-flex align-items-center my-4">
            <Avatar
              sx={{
                width: 30,
                height: 30,
                marginRight: 2,
                backgroundColor: "#fbbc05",
              }}
            />
            <Box>
              <Typography variant="body2" className="fw-bold">
                Tango
              </Typography>
              <Typography variant="body2">Harmonize the grid</Typography>
            </Box>
          </Box>
          <Box className="d-flex align-items-center">
            <Avatar
              sx={{
                width: 30,
                height: 30,
                marginRight: 2,
                backgroundColor: "#34a853",
              }}
            />
            <Box>
              <Typography variant="body2" className="fw-bold">
                Queens
              </Typography>
              <Typography variant="body2">Crown each region</Typography>
            </Box>
          </Box>
          <Box className="d-flex align-items-center my-4">
            <Avatar
              sx={{
                width: 30,
                height: 30,
                marginRight: 2,
                backgroundColor: "#4285f4",
              }}
            />
            <Box>
              <Typography variant="body2" className="fw-bold">
                Pinpoint
              </Typography>
              <Typography variant="body2">Guess the category</Typography>
            </Box>
          </Box>
          <Box className="d-flex align-items-center">
            <Avatar
              sx={{
                width: 30,
                height: 30,
                marginRight: 2,
                backgroundColor: "#ea4335",
              }}
            />
            <Box>
              <Typography variant="body2" className="fw-bold">
                Crossclimb
              </Typography>
              <Typography variant="body2">Unlock a trivia ladder</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
      {/* Hiring Section */}
      <Box  style={{ position: "sticky", top: "0", height: "100vh" }}>
        <img className="w-100 rounded-2" src={Image1} alt="Hiring" />
 
      <Box className="text-center mt-4">
        <Typography
          variant="body2"
          color="text.secondary"
          className="d-flex flex-wrap justify-content-center gap-2"
        >
          <Link>About</Link> <Link>Accessibility</Link> <Link>Help Center</Link>
          <Link>Privacy & Terms</Link> <Link>Ad Choices</Link>{" "}
          <Link>Advertising</Link>
          <Link>Business Services</Link> <Link>Get the LinkedIn app</Link>{" "}
          <Link>More</Link>
        </Typography>
        <Typography variant="body2" className="mt-4 text-secondary">
          LinkedIn Corporation © 2025
        </Typography>
      </Box>
      </Box>
    </Box>
  );
};

export default GamesSection;
