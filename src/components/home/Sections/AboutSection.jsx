import React from "react";
import { Avatar, Box, Card, Typography } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Link } from "react-router-dom";
import useProfilePage from "../../profile-details/profile-sections/useProfilePage";

const AboutSection = () => {

  const {  banner, avatar,  } = useProfilePage()

  return (
    <>
        <Card
      className="rounded-3 overflow-hidden"
      sx={{
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
      }}>
        <Box sx={{
                        position: "relative",
                        height: { md: 70 },
                        width: "100%",
                        backgroundImage: `url(${banner})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}>
                       
                       <Link to='/profile-details' style={{ textDecoration: 'none' }}>
                            <Avatar
                                src={avatar}
                                sx={{
                                    width: { md: 80 },
                                    height: { md: 80 },
                                    position: "absolute",
                                    bottom: { md: -40 },
                                     left: { md: 90 },
                                    border: "4px solid white",
                                    cursor: 'pointer',
                                }}
                            />
                          </Link>
                    </Box>
        
        <Box
          sx={{ marginTop: "50px",}}>
        <Link to='/profile-details' style={{ textDecoration: 'none' }}>
        <Typography variant="h6" className="mt-1 fw-bold text-center text-black">
          Sameer Ahmed
        </Typography>
        </Link>
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
