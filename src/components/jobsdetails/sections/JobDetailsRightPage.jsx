import React from "react";
import { Card, CardContent, Typography, List, ListItem, Button, Box, Avatar, AvatarGroup, } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MyProfile from "../../assets/Sameer Ahmed.jpeg";
import JobsImg1 from "../../assets/spiralyze_logo.jpeg";
import JobSimg2 from '../../assets/wizdaa_logo.jpeg'
import JobsImg3 from '../../assets/daily_tech_sol_logo.jpeg'
import JobsImg4 from '../../assets/ibex.jpeg'
import JobsImg5 from '../../assets/hybrid_mediaworks_logo.jpeg'
import JobsImg6 from '../../assets/aagco_logo.jpeg'
import JobsImg7 from '../../assets/pakistan_hirings_logo.jpeg'
import JobsImg8 from '../../assets/turingcom_logo.jpeg'
import JobsImg9 from '../../assets/time_doctor_logo.jpeg'
import JobsImg10 from '../../assets/soum_sa_logo.jpeg'
import JobsImg11 from '../../assets/motive_inc_logo.jpeg'
import JobsImg12 from '../../assets/contoursoftware_logo.jpeg'
import JobsImg13 from '../../assets/reliabilityacademy_logo.jpeg'
import JobsImg14 from '../../assets/afiniti_com_logo.jpeg'
import JobsImg15 from '../../assets/tekrevol_logo.jpeg'
import JobsImg16 from '../../assets/nymcard_logo.jpeg'
import JobsImg17 from '../../assets/kalpayfinancials_logo.jpeg'
import JobsImg18 from '../../assets/veripark_logo.jpeg'
import JobsImg19 from '../../assets/azure.jpeg'
import JobsImg20 from '../../assets/solutioninn_logo.jpeg'
import ProfileLogo from "../../assets/unnamed.jpg";
import Avatar1 from "../../assets/syed ommer.jpeg";
import Avatar2 from "../../assets/mudassir.png";

const JobDetailsRightPage = () => {
  return (
    <Box className="d-flex flex-column gap-4">
      <Card className="rounded-3 shadow px-5 py-3 ">
        <Typography variant="h6" className="fw-bold">
          Job picks for you
        </Typography>
        <Typography variant="body2" color="textSecondary" className="mb-3">
          Based on your profile, preferences, and activity like applies,
          searches, and saves
        </Typography>

        <List>
          <ListItem className="d-flex align-items-centr justify-content-between">
            <Box className="d-flex">
              <Box className="me-3">
                <img width="60px" src={JobSimg2} alt="Job Logo" />
              </Box>
              <Box>
                <Typography variant="body1" sx={{ fontWeight: "bold", color: "#0073b1", fontSize: { xs: "14px", sm: "16px" } }}>
                  Full Stack Developer
                </Typography>
                <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "12px", sm: "14px" } }}>
                  Zedcom Corporation · Karachi, Sindh, Pakistan (On-site)
                </Typography>
                <Typography
                  variant="caption"
                >
                  Promoted · Easy Apply
                </Typography>
              </Box>
            </Box>
            <Button
            size="small"
            sx={{
              color: "#555",
              marginLeft: "auto",
              display: { xs: "none", sm: "block" },
            }}>
            ✖
          </Button>
          </ListItem>
          <hr />
          <ListItem className="d-flex align-items-centr justify-content-between">
            <Box className="d-flex">
              <Box className="me-3">
                <img width="60px" src={JobsImg1} alt="Job Logo" />
              </Box>
              <Box>
                <Typography variant="body1" sx={{ fontWeight: "bold", color: "#0073b1", fontSize: { xs: "14px", sm: "16px" } }}>
                  Frontend Developer
                </Typography>
                <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "12px", sm: "14px" } }}>
                  GT Ecom · Pakistan (Remote)
                </Typography>
                <Typography
                  variant="caption"
                >
                  4 months ago
                </Typography>
              </Box>
            </Box>
            <Button
            size="small"
            sx={{
              color: "#555",
              marginLeft: "auto",
              display: { xs: "none", sm: "block" },
            }}>
            ✖
          </Button>
          </ListItem>
        </List>
        <hr />
        <Box className="d-flex justify-content-center">
          <Button variant="outlined" className="fw-bold">
            Show all <ArrowForwardIcon />
          </Button>
        </Box>
      </Card>
      <Card className="rounded-3 shadow px-5 py-3 ">
        <Box className="d-flex justify-content-between">
         <Box>
         <Typography variant="h6" className="fw-bold mb-2">
            Recent job searches
          </Typography>
         </Box>
         <Box>
         <Button variant="text" size="small">Clear</Button>
         </Box>
        </Box>
        <Box>
          <Typography variant="body1" className="fw-bold">
            student .{" "}
            <span className="text-primary" sx={{ fontSize: "12px" }}>
              136 new
            </span>
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            className="d-block"
          >
            Alert On · Lahore, Punjab, Pakistan · On-site · Remote · Hybrid
          </Typography>
        </Box>
        <hr />
        <Box>
          <Typography variant="body1" className="fw-bold">
            frontend developer intern .{" "}
            <span className="text-primary">158 new</span>
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            className="d-block"
          >
            Pakistan
          </Typography>
        </Box>
      </Card>
      <Card className="rounded-3 shadow mb-2 px-5 py-3 ">
        <Box>
          <Typography variant="body1">PREMIUM</Typography>
          <Typography variant="h6" className="fw-bold my-1">
            Jobs where you’re more likely to hear back
          </Typography>
          <Typography variant="body1">
            Based on your chances of hearing back
          </Typography>
        </Box>
        <Box className="mt-3 d-flex">
          <Avatar className="me-3" src={MyProfile} alt="Profile" />
          <Box>
            <Typography variant="body2">
              See the full list of jobs where you’d be a top applicant
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 1 }}>
              <AvatarGroup
                spacing="26"
                sx={{
                  justifyContent: "flex-start",
                }}
              >
                <Avatar alt="Sameer" src={ProfileLogo} />
                <Avatar alt="Tabish" src={Avatar1} />
                <Avatar alt="Kashif" src={Avatar2} />
              </AvatarGroup>
            </Box>
            <Button size="small" variant="outlined">
              Try Premium for PKR0
            </Button>
            <Typography variant="body2">
              1-month free trial. We’ll send you a reminder 7 days before your
              trial ends.
            </Typography>
          </Box>
        </Box>
        <hr />
        <Box className="mt-3 d-flex ">
          <img width="60px" height='60px' className="me-3" src={JobsImg1} alt="Jobs" />
          <Box>
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#0073b1", fontSize: { xs: "14px", sm: "16px" } }}>
              Associate Frontend Engineer (Fresh Graduates)
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "12px", sm: "14px" } }}>
              Softech Worldwide - Karachi Division, Sindh, Pakistan (On-site)
            </Typography>
            <Typography variant="caption">6 months ago</Typography>
          </Box>
        </Box>
        <Box>
          <hr />
          <Box className="mt-3 d-flex ">
            <img width="60px" height='60px' className="me-3" src={JobsImg1} alt="Jobs" />
            <Box>
              <Typography variant="body1"  sx={{ fontWeight: "bold", color: "#0073b1", fontSize: { xs: "14px", sm: "16px" } }}>
                UI / Front-End Developer
              </Typography>
              <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "12px", sm: "14px" } }}>
                Soliton Technologies - Lahore, Punjab, Pakistan (On-site)
              </Typography>
              <Typography variant="caption">1 week ago</Typography>
            </Box>
          </Box>
          <hr />
          <Box className="d-flex justify-content-center">
            <Button variant="outlined" className="fw-bold">
              Show all <ArrowForwardIcon />
            </Button>
          </Box>
        </Box>
      </Card>
      <Card className="rounded-3 shadow px-5 py-3 ">
        <CardContent>
          <Typography variant="h6" className="fw-bold">
            Hiring in your network
          </Typography>
          <Typography className="text-secondary" variant="body2">
            Jobs that people in your network are hiring for
          </Typography>
          <hr />
          <Box className="d-flex align-items-start mb-4">
            <Box className='me-3'>
              <img width='60' src={JobsImg3} alt="" />
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", color: "#0073b1", fontSize: { xs: "14px", sm: "16px" } }}>
                Dotnet Developerr
              </Typography>
              <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "12px", sm: "14px" } }}>
                Daily Tech Sol · Karachi Division, Sindh, Pakistan (On-site)
              </Typography>
              <Typography variant="body2" sx={{ color: "#777", fontSize: { xs: "12px", sm: "14px" } }}>
                Karachi Division, Sindh, Pakistan (On-site)
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 1 }}>
                <AvatarGroup
                  spacing="26"
                  sx={{
                    justifyContent: "flex-start",
                  }}
                >
                  <Avatar alt="Kashif" src={Avatar2} />
                  <Avatar alt="Sameer" src={ProfileLogo} />
                  <Avatar alt="Tabish" src={Avatar1} />
                </AvatarGroup>
              </Box>
              <Typography
                variant="caption"
                sx={{ fontSize: { xs: "10px", sm: "12px" } }}>
                Viewed Promoted Easy Apply
              </Typography>
            </Box>
            <Button
            size="small"
            sx={{
              color: "#555",
              marginLeft: "auto",
              display: { xs: "none", sm: "block" },
            }}>
            ✖
          </Button>
          </Box>
          <hr />
          <Box className="d-flex align-items-start mb-4">
            <Box className='me-3'>
              <img width='60' src={JobsImg4} alt="" />
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", color: "#0073b1", fontSize: { xs: "14px", sm: "16px" } }}>
                Frontend Developer
              </Typography>
              <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "12px", sm: "14px" } }}>
                ibex · Karāchi, Sindh, Pakistan (On-site)
              </Typography>
              <Typography variant="body2" sx={{ color: "#777", fontSize: { xs: "12px", sm: "14px" } }}>
                Karāchi, Sindh, Pakistan (On-site)
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 1 }}>
                <AvatarGroup
                  spacing="26"
                  sx={{
                    justifyContent: "flex-start",
                  }}
                >
                  <Avatar alt="Tabish" src={Avatar1} />
                  <Avatar alt="Kashif" src={Avatar2} />
                  <Avatar alt="Sameer" src={ProfileLogo} />
                </AvatarGroup>
              </Box>
              <Typography
                variant="caption"
                sx={{ fontSize: { xs: "10px", sm: "12px" } }}>
                Viewed Promoted Easy Apply
              </Typography>
            </Box>
            <Button
            size="small"
            sx={{
              color: "#555",
              marginLeft: "auto",
              display: { xs: "none", sm: "block" },
            }}>
            ✖
          </Button>
          </Box>
          <hr />
          <Box className="d-flex align-items-start mb-4">
            <Box className='me-3'>
              <img width='60' src={JobsImg5} alt="" />
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", color: "#0073b1", fontSize: { xs: "14px", sm: "16px" } }}>
                Full Stack Developer (Laravel+Vue.js)
              </Typography>
              <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "12px", sm: "14px" } }}>
                Hybrid Mediaworks · Islamabad, Islāmābād, Pakistan (On-site)
              </Typography>
              <Typography variant="body2" sx={{ color: "#777", fontSize: { xs: "12px", sm: "14px" } }}>
                Islamabad, Islāmābād, Pakistan (On-site)
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 1 }}>
                <AvatarGroup
                  spacing="26"
                  sx={{
                    justifyContent: "flex-start",
                  }}
                >
                  <Avatar alt="Sameer" src={ProfileLogo} />
                  <Avatar alt="Tabish" src={Avatar1} />
                  <Avatar alt="Kashif" src={Avatar2} />
                </AvatarGroup>
              </Box>
              <Typography
                variant="caption"
                sx={{ fontSize: { xs: "10px", sm: "12px" } }}>
                Promoted Easy Apply
              </Typography>
            </Box>
            <Button
            size="small"
            sx={{
              color: "#555",
              marginLeft: "auto",
              display: { xs: "none", sm: "block" },
            }}>
            ✖
          </Button>
          </Box>
          <hr />
          <Box className="d-flex justify-content-center">
            <Button variant="outlined" className="fw-bold">
              Show all <ArrowForwardIcon />
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Card className="rounded-3 shadow mb-2 px-5 py-3 mb-4">
        <Box className='mb-4'>
          <Typography variant="h6" className="fw-bold">
            More jobs for you
          </Typography>
          <Typography className="text-secondary" variant="body2">
            Based on your profile, preferences, and activity like applies, searches, and saves
          </Typography>
        </Box>
        <Box className="d-flex align-items-start mb-4">
          <Box className="me-3">
            <img width="60" src={JobsImg6} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#0073b1", fontSize: { xs: "14px", sm: "16px" } }}>
              Node.js Developer
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "12px", sm: "14px" } }}>
              AAG · Pakistan (Remote)
            </Typography>
            <Typography variant="body2" sx={{ color: "#777", fontSize: { xs: "12px", sm: "14px" } }}>
              Pakistan (Remote)
            </Typography>
            <Typography variant="caption" sx={{ fontSize: { xs: "10px", sm: "12px" } }}>
              2 weeks ago
            </Typography>
          </Box>
          <Button
            size="small"
            sx={{
              color: "#555",
              marginLeft: "auto",
              display: { xs: "none", sm: "block" },
            }}>
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className='me-3'>
            <img width='60' src={JobsImg7} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#0073b1", fontSize: { xs: "14px", sm: "16px" } }} >
              Full Stack Developer
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "12px", sm: "14px" } }}>
              Pakistan Hiring · Karāchi, Sindh, Pakistan
            </Typography>
            <Typography variant="body2" sx={{ color: "#777", fontSize: { xs: "12px", sm: "14px" } }}>
              Karāchi, Sindh, Pakistan
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: { xs: "10px", sm: "12px" } }}>
              3 weeks ago
            </Typography>
          </Box>
          <Button
            size="small"
            sx={{
              color: "#555",
              marginLeft: "auto",
              display: { xs: "none", sm: "block" },
            }}>
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className='me-3'>
            <img width='60' src={JobsImg8} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#0073b1", fontSize: { xs: "14px", sm: "16px" } }} >
              Remote Python Developer
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "12px", sm: "14px" } }}>
              Turing · Pakistan (Remote)
            </Typography>
            <Typography variant="body2" sx={{ color: "#777", fontSize: { xs: "12px", sm: "14px" } }}>
              Pakistan (Remote)
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: { xs: "10px", sm: "12px" } }}>
              Viewed Promoted
            </Typography>
          </Box>
          <Button
            size="small"
            sx={{
              color: "#555",
              marginLeft: "auto",
              display: { xs: "none", sm: "block" },
            }}>
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className='me-3'>
            <img width='60' src={JobsImg9} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#0073b1", fontSize: { xs: "14px", sm: "16px" } }} >
              Full Stack Engineer
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "12px", sm: "14px" } }}>
              Time Doctor · Pakistan (Remote)
            </Typography>
            <Typography variant="body2" sx={{ color: "#777", fontSize: { xs: "12px", sm: "14px" } }}>
              Pakistan (Remote)
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: { xs: "10px", sm: "12px" } }}>
              Viewed Promoted
            </Typography>
          </Box>
          <Button
            size="small"
            sx={{
              color: "#555",
              marginLeft: "auto",
              display: { xs: "none", sm: "block" },
            }}>
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className='me-3'>
            <img width='60' src={JobsImg10} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#0073b1", fontSize: { xs: "14px", sm: "16px" } }} > 
              Backend Software Engineer
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "12px", sm: "14px" } }}>
              Soum · Pakistan (Remote)
            </Typography>
            <Typography variant="body2"sx={{ color: "#777", fontSize: { xs: "12px", sm: "14px" } }}>
              Pakistan (Remote)
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: { xs: "10px", sm: "12px" } }}>
              1 month ago Easy Apply
            </Typography>
          </Box>
          <Button
            size="small"
            sx={{
              color: "#555",
              marginLeft: "auto",
              display: { xs: "none", sm: "block" },
            }}>
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className='me-3'>
            <img width='60' src={JobsImg11} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#0073b1", fontSize: { xs: "14px", sm: "16px" } }}>
              Software Engineer, MLOps
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "12px", sm: "14px" } }}>
              Motive · Pakistan (Remote)
            </Typography>
            <Typography variant="body2" sx={{ color: "#777", fontSize: { xs: "12px", sm: "14px" } }}>
              Pakistan (Remote)
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: { xs: "10px", sm: "12px" } }}>
              1 connection works here Promoted
            </Typography>
          </Box>
          <Button
            size="small"
            sx={{
              color: "#555",
              marginLeft: "auto",
              display: { xs: "none", sm: "block" },
            }}>
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className='me-3'>
            <img width='60' src={JobsImg4} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#0073b1", fontSize: { xs: "14px", sm: "16px" } }}>
              Mobile Application Developer
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "12px", sm: "14px" } }}>
              ibex · Lahore, Punjab, Pakistan (On-site)
            </Typography>
            <Typography variant="body2" sx={{ color: "#777", fontSize: { xs: "12px", sm: "14px" } }}>
              Lahore, Punjab, Pakistan (On-site)
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: { xs: "10px", sm: "12px" } }}>
              Promoted  Easy Apply
            </Typography>
          </Box>
          <Button
            size="small"
            sx={{
              color: "#555",
              marginLeft: "auto",
              display: { xs: "none", sm: "block" },
            }}>
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className='me-3'>
            <img width='60' src={JobsImg12} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#0073b1", fontSize: { xs: "14px", sm: "16px" } }}>
              Software Developer
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "12px", sm: "14px" } }}>
              Contour Software · Karāchi, Sindh, Pakistan (On-site)
            </Typography>
            <Typography variant="body2" sx={{ color: "#777", fontSize: { xs: "12px", sm: "14px" } }}>
              Karāchi, Sindh, Pakistan (On-site)
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: { xs: "10px", sm: "12px" } }}>
              4 months ago
            </Typography>
          </Box>
          <Button
            size="small"
            sx={{
              color: "#555",
              marginLeft: "auto",
              display: { xs: "none", sm: "block" },
            }}>
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className='me-3'>
            <img width='60' src={JobsImg13} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#0073b1", fontSize: { xs: "14px", sm: "16px" } }}>
              Senior Developer
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "12px", sm: "14px" } }}>
              Reliability Academy · Pakistan (Remote)
            </Typography>
            <Typography variant="body2" sx={{ color: "#777", fontSize: { xs: "12px", sm: "14px" } }}>
              Pakistan (Remote)
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: { xs: "10px", sm: "12px" } }}>
              Promoted
            </Typography>
          </Box>
          <Button
            size="small"
            sx={{
              color: "#555",
              marginLeft: "auto",
              display: { xs: "none", sm: "block" },
            }}>
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className='me-3'>
            <img width='60' src={JobsImg14} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#0073b1", fontSize: { xs: "14px", sm: "16px" } }}>
              Lead Sharepoint and MS365 Engineer
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "12px", sm: "14px" } }}>
              Afiniti · Karachi Division, Sindh, Pakistan (Hybrid)
            </Typography>
            <Typography variant="body2" sx={{ color: "#777", fontSize: { xs: "12px", sm: "14px" } }}>
              Karachi Division, Sindh, Pakistan (Hybrid)
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: { xs: "10px", sm: "12px" } }}>
              Promoted
            </Typography>
          </Box>
          <Button
            size="small"
            sx={{
              color: "#555",
              marginLeft: "auto",
              display: { xs: "none", sm: "block" },
            }}>
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className='me-3'>
            <img width='60' src={JobsImg15} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#0073b1", fontSize: { xs: "14px", sm: "16px" } }}        >
              React Native Developer
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "12px", sm: "14px" } }}>
              TekRevol · Karāchi, Sindh, Pakistan (On-site)
            </Typography>
            <Typography variant="body2" sx={{ color: "#777", fontSize: { xs: "12px", sm: "14px" } }}>
              Karāchi, Sindh, Pakistan (On-site)
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: { xs: "10px", sm: "12px" } }}>
              1 connection works here Viewed Easy Apply
            </Typography>
          </Box>
          <Button
            size="small"
            sx={{
              color: "#555",
              marginLeft: "auto",
              display: { xs: "none", sm: "block" },
            }}>
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className='me-3'>
            <img width='60' src={JobsImg16} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#0073b1", fontSize: { xs: "14px", sm: "16px" } }}>
              Android Developer
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "12px", sm: "14px" } }}>
              NymCard · Karāchi, Sindh, Pakistan (On-site)
            </Typography>
            <Typography variant="body2" sx={{ color: "#777", fontSize: { xs: "12px", sm: "14px" } }}>
              Karāchi, Sindh, Pakistan (On-site)
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: { xs: "10px", sm: "12px" } }}>
              3 months ago
            </Typography>
          </Box>
          <Button
            size="small"
            sx={{
              color: "#555",
              marginLeft: "auto",
              display: { xs: "none", sm: "block" },
            }}>
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className='me-3'>
            <img width='60' src={JobsImg17} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#0073b1", fontSize: { xs: "14px", sm: "16px" } }} >
              Senior Blockchain Developer
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "12px", sm: "14px" } }}>
              KalPay · Lahore, Punjab, Pakistan (Hybrid)
            </Typography>
            <Typography variant="body2" sx={{ color: "#777", fontSize: { xs: "12px", sm: "14px" } }}>
              Lahore, Punjab, Pakistan (Hybrid)
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: { xs: "10px", sm: "12px" } }}>
              Applicant review time is typically 1 day 2 weeks ago Easy Apply
            </Typography>
          </Box>
          <Button
            size="small"
            sx={{
              color: "#555",
              marginLeft: "auto",
              display: { xs: "none", sm: "block" },
            }}>
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className='me-3'>
            <img width='60' src={JobsImg18} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#0073b1", fontSize: { xs: "14px", sm: "16px" } }} >
              Senior Software Developer .NET + Angular
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "12px", sm: "14px" } }}>
              VeriPark · Pakistan (Remote)
            </Typography>
            <Typography variant="body2" sx={{ color: "#777", fontSize: { xs: "12px", sm: "14px" } }}>
              Pakistan (On-site)
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: { xs: "10px", sm: "12px" } }}>
              Promoted
            </Typography>
          </Box>
          <Button
            size="small"
            sx={{
              color: "#555",
              marginLeft: "auto",
              display: { xs: "none", sm: "block" },
            }}>
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className='me-3'>
            <img width='60' src={JobsImg19} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#0073b1", fontSize: { xs: "14px", sm: "16px" } }}>
              Software EngineerFULL TIME
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "12px", sm: "14px" } }}>
              SolutionInn · Lahore, Punjab, Pakistan (On-site)
            </Typography>
            <Typography variant="body2" sx={{ color: "#777", fontSize: { xs: "12px", sm: "14px" } }}>
              Lahore, Punjab, Pakistan (On-site)
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: { xs: "10px", sm: "12px" } }}>
              Viewed
            </Typography>
          </Box>
          <Button
            size="small"
            sx={{
              color: "#555",
              marginLeft: "auto",
              display: { xs: "none", sm: "block" },
            }}>
            ✖
          </Button>
        </Box>
        <hr />
        <Box className="d-flex align-items-start mb-4">
          <Box className='me-3'>
            <img width='60' src={JobsImg20} alt="" />
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#0073b1", fontSize: { xs: "14px", sm: "16px" } }}
            >
              React Native Developer
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "12px", sm: "14px" } }}>
              TekRevol · Karāchi, Sindh, Pakistan (On-site)
            </Typography>
            <Typography variant="body2" sx={{ color: "#777", fontSize: { xs: "12px", sm: "14px" } }}>
              Karāchi, Sindh, Pakistan (On-site)
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: { xs: "10px", sm: "12px" } }}>
              1 connection works here Viewed Easy Apply
            </Typography>
          </Box>
          <Button
            size="small"
            sx={{
              color: "#555",
              marginLeft: "auto",
              display: { xs: "none", sm: "block" },
            }}>
            ✖
          </Button>
        </Box>

      </Card>
    </Box>
  );
};

export default JobDetailsRightPage;