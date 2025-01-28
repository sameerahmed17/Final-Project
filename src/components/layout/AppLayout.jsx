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
import { Avatar, Button, Container, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ProfileLogo from "../assets/unnamed.jpg";
import { Link, Outlet } from "react-router-dom";

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
  return (
    <>
      <AppBar
        className="bg-white text-black shadow position-static py-2"
      >
        <Container maxWidth="xl">
          <Toolbar className="d-flex justify-content-center align-items-center">
            <Avatar
              className="d-block d-sm-none me-3"
              alt="Sameer Ahmed"
              src={ProfileLogo}
            />
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
                <IconButton size="large" color="inherit">
                  <HomeIcon />
                </IconButton>
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
                  <IconButton size="large">
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
                <Link to="/profile-details">
                  <Avatar alt="Sameer Ahmed" src={ProfileLogo} />
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
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}
