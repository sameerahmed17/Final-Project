import { Avatar, Box, Button, Card, Tooltip, Typography } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import Image1 from "../../assets/who-hiring.png";
import VisibilityIcon from '@mui/icons-material/Visibility';
import MahNoor from '../../assets/mah noor.jpeg'
import SendIcon from '@mui/icons-material/Send';
import Iqra from '../../assets/iqra.jpeg'
import Sania from '../../assets/sania porfile logo.jpeg'

const ProfilePageRight = () => {
    return (
        <>
            <Card className='shadow p-3 rounded-3 d-flex justify-content-between'>
                <Box>
                    <Typography variant='body1' className='fw-bold'>Profile language</Typography>
                    <Typography variant='body2' className='text-secondary'>English</Typography>
                </Box>
                <Box>
                    <EditIcon />
                </Box>

            </Card>
            <Card className='shadow p-3 rounded-3 d-flex justify-content-between my-3'>
                <Box>
                    <Typography variant='body1' className='fw-bold'>Public profile & URL</Typography>
                    <Typography variant='body2' className='text-secondary'>www.linkedin.com/in/sameer-ahmed-0026a5306</Typography>
                </Box>
                <Box>
                    <EditIcon />
                </Box>
            </Card> 
            <Box>
            <img className="w-100 rounded-2" src={Image1} alt="Hiring" />
            </Box>
            <Card className='my-3 shadow p-3 rounded-3'> 
                <Typography variant='body1'>Your viewers also viewed</Typography>
                <Typography variant='body2'> <VisibilityIcon /> Private to you</Typography>
                <Box className='my-3 d-flex'>
                    <Avatar src={MahNoor} alt='Profile' />
                    <Box className='ms-2'>
                        <Typography variant='body2'> MAH NOOR · 1st</Typography>
                       <Tooltip title="Front-end Web Developer | HTML5 | CSS3 | JavaScript | React" placement="top" className='mb-2'>
                       <Typography variant='body2'>Front-end Web Developer | HTML5 | CSS3 | JavaScript...</Typography>
                       </Tooltip>
                       <Button variant='outlined'> <SendIcon className='me-2' />Message</Button>
                    </Box>
                </Box>
                <hr />
                <Box className='my-3 d-flex'>
                    <Avatar src={Iqra} alt='Profile' />
                    <Box className='ms-2'>
                        <Typography variant='body2'> Iqra Hyder · 1st</Typography>
                       <Tooltip title="Front-end Web Developer | HTML5 | CSS3 | Bootstrap | JavaScript | React" placement="top" className='mb-2'>
                       <Typography variant='body2'>Front-end Web Developer | HTML5 | CSS3 | JavaScript...</Typography>
                       </Tooltip>
                       <Button variant='outlined'> <SendIcon className='me-2' />Message</Button>
                    </Box>
                </Box>
                <hr />
                <Box className='my-3 d-flex'>
                    <Avatar src={Sania} alt='Profile' />
                    <Box className='ms-2'>
                        <Typography variant='body2'> Sania Ijaz · 1st</Typography>
                       <Tooltip title="Front-end Web Developer | HTML5 | CSS3 | JavaScript | React" placement="top" className='mb-2'>
                       <Typography variant='body2'>Building SEO optimized Websites using WordPress & Elementor</Typography>
                       </Tooltip>
                       <Button variant='outlined'> <SendIcon className='me-2' />Message</Button>
                    </Box>
                </Box>
            </Card>
        </>
    )
}

export default ProfilePageRight
