import { Box, Container } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProfilePageLeft from './profile-sections/ProfilePageLeft'
import ProfilePageRight from './profile-sections/ProfilePageRight'
import Footer from './profile-sections/Footer'

const ProfileDetailsPage = () => {
  return (
    <Box style={{ backgroundColor: "#f4f2ee" }}>
      <Container className="mt-4">
        <Row className="gy-4">
          {/* About Section */}
          <Col
            lg={9}>
            <ProfilePageLeft />
          </Col>
          <Col lg={3} className="d-none d-lg-block">
            <ProfilePageRight />
          </Col>
        </Row>
        <Footer />
      </Container>
    </Box>
  )
}

export default ProfileDetailsPage
