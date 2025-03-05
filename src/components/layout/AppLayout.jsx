import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import ChatIcon from "@mui/icons-material/Chat";
import { Avatar, Button, Container, Modal, TextField, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ProfileLogo from "../assets/unnamed.jpg";
import { Link, Outlet } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Home, People, Work } from "@mui/icons-material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import useProfilePage from "../profile-details/profile-sections/useProfilePage";
import usePostSection from "../home/Sections/usePostSection";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: 0,
  width: "100%",
  maxWidth: "300px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function AppLayout() {
  const { avatar, } = useProfilePage()
  
  const { handleOpen, handleClose, setNewPostContent, newPostContent, handleImageChange, imagePreview, handlePost, open } = usePostSection()
  return (
    <>
     <AppBar
  className="bg-white text-black shadow py-2"
  sx={{ position: "sticky", top: 0, zIndex: 1100 }}
>
        <Container maxWidth="xl">
          <Toolbar className="d-flex justify-content-center align-items-center">
            <Link to='/profile-details'>
              <Avatar
                className="d-block d-sm-none me-3"
                alt="Sameer Ahmed"
                src={ProfileLogo}
              />
            </Link>
            <Button className="d-none d-sm-block">
              <LinkedInIcon sx={{ fontSize: "45px" }} />
            </Button>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <IconButton
              className="d-block d-sm-none"
              size="large"
              color="inherit"
            >
              <ChatIcon />
            </IconButton>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                gap: 4,
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
              }}
            >

              <Box className="d-flex flex-column align-items-center">
                <Link to='/'>
                  <IconButton size="large" className="text-black" color="inherit">
                    <HomeIcon />
                  </IconButton>
                </Link>
                <Typography variant="body1" sx={{ fontSize: "12px" }}>
                  Home
                </Typography>
              </Box>
              <Box className="d-flex flex-column align-items-center">
                <IconButton size="large" color="inherit">
                  <PeopleIcon />
                </IconButton>
                <Typography variant="body1" sx={{ fontSize: "12px" }}>
                  Network
                </Typography>
              </Box>
              <Box className="d-flex flex-column align-items-center">
                <Link to="/jobs-details">
                  <IconButton className="text-black" size="large">
                    <WorkIcon />
                  </IconButton>
                </Link>
                <Typography variant="body1" sx={{ fontSize: "12px" }}>
                  Jobs
                </Typography>
              </Box>
              <Box className="d-flex flex-column align-items-center">
                <IconButton size="large" color="inherit">
                  <ChatIcon />
                </IconButton>
                <Typography variant="body1" sx={{ fontSize: "12px" }}>
                  Messaging
                </Typography>
              </Box>
              <Box className="d-flex flex-column align-items-center">
                <IconButton size="large" color="inherit">
                  <Badge badgeContent={1} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <Typography variant="body1" sx={{ fontSize: "12px" }}>
                  Notifications
                </Typography>
              </Box>
              <Box className="d-flex flex-column align-items-center">
                <Link to="/profile-details" sx={{ cursor: 'pointer', }}>
                  <Avatar src={avatar} />
                </Link>
                <Typography
                  variant="body1"
                  className="mt-2"
                  sx={{ fontSize: "12px" }}
                >
                  Me
                </Typography>
              </Box>
            </Box>
            <BottomNavigation
              showLabels
              sx={{
                display: { xs: "flex", sm: "none" },
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "white",
                zIndex: 1000,
                borderTop: "1px solid #ddd",
              }}
            >
              <BottomNavigationAction label="Home" icon={<Home />} component={Link} to="/" />
              <BottomNavigationAction label="Network" icon={<People />} />
              <BottomNavigationAction onClick={handleOpen} label="Post" icon={<AddBoxIcon />} />
              <BottomNavigationAction label="Jobs" icon={<Work />} component={Link} to="/jobs-details" />
            </BottomNavigation>
          </Toolbar>
        </Container>
      </AppBar>
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
      <Outlet />
    </>
  );
}
