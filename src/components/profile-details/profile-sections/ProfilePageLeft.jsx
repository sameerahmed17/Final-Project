import React from "react";
import { Container, Grid, Paper, Avatar, Button, Typography, Box, Card, } from "@mui/material";
import { Visibility, Search, } from "@mui/icons-material";
import BgCover from '../../assets/Banner.png';
import MyProfile from "../../assets/Sameer Ahmed.jpeg";

const ProfilePageLeft = () => {
    const profileData = {
        name: "Sameer Ahmed",
        role: "Frontend Web Developer",
        skills: ["HTML5", "CSS3", 'Bootstrap', "JavaScript", "React.js", "Next.js"],
        location: "Khairpur District, Sindh, Pakistan",
        portfolio: "My Portfolio",
        connections: "500+ connections",
        analytics: [
            { icon: <Visibility fontSize="small" />, text: "127 profile views" },
            { icon: <Search fontSize="small" />, text: "44 search appearances" },
        ],
    };

    return (
        <Container maxWidth="md" >
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
                            width: 110,
                            height: 110,
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

                {/* Analytics Section */}
                <Box sx={{ p: 3, bgcolor: "#f9f9f9", borderRadius: "0 0 10px 10px" }}>
                    <Typography variant="h6">Analytics</Typography>
                    <Box display="flex" gap={3} mt={1} flexWrap="wrap">
                        {profileData.analytics.map((item, index) => (
                            <Typography
                                key={index}
                                variant="body2"
                                color="textSecondary"
                                display="flex"
                                alignItems="center"
                                gap={0.5}
                            >
                                {item.icon} {item.text}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            </Paper>
            <Card className="my-3 rounded-3 shadow px-3 py-4">
                <Typography className="mb-3" variant="h5">About</Typography>
                <Typography variant="body1">I’m currently enrolled in a 12-month Frontend Web Development course at xWave, a program that helps empower Pakistan’s youth with IT skills. I’m skilled in HTML, CSS, Bootstrap5, JavaScript, and React.js, and have completed 4+ projects, including websites and landing pages. <br /> <br />

                    I also completed an internship at Prodigy Info Tech, where I developed 4 projects, a stopwatch, weather app, Tic Tac Toe app, and personal portfolio, using HTML5, CSS3, and JavaScript. These experiences helped me apply my skills in real-world projects. <br /> <br />

                    Actively looking for new web development opportunities and projects. Reach out to me at sameerahmedxwave@gmail.com</Typography>
            </Card>
        </Container>
    );
};

export default ProfilePageLeft;
