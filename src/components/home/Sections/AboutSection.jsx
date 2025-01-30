import React from "react";
import { Avatar, Box, Card, Typography } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ProfileLogo from "../../assets/unnamed.jpg";
import BgCover from '../../assets/Banner.png'

const AboutSection = () => {
  return (
    <>
        <Card
      className="rounded-3 overflow-hidden"
      sx={{
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
      }}
    >
    
      <Box
          sx={{
            height: "100px",
            backgroundColor: "#ddd",
            backgroundImage: `url(${BgCover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>
        
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "16px 0",
            marginTop: "-50px",
          }}
        >

        <Avatar src={ProfileLogo} alt="Profile" className="m-auto h-75 w-25" />
        <Typography variant="h6" className="mt-1 fw-bold text-center">
          Sameer Ahmed
        </Typography>
        <Typography variant="body2" className="text-center px-3">
          Frontend Web Developer || HTML5 || CSS3 || Bootstrap || JavaScript ||
          React.js || Next.js
        </Typography>
      </Box>
      <hr />
      <Card>
        <Box className="ps-3">
          <Typography variant="body2" className="mb-2 fw-bold">
            Profile viewers:
            <span className="text-primary">115</span>
          </Typography>
          <Typography variant="body2" className="fw-bold">
            Post impressions:
            <span className="text-primary">1,153</span>
          </Typography>
        </Box>
        <hr />
        <Box className="ps-3">
          <Typography variant="body1" sx={{ fontSize: "12px" }}>
            Connect with 3.8x more decision-makers
          </Typography>
          <Typography variant="body2" className="fw-bold">
            Try Sales Nav for PKR0
          </Typography>
        </Box>
        <hr />
        <Box className="ps-3 mb-4">
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <BookmarkIcon /> Saved items
          </Typography>
        </Box>
      </Card>
    </Card>
    </>
  );
};

export default AboutSection;
