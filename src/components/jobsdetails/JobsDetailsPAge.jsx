import React from "react";
import JobDetailsRightPage from "./sections/JobDetailsRightPage";
import { Container } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import JobDetailsLeftPage from "./sections/JobDetailsLeftPage";

const JobsDetailsPage = () => {
  return (
    <div>
      <Container className="mt-4">
        <Row className="gy-4">
          {/* Left section */}
          <Col
            lg={3}
            className="d-none d-lg-block"
            style={{ position: "sticky", top: "100px", height: "calc(100vh - 80px)" }}
          >
            <JobDetailsLeftPage />
          </Col>

          {/* Right section */}
          <Col lg={9}>
            <JobDetailsRightPage />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JobsDetailsPage;
