import React from "react";
import { Avatar, Box, Button, Card, CardContent, Typography } from "@mui/material";
import ProfileLogo from "../../assets/unnamed.jpg";

const AboutSection = () => {
  return (
    <Card className="rounded-3 overflow-hidden"
      sx={{
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Cover Section */}
      <Box className="d-flex justify-content-center align-items-center text-white"
        sx={{
          height: "100px",
          backgroundColor: "#333",
        }}
      >
        <Typography variant="body1" sx={{ fontSize: "11px", }}>
          LOGIC MAKES WEBSITES SHINE BRIGHTER
        </Typography>
      </Box>
      


      {/* Profile Section */}
      <Box
        sx={{
          position: "relative",
          marginTop: "-40px",
        }}
      >
        <Avatar
          src={ProfileLogo}
          alt="Profile" className="m-auto h-75 w-25"/>
        <Typography variant="h6" className="mt-1 fw-bold text-center">
          Sameer Ahmed
        </Typography>
        <Typography variant="body2" className="text-center">
          Frontend Web Developer || HTML5 || CSS3 || Bootstrap || JavaScript || React.js 
        </Typography>
      </Box>


      {/* Stats Section */}
      <CardContent > <hr />
        <Typography variant="body2" className="my-2">
          <strong>Profile viewers: </strong>
          <span className="text-primary">115</span>
        </Typography>
        <Typography variant="body2">
          <strong>Post impressions: </strong>
          <span className="text-primary">1,153</span>
        </Typography> 
<hr />
        <Typography variant="body2" sx={{ fontSize: "12px", color: "text.secondary", mb: 2 }}>
          Connect with 3.8x more decision-makers
        </Typography>
        <Button
          variant="contained"
          size="small"
          
        >
          Try Sales Nav for PKR0
        </Button>
      </CardContent>


      {/* Saved Items */}
      <CardContent sx={{ padding: "0 16px" }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <hr />
          <strong>📂 Saved items</strong>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AboutSection;
