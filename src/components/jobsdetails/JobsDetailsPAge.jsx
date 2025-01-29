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
            style={{ position: "sticky", top: "0", height: "100vh" }}
          >
            <JobDetailsLeftPage />
          </Col>

          {/* Right section */}
          <Col lg={9} style={{ overflowY: "auto",  }}>
            <JobDetailsRightPage />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JobsDetailsPage;
