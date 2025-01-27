import React from "react";
import { Card, CardContent, Typography, Avatar, Box, } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from '../../assets/who-hiring.png'

const GamesSection = () => {
  const games = [
    { title: "Tango", description: "Harmonize the grid", color: "#fbbc05" },
    { title: "Queens", description: "Crown each region", color: "#34a853" },
    { title: "Pinpoint", description: "Guess the category", color: "#4285f4" },
    { title: "Crossclimb", description: "Unlock a trivia ladder", color: "#ea4335" },
  ];

  return (
    <Box sx={{ width: "300px", margin: "0 auto" }}>
      {/* Puzzle Games Section */}
      <Card sx={{ borderRadius: "12px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", marginBottom: 2 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Today's puzzle games
          </Typography>
          {games.map((game, index) => (
            <Box
              key={index}
              className="d-flex justify-content-between align-items-center mb-3"
              sx={{ padding: "8px 0" }}
            >
              <Avatar
                sx={{ backgroundColor: game.color, width: 30, height: 30, marginRight: 2 }}
              ></Avatar>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {game.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {game.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </CardContent>
      </Card>

      {/* Hiring Section */}
      <Box>
          <img className="w-100 rounded-2"
            src={Image1} alt="Hiring" />
      </Box>

      {/* Footer Links */}
      <Box sx={{ textAlign: "center", marginTop: 2 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          className="d-flex flex-wrap justify-content-center gap-2"
          sx={{ fontSize: "12px", lineHeight: 1.5 }}
        >
          {[
            "About",
            "Accessibility",
            "Help Center",
            "Privacy & Terms",
            "Ad Choices",
            "Advertising",
            "Business Services",
            "Get the LinkedIn app",
            "More",
          ].map((link, index) => (
            <span key={index} style={{ cursor: "pointer", color: "#0077b5" }}>
              {link}
            </span>
          ))}
        </Typography>
        <Typography
          variant="caption"
          sx={{ marginTop: 1, display: "block", fontSize: "10px", color: "text.secondary" }}
        >
          LinkedIn Corporation © 2025
        </Typography>
      </Box>
    </Box>
  );
};

export default GamesSection;