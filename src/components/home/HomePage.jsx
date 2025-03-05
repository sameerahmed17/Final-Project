import React from "react";
import GamesSection from "./Sections/GamesSection";
import PostSection from "./Sections/PostSection";
import AboutSection from "./Sections/AboutSection";
import { Col, Row } from "react-bootstrap";
import { Box, Container } from "@mui/material";

const HomePage = () => {
  return (
    <Box style={{ backgroundColor: "#f4f2ee" }}>
      <Container className="mt-4">
      <Row className="gy-4">
  {/* About Section */}
  <Col lg={3} className="d-none d-lg-block" style={{ position: "sticky", top: "100px", height: "calc(100vh - 80px)" }}>
    <AboutSection />
  </Col>

  {/* Post Section */}
  <Col lg={6}>
    <PostSection />
  </Col>

  {/* Games Section */}
  <Col lg={3} className="d-none d-lg-block" style={{ position: "sticky", top: "100px", height: "calc(100vh - 80px)" }}>
    <GamesSection />
  </Col>
</Row>

      </Container>
    </Box>
  );
};

export default HomePage;
