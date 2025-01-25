import { Box, Button, Card } from '@mui/material'
import React from 'react'

const GamesSection = () => {
  return (
    <div>
         <Box>
    <Box sx={{
        p: 3,
        border: "1px solid",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundColor: 'white'
    }}>
        <p>Today’s puzzle games</p>
        <ul className="list-unstyled">
            <li>Tango</li>
            <li>Queens</li>
            <li>Pinpoint</li>
            <li>Crossclimb</li>
        </ul>

    </Box>

    <Box className=' mt-4' sx={{
        p: 3,
        border: "1px solid",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundColor: 'white'
    }}>
        <Card>

            <h6>Add to Your Feed</h6>
            <Button variant="link" className="d-block text-primary">
                Follow Sophie May
            </Button>
            <Button variant="link" className="d-block text-primary mt-2">
                Follow TalentQuip
            </Button>
            <Button variant="link" className="d-block text-primary mt-2">
                Follow TalentQuip
            </Button>
            <Button variant="link" className="d-block text-primary mt-2">
                Follow TalentQuip
            </Button>
            <Button variant="link" className="d-block text-primary mt-2">
                Follow TalentQuip
            </Button>
            <Button variant="link" className="d-block text-primary mt-2">
                Follow TalentQuip
            </Button>

        </Card>
    </Box>

</Box>
    </div>
  )
}

export default GamesSection
