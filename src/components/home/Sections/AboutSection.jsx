import { Avatar, Box, Button, Card } from '@mui/material'
import React from 'react'
import { Col } from 'react-bootstrap'

const AboutSection = () => {
  return (
    <Box >


    {/* Profile */}
    <Box className='bg-white'
        sx={{
            p: 3,
            border: "1px solid",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            backgroundColor: 'white'
        }}
    >


        <Card className="mb-3">

            <Avatar src="/path/to/profile.jpg" alt="Profile" className="mb-2" />
            <h5>Sameer Ahmed</h5>
            <p className="text-muted">Frontend Web Developer</p>
            <Button variant="primary" size="sm">
                View Profile
            </Button>

        </Card>

    </Box>


    {/* RecentEvents */}

    <Box className='bg-white mt-5'
        sx={{
            p: 3,
            border: "1px solid",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            backgroundColor: 'white'
        }}
    >

        <Card>

            <h6>Recent</h6>
            <ul className="list-unstyled">
                <li>JavaScript TypeScript Angular</li>
                <li>Job Opportunities in Pakistan</li>
                <li>Flexible Part-time Remote Work</li>
            </ul>

        </Card>

    </Box >

</Box>
  )
}

export default AboutSection
