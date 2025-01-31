import React, { useEffect, useState } from "react";
import { Container, Grid, Paper, Avatar, Button, Typography, Box, Card, TextField, IconButton, Tabs, Tab, } from "@mui/material";
import BgCover from '../../assets/Banner.png';
import MyProfile from "../../assets/Sameer Ahmed.jpeg";
import xWaveLogo from '../../assets/xwavepak_logo.jpeg';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GrowIntern from '../../assets/growintern_logo.jpeg'
import CognoRise from '../../assets/cognorise.jpeg'
import Prodigy from '../../assets/prodigy_infotech_logo.jpeg'
import Education from '../../assets/Class Logo.png'
import Leganic from '../../assets/leganic.jpeg'
import ARK from '../../assets/ark.jpeg'
import FoodDelivery from '../../assets/food.jpeg'
import { Edit, Save } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import SearchIcon from "@mui/icons-material/Search";
import PostImage from '../../assets/abeera.jpeg'



const ProfilePageLeft = () => {
    const [aboutText, setAboutText] = useState(localStorage.getItem("aboutText") || "");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => localStorage.setItem("aboutText", aboutText), [aboutText]);


    const profileData = {
        name: "Sameer Ahmed",
        role: "Frontend Web Developer",
        skills: ["HTML5", "CSS3", 'Bootstrap', "JavaScript", "React.js", "Next.js"],
        location: "Khairpur District, Sindh, Pakistan",
        portfolio: "My Portfolio",
        connections: "500+ connections",
    };
    const [tabValue, setTabValue] = useState(0);

    return (
        <Container maxWidth="md" >
            {/* Profile */}
            <Paper elevation={3} sx={{ borderRadius: 3, overflow: "hidden" }}>
                <Box
                    sx={{
                        position: "relative",
                        height: 190,
                        backgroundImage: `url(${BgCover})`,
                    }}
                >
                    <Avatar
                        src={MyProfile}
                        sx={{
                            width: 140,
                            height: 140,
                            position: "absolute",
                            bottom: -40,
                            left: 20,
                            border: "4px solid white",
                        }}
                    />
                </Box>

                <Box sx={{ p: 3, pt: 6 }}>
                    {/* Profile Info */}
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} md={8}>
                            <Typography variant="h5" fontWeight={600}>
                                {profileData.name}
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                {profileData.role} || {profileData.skills.join(" || ")}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {profileData.location}
                            </Typography>
                        </Grid>
                    </Grid>

                    {/* Profile Links */}
                    <Box className='mt-3' >
                        <Box>
                            <Button size="small">
                                {profileData.portfolio}
                            </Button>
                        </Box>
                        <Box>
                            <Button variant="text">
                                {profileData.connections}
                            </Button>
                        </Box>
                    </Box>

                    {/* Action Buttons */}
                    <Box display="flex" gap={1.5} mt={2} flexWrap="wrap">
                        <Button variant="contained" color="primary" size="small" >
                            Open to
                        </Button>
                        <Button variant="outlined" color="primary" size="small">
                            Add Profile Section
                        </Button>
                        <Button variant="outlined" size="small">Enhance Profile</Button>
                        <Button variant="outlined" size="small">Resources </Button>
                    </Box>
                </Box>
            </Paper>
            {/* Analytics */}
            <Card className="shadow mt-3 rounded-3 px-4 py-4">
                <Typography variant="subtitle2" className="fw-bold">
                    Analytics
                </Typography>
                <Typography
                    variant="body2"
                    className="text-muted d-flex align-items-center"
                >
                    <VisibilityIcon fontSize="small" className="me-1" /> Private
                    to you
                </Typography>
                <Box className="d-flex justify-content-between flex-wrap mt-3">
                    <Box className='mb-3'>
                        <Box className="d-flex align-items-center">
                            <PeopleIcon className="me-1" />
                            <Typography variant="body2" className="fw-bold">
                                113 profile views
                            </Typography>
                        </Box>
                        <Typography variant="body2" className="ms-4">
                            Discover who's viewed your <br /> profile.
                        </Typography>
                    </Box>
                    <Box className='mb-3'>
                        <Box className="d-flex align-items-center">
                            <BarChartIcon className="me-1" />
                            <Typography variant="body2" className="fw-bold">
                                1,145 post impressions
                            </Typography>
                        </Box>
                        <Typography variant="body2" className="ms-4">
                            Check out who's engaging with <br /> your posts.
                        </Typography>
                        <Typography variant="caption" className="ms-4 text-secondary">
                            Past 7 days
                        </Typography>
                    </Box>
                    <Box>
                        <Box className="d-flex align-items-center">
                            <SearchIcon className="me-1" />
                            <Typography variant="body2" className="fw-bold">
                                41 search appearances
                            </Typography>
                        </Box>
                        <Typography variant="body2" className="ms-4">
                            See how often you appear <br /> in search results.
                        </Typography>
                    </Box>
                </Box>

                <hr />
                <Box className="d-flex justify-content-center">
                    <Button variant="outlined" className="fw-bold">
                        Show all <ArrowForwardIcon />
                    </Button>
                </Box>
            </Card>
            {/* About */}
            <Card className="my-3 rounded-3 shadow px-4 py-4">
                <Box className="d-flex justify-content-between mb-3">
                    <Typography variant="h5">About</Typography>
                    <IconButton color="primary" onClick={() => setIsEditing(!isEditing)}>
                        {isEditing ? <Save /> : <Edit />}
                    </IconButton>
                </Box>

                {isEditing ? (
                    <TextField fullWidth multiline rows={11} value={aboutText} onChange={(e) => setAboutText(e.target.value)} />
                ) : (
                    <Typography variant="body2">{aboutText || "Click edit to add content."}</Typography>
                )}
            </Card>

            {/* Activity */}

            <Card className="my-3 rounded-3 shadow px-4 py-4">
                <Typography variant="h5" fontWeight="bold">Activity</Typography>
                <Typography variant="body2" color="textSecondary">1,439 followers</Typography>

                {/* MUI Tabs */}
                <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} variant="scrollable" scrollButtons="auto">
                    <Tab label="Posts" />
                    <Tab label="Comments" />
                    <Tab label="Videos" />
                    <Tab label="Images" />
                    <Tab label="Documents" />
                </Tabs>

                <Box mt={3}>
                    {tabValue === 0 && (
                        <>

                        </>
                    )}
                    {tabValue === 1 && <Typography variant="h6">
                        <>
                            <Box>
                                <Typography variant="body2" className="text-secondary">Sameer Ahmed commented on a post • 1d</Typography>
                                <Typography variant="body1" className="fw-bold">Looks great</Typography>
                            </Box>
                            <hr />
                            <Box className='my-3'>
                                <Typography variant="body2" className="text-secondary">Sameer Ahmed commented on a post • 4d</Typography>
                                <Typography variant="body1" className="fw-bold">Great work</Typography>
                            </Box>
                            <hr />
                            <Box>
                                <Typography variant="body2" className="text-secondary">Sameer Ahmed commented on a post • 6d</Typography>
                                <Typography variant="body1" className="fw-bold">Congratulations </Typography>
                            </Box>
                            <hr />
                        </>
                    </Typography>}
                    {tabValue === 2 && <Typography variant="h6" align="center">No Videos Available</Typography>}
                    {tabValue === 3 && <Typography variant="h6" >
                        <Box className='d-flex justify-content-evenly flex-wrap gap-2'>
                            <Box>
                                <img width='100' src={PostImage} alt="" />
                            </Box>
                            <Box>
                                <img width='100' src={PostImage} alt="" />
                            </Box>
                            <Box>
                                <img width='100' src={PostImage} alt="" />
                            </Box>
                            <Box>
                                <img width='100' src={PostImage} alt="" />
                            </Box>
                        </Box>
                    </Typography>}
                    {tabValue === 4 && <Typography variant="h6" align="center">No Documents Found</Typography>}
                </Box>
            </Card>


            {/* Experience */}
            <Card className="my-3 rounded-3 shadow px-4 py-4">
                <Box className='d-flex justify-content-between'>
                    <Box>
                        <Typography variant="h6">Experience</Typography>
                    </Box>
                    <Box>
                        <AddIcon className='me-3' /> <EditIcon />
                    </Box>
                </Box>
                <Box className='d-flex my-4'>
                    <Box> <img width='60' src={xWaveLogo} alt="" /></Box>
                    <Box className='ms-3'>
                        <Typography variant="body1" className="fw-bold">Frontend Web Developer Fellow</Typography>
                        <Typography variant="body1" >xWave · Apprenticeship</Typography>
                        <Typography variant="body2" className="text-secondary">Jan 2024 - Present · 1 yr 1 mo</Typography>
                        <Typography variant="body2" className="text-secondary">Sukkur, Sindh, Pakistan · On-site</Typography> <br />
                        <Typography variant="body2" >- As part of my 12-month front-end web development course at xWave, I am developing projects using HTML5, CSS3, Bootstrap JavaScript and React. The program also includes professional development and English language training, enhancing both my technical expertise and career readiness.</Typography>
                    </Box>
                </Box>
                <hr />
                <Box className='d-flex my-4'>
                    <Box> <img width='60' src={GrowIntern} alt="" /></Box>
                    <Box className='ms-3'>
                        <Typography variant="body1" className="fw-bold">Front End Development Intern</Typography>
                        <Typography variant="body1" >Growintern · Internship</Typography>
                        <Typography variant="body2" className="text-secondary">Oct 2024 - Oct 2024 · 1 mo</Typography>
                        <Typography variant="body2" className="text-secondary">Remote</Typography> <br />
                        <Typography variant="body2" >- Successfully developed four projects using HTML5, CSS3, and JavaScript. The projects include a Calculator and Personal Portfolio. Each project allowed me to enhance my technical skills and apply my knowledge in practical settings.</Typography>
                    </Box>
                </Box>
                <hr />
                <Box className='d-flex my-4'>
                    <Box> <img width='60' src={CognoRise} alt="" /></Box>
                    <Box className='ms-3'>
                        <Typography variant="body1" className="fw-bold">Front End Development Intern</Typography>
                        <Typography variant="body1" >CognoRise InfoTech · Internship</Typography>
                        <Typography variant="body2" className="text-secondary">Aug 2024 - Aug 2024 · 1 mo</Typography>
                        <Typography variant="body2" className="text-secondary">Remote</Typography> <br />
                        <Typography variant="body2" >- Completed a one-month internship, developing a Quiz App and BMI Calculator using HTML5, CSS3, and JavaScript.</Typography>
                    </Box>
                </Box>
                <hr />
                <Box className='d-flex my-4'>
                    <Box> <img width='60' src={Prodigy} alt="" /></Box>
                    <Box className='ms-3'>
                        <Typography variant="body1" className="fw-bold">Front End Development Intern</Typography>
                        <Typography variant="body1" >Prodigy InfoTech · Internship</Typography>
                        <Typography variant="body2" className="text-secondary">Aug 2024 - Aug 2024 · 1 mo</Typography>
                        <Typography variant="body2" className="text-secondary">Remote</Typography> <br />
                        <Typography variant="body2" >- Completed my internship with Prodigy Info Tech, during which I successfully developed four projects using HTML5, CSS3, and JavaScript. The projects include a stopwatch, a weather app, a Tic Tac Toe app, and a personal portfolio. Each project allowed me to enhance my technical skills and apply my knowledge in practical settings.</Typography>
                    </Box>
                </Box>
            </Card>
            {/* Education */}
            <Card className="my-3 rounded-3 shadow px-4 py-4">
                <Box className='d-flex justify-content-between'>
                    <Box>
                        <Typography variant="h6">Education</Typography>
                    </Box>
                    <Box>
                        <AddIcon className='me-3' /> <EditIcon />
                    </Box>
                </Box>
                <Box className='d-flex my-4'>
                    <Box> <img width='60' src={Education} alt="" /></Box>
                    <Box className='ms-3'>
                        <Typography variant="body1" className="fw-bold">Government Higher Secondary School, Hadal Shah </Typography>
                        <Typography variant="body1" >Intermediate, Pre-Medicine/Pre-Medical Studies</Typography>
                        <Typography variant="body2" className="text-secondary">Mar 2023 - Aug 2025</Typography> </Box>
                </Box>
            </Card>
            {/* Projects */}
            <Card className="my-3 rounded-3 shadow px-4 py-4">
                <Box className='d-flex justify-content-between'>
                    <Box>
                        <Typography variant="h6">Projects</Typography>
                    </Box>
                    <Box>
                        <AddIcon className='me-3' /> <EditIcon />
                    </Box>
                </Box>
                <Box className='my-4'>
                    <Typography variant="body1" className="fw-bold">LEGANIC WEBSITE</Typography>
                    <Typography variant="body2">Oct 2024 - Oct 2024</Typography> <br />
                    <Typography variant="body2">Completed the project in 9 days using HTML5, CSS3, Bootstrap 5, and JavaScript. Developed a responsive website with login/registration using local storage, add-to-cart functionality, and interactive features like carousel and animations.</Typography>
                    <a
                        href="https://leganic-website.vercel.app/"
                        style={{ textDecoration: 'none' }}
                    >
                        <Box className="d-flex align-items-center">
                            <img className="rounded-2 mt-2 me-3" width='120' src={Leganic} alt="Leganic Website" />
                            <Typography variant="body1">
                                Leganic Website
                            </Typography>
                        </Box>
                    </a>
                </Box>
                <hr />
                <Box className='my-4'>
                    <Typography variant="body1" className="fw-bold">ARK MULTI PAGE WEBSITE</Typography>
                    <Typography variant="body2">Aug 2024 - Aug 2024</Typography> <br />
                    <Typography variant="body2">- Designed and built a fully responsive multipage ARK website using HTML5, CSS3, and Bootstrap. Completed the project in 5 days with a commitment of 3 hours daily, incorporating functions such as the grid system, media queries, and relative and absolute positioning.</Typography>
                    <a
                        href="https://cupstone-project-d1b8.vercel.app/"
                        style={{ textDecoration: 'none' }}
                    >
                        <Box className="d-flex align-items-center">
                            <img className="rounded-2 mt-2 me-3" width='80' src={ARK} alt="Leganic Website" />
                            <Typography variant="body1">
                                ARK Website
                            </Typography>
                        </Box>
                    </a>
                </Box>
                <hr />
                <Box className='my-4'>
                    <Typography variant="body1" className="fw-bold"> FOOD DELIVERY WEBSITE</Typography>
                    <Typography variant="body2">Jun 2024 - Jun 2024</Typography> <br />
                    <Typography variant="body2">- Developed an online pizza delivery website, using HTML5, CSS3 and Bootstrap5. It is fully responsive on various screens such as mobile phones and smart watches.</Typography>
                    <a
                        href="https://food-delivary-swff.vercel.app/"
                        style={{ textDecoration: 'none' }}
                    >
                        <Box className="d-flex align-items-center">
                            <img className="rounded-2 mt-2 me-3" width='80' src={FoodDelivery} alt="Leganic Website" />
                            <Typography variant="body1">
                                Food Delivery Website
                            </Typography>
                        </Box>
                    </a>
                </Box>
                <hr />
                <Box className="d-flex justify-content-center">
                    <Button variant="outlined" className="fw-bold">
                        Show all <ArrowForwardIcon />
                    </Button>
                </Box>
            </Card>
        </Container>
    );
};

export default ProfilePageLeft;
