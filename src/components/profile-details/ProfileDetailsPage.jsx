import { Box, Container } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import GamesSection from '../home/Sections/GamesSection'
import ProfilePageLeft from './profile-sections/ProfilePageLeft'

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
            <GamesSection />
          </Col>
        </Row>
      </Container>
    </Box>
  )
}

export default ProfileDetailsPage
