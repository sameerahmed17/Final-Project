import React from 'react'
import GamesSection from './Sections/GamesSection'
import PostSection from './Sections/PostSection'
import AboutSection from './Sections/AboutSection'
import { Col, Row } from 'react-bootstrap'
import { Container } from '@mui/material'

const HomePage = () => {
  return (
    <div style={{ backgroundColor: '#f4f2ee' }}>

     
<Container className=" mt-4">

<Row className="gy-4">

    {/* AboutSection */}

    <Col lg={3} className="d-none d-lg-block">

    <AboutSection/>

    </Col>


    {/* Post Section */}

    <Col lg={6}>

    <PostSection/>

    </Col>

    {/* Games Section */}

    <Col lg={3} className="d-none d-lg-block">

    <GamesSection/>

    </Col>

</Row>

</Container>


    
   
  
    </div>
  )
}

export default HomePage
