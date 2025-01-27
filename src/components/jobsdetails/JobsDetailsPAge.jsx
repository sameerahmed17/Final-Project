import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
  IconButton,
} from "@mui/material";
import { ListGroup } from "react-bootstrap";
import CloseIcon from "@mui/icons-material/Close";

const JobsDetailsPAge = () => {
  return (
    <>
      {/* Left Section */}
      <Box
        className="my-4 w-100"
        sx={{ maxWidth: "300px" }}
      >
        <Card>
          <CardContent>
            <ListGroup>
              <ListGroup.Item className="d-flex align-items-center">
                <Typography>Preferences</Typography>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center">
                <Typography>My jobs</Typography>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center">
                <Typography>Interview prep</Typography>
              </ListGroup.Item>
            </ListGroup>
            <Divider className="my-3" />
            <Button
              variant="contained"
              className="w-100"
              sx={{ backgroundColor: "#0077b5", color: "white" }}
            >
              Post a free job
            </Button>
          </CardContent>
        </Card>
      </Box>

      {/* Job Picks Section */}
      <Box className="w-100 mb-4" sx={{ maxWidth: "700px" }}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Job picks for you
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className="mb-3"
            >
              Based on your profile, preferences, and activity like applies,
              searches, and saves
            </Typography>
            <ListGroup>
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Senior Backend Developer with Expertise in NLP and Voice AI
                    Systems
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Realbotai ai soft · Multan, Punjab, Pakistan (Remote)
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    Promoted
                  </Typography>
                </Box>
                <IconButton size="small">
                  <CloseIcon fontSize="small" />
                </IconButton>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Frontend Engineer (ReactJS)
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Gaditek · Karachi, Sindh, Pakistan (On-site)
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    Viewed
                  </Typography>
                </Box>
                <IconButton size="small">
                  <CloseIcon fontSize="small" />
                </IconButton>
              </ListGroup.Item>
            </ListGroup>
            <Button
              variant="text"
              className="w-100 text-primary"
              sx={{ textTransform: "none" }}
            >
              Show all →
            </Button>
          </CardContent>
        </Card>
      </Box>

      {/* Recent Job Searches Section */}
      <Box className="w-100" sx={{ maxWidth: "700px" }}>
        <Card>
          <CardContent>
            <Box className="d-flex justify-content-between align-items-center mb-2">
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Recent job searches
              </Typography>
              <Button variant="text" className="text-primary">
                Clear
              </Button>
            </Box>
            <ListGroup>
              <ListGroup.Item>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  student
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Alert On · Lahore, Punjab, Pakistan · On-site · Remote ·
                  Hybrid
                </Typography>
              </ListGroup.Item>
              <ListGroup.Item>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  frontend developer intern
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Pakistan
                </Typography>
              </ListGroup.Item>
            </ListGroup>
          </CardContent>
        </Card>
      </Box>

      {/* Footer Section */}
      <Box
        className="mt-4 text-center"
        sx={{ color: "text.secondary", fontSize: "12px" }}
      >
        <Typography>About · Accessibility · Help Center</Typography>
        <Typography>Privacy & Terms · Ad Choices</Typography>
        <Typography>Advertising · Business Services · Get the LinkedIn app</Typography>
        <Typography>LinkedIn Corporation © 2025</Typography>
      </Box>
   </>
  );
};

export default JobsDetailsPAge;
