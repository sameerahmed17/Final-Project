import React from "react";
import { Container, Grid, Avatar, Button, Typography, Box, Card, TextField, IconButton, Tabs, Tab, Modal, } from "@mui/material";
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
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ActivityImage1 from '../../assets/activity-img-one.jpeg'
import ActivityImage2 from '../../assets/activity-img-two.jpeg'
import ActivityImage3 from '../../assets/activity-img-three.jpeg'
import ActivityImage4 from '../../assets/activity-img-five.jpeg'
import PostImg1 from '../../assets/post-img-one.jpeg'
import PostImg2 from '../../assets/post-img-two.jpeg'
import PostImg3 from '../../assets/post-img-three.jpeg'
import Ibex from '../../assets/ibex.jpeg';
import LinkedIn from '../../assets/linkedin_logo.jpeg'
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import usePostSection from "../../home/Sections/usePostSection";
import useProfilePage from "./useProfilePage";
import { ToastContainer } from "react-toastify";



const ProfilePageLeft = () => {

    const { profileData, tabValue, setTabValue, banner, avatar, handleBannerChange, handleAvatarChange, setAboutText, isEditing, aboutText, setIsEditing } = useProfilePage()

    const { handleOpen, handleClose, setNewPostContent, newPostContent, handleImageChange, imagePreview, handlePost, open } = usePostSection()

    return (
        <>
            <Container>
            <ToastContainer position="top-right" autoClose={3000} />
                {/* Profile */}
                <Card className="rounded-3">
                    <Box sx={{
                        position: "relative",
                        height: { xs: 85, sm: 190, md: 210 },
                        width: "100%",
                        backgroundImage: `url(${banner})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}>
                        {/* ✅ Hidden File Input for Banner */}
                        <input type="file" accept="image/*" onChange={handleBannerChange} id="banner-upload" style={{ display: "none" }} />
                        <label htmlFor="banner-upload">
                            <IconButton sx={{ position: "absolute", top: 10, right: 10, background: "rgba(0,0,0,0.5)" }} component="span">
                                <Edit sx={{ color: "white" }} />
                            </IconButton>
                        </label>

                        <label htmlFor="avatar-upload">
                            <Avatar
                                src={avatar}
                                sx={{
                                    width: { xs: 80, sm: 110, md: 140 },
                                    height: { xs: 80, sm: 110, md: 140 },
                                    position: "absolute",
                                    bottom: { xs: -30, sm: -35, md: -40 },
                                    left: { xs: 10, sm: 15, md: 20 },
                                    border: "4px solid white",
                                    cursor: 'pointer',
                                }}
                                alt='Sameer Ahmed'
                            />
                            {/* ✅ Hidden File Input for Avatar */}
                            <input type="file" accept="image/*" onChange={handleAvatarChange} id="avatar-upload" style={{ display: "none" }} />
                        </label>
                    </Box>

                    <Box sx={{ p: 3, pt: 6 }}>
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
                </Card>
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
                <Card className="my-3 rounded-3 shadow px-3 py-4">
                    <Box className="d-flex justify-content-between mb-3">
                        <Typography variant="h5">About</Typography>
                        <IconButton color="primary" onClick={() => setIsEditing(true)}>
                            <Edit />
                        </IconButton>
                    </Box>

                    {isEditing ? (
                        <Box>
                            <TextField
                                fullWidth
                                multiline
                                rows={11}
                                variant="outlined"
                                value={aboutText}
                                onChange={(e) => setAboutText(e.target.value)}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                className="mt-2"
                                startIcon={<Save />}
                                onClick={() => setIsEditing(false)}
                            >
                                Save
                            </Button>
                        </Box>
                    ) : (
                        <Typography variant="body1" style={{ whiteSpace: "pre-wrap" }}>{aboutText}</Typography>
                    )}
                </Card>
                {/* Activity */}
                <Card className="my-3 rounded-3 shadow px-4 py-4">
                    <Box className='d-flex justify-content-between'>
                        <Box>
                            <Typography variant="h5" className="fw-bold">Activity</Typography>
                            <a className="text-decoration-none" href="https://www.linkedin.com/mynetwork/network-manager/people-follow/followers/">1,443 followers</a>
                        </Box>
                        <Box>
                            <Button variant="outlined" onClick={handleOpen}>Create a post</Button>
                        </Box>
                    </Box>
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
                                <Box className='my-4'>
                                    <a className="text-black"
                                        href="https://www.linkedin.com/posts/sameer-ahmed-0026a5306_1-activity-7287718748407357441-TjD9?utm_source=share&utm_medium=member_desktop"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Typography variant="body2" className="text-secondary">Sameer Ahmed posted this • 1w</Typography>
                                        <Typography variant="body2">I’m happy to announce that I have successfully completed the CodeAlpha Virtual Internship Program in Frontend Development from December 15, 2024, to January 15, 2025...</Typography> <br />

                                        <Box className="d-flex align-items-center">
                                            <img className="rounded-2 mt-2 me-3" width='120' src={PostImg1} alt="Leganic Website" />
                                            <Box>
                                                <Typography variant="body1">
                                                    1 Page
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </a>
                                </Box>
                                <Box className='my-4'>
                                    <a className="text-black"
                                        href="https://www.linkedin.com/posts/sameer-ahmed-0026a5306_1-activity-7287716970949476352-KC-H?utm_source=share&utm_medium=member_desktop"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Typography variant="body2" className="text-secondary">Sameer Ahmed posted this • 1w</Typography>
                                        <Typography variant="body2">I am thrilled to announce the successful completion of my Frontend Development Virtual Internship at CodeAlpha from December 15, 2024, to January 15, 2025...</Typography> <br />

                                        <Box className="d-flex align-items-center">
                                            <img className="rounded-2 mt-2 me-3" width='80' src={PostImg2} alt="Leganic Website" />
                                            <Box>
                                                <Typography variant="body1">
                                                    1 Page
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </a>
                                </Box>
                                <Box className='my-4'>
                                    <a className="text-black"
                                        href="https://www.linkedin.com/posts/sameer-ahmed-0026a5306_frontenddevelopment-html-css-activity-7285170615479644161-oL1I?utm_source=share&utm_medium=member_desktop"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Typography variant="body2" className="text-secondary mb-2">Sameer Ahmed posted this • 2w</Typography>
                                        <Box className="d-flex align-items-center">
                                            <img className="rounded-2 mt-2 me-3" width='80' src={PostImg3} alt="Leganic Website" />
                                            <Typography variant="body2">
                                                What is Next.js and why we use it? <br /> <br />

                                                Next.js is a powerful React framework developed by Vercel that simplifies the process of building...</Typography>
                                        </Box>
                                    </a>
                                </Box>
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
                                    <img width='140' className="rounded-2" src={ActivityImage1} alt="" />
                                </Box>
                                <Box>
                                    <img width='120' className="rounded-2" src={ActivityImage2} alt="" />
                                </Box>
                                <Box>
                                    <img width='140' className="rounded-2" height='145' src={ActivityImage3} alt="" />
                                </Box>
                                <Box>
                                    <img width='105' className="rounded-2" src={ActivityImage4} alt="" />
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
                {/* Skills */}
                <Card className="my-3 rounded-3 shadow px-4 py-4">
                    <Box className='d-flex justify-content-between'>
                        <Box>
                            <Typography variant="h5" className="fw-bold">Skills</Typography>
                        </Box>
                        <Box>
                            <MoreHorizIcon /> <AddIcon className="ms-3" />
                        </Box>
                    </Box>
                    <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} variant="scrollable" scrollButtons="auto">
                        <Tab label="All" />
                        <Tab label="Industry Knowledge" />
                        <Tab label="Tools & Technologies" />
                        <Tab label="Interpersonal Skills" />
                    </Tabs>
                    <Box mt={3}>
                        {tabValue === 0 && (
                            <>
                                <Box>
                                    <Typography variant="body1">Frontend Developer</Typography>
                                </Box>
                                <hr />
                                <Box>
                                    <Typography variant="body1">HTML5</Typography>
                                </Box>
                                <hr />
                                <Box>
                                    <Typography variant="body1">CCS3</Typography>
                                </Box>
                                <hr />
                                <Box>
                                    <Typography variant="body1">Bootstrap5.2</Typography>
                                </Box>
                                <hr />
                                <Box>
                                    <Typography variant="body1">JavaScript</Typography>
                                </Box>
                                <hr />
                                <Box>
                                    <Typography variant="body1">React.js</Typography>
                                </Box>
                                <hr />
                                <Box>
                                    <Typography variant="body1">Next.js</Typography>
                                </Box>
                            </>
                        )}
                        {tabValue === 1 && <Typography variant="h6">
                            <>
                                <Box>
                                    <Typography variant="body1"> Time Management</Typography>
                                </Box>
                                <hr />
                                <Box>
                                    <Typography variant="body1"> Front-End Design</Typography>
                                </Box>
                            </>
                        </Typography>}
                        {tabValue === 2 && <Typography variant="h6" >
                            <>
                                <Box>
                                    <Typography variant="body1">Git</Typography>
                                </Box>
                                <hr />
                                <Box>
                                    <Typography variant="body1">GitHub</Typography>
                                </Box>
                                <hr />
                                <Box>
                                    <Typography variant="body1">Figma (Software)</Typography>
                                </Box>
                                <hr />
                                <Box>
                                    <Typography variant="body1">Redux.js</Typography>
                                </Box>
                            </>
                        </Typography>}
                        {tabValue === 3 && <Typography variant="h6" >
                            <Box>
                                <Typography variant="body1">Communication</Typography>
                            </Box>
                            <hr />
                            <Box>
                                <Typography variant="body1">Teamwork</Typography>
                            </Box>
                        </Typography>}
                    </Box>
                </Card>
                {/* Interests */}
                <Card className="my-3 rounded-3 shadow px-4 py-4">
                    <Box className='d-flex flex-wrap'>
                        <Box className='d-flex my-4 me-5'>
                            <Box> <img width='60' src={LinkedIn} alt="" /></Box>
                            <Box className='ms-3'>
                                <Typography variant="body1" className="fw-bold">LinkedIn</Typography>
                                <Typography variant="body2" className="text-secondary">29,834,319 followers</Typography>
                                <Button variant="outlined">Following</Button>
                            </Box>
                        </Box>
                        <Box className='d-flex my-4'>
                            <Box> <img width='60' src={Ibex} alt="" /></Box>
                            <Box className='ms-3'>
                                <Typography variant="body1" className="fw-bold">ibex</Typography>
                                <Typography variant="body2" className="text-secondary">316,743 followers</Typography>
                                <Button variant="outlined">Following</Button>
                            </Box>
                        </Box>
                    </Box>
                </Card>
                 {/* Modal for Post Creation */}
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
          <Box
            className="position-absolute top-50 start-50 translate-middle bg-white shadow-lg p-4 rounded"
            style={{
              width: "90%",
              maxWidth: "800px",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <Typography id="modal-title" variant="h6">
              Create a Post
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={5}
              placeholder="What do you want to talk about?"
              variant="outlined"
              className="mt-2"
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
            />
            <Box className="mt-3">
              <label htmlFor="imageUpload">
                <CameraAltIcon sx={{cursor: 'pointer',}} />
              </label>
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                className="d-none"
                onChange={handleImageChange}
              />
            </Box>

            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-100 mt-2 rounded-2"
              />
            )}

            <Box className="d-flex justify-content-end mt-3">
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="ms-3"
                onClick={handlePost}
              >
                Post
              </Button>
            </Box>
          </Box>
        </Modal>
            </Container>
        </>
    );
};

export default ProfilePageLeft;
