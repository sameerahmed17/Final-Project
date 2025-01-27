import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import { Avatar, Button, Container } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ProfileLogo from "../assets/unnamed.jpg"
import { Link, Outlet } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: 0,
  width: '100%',
  maxWidth: '300px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function AppLayout() {
  return (
    <>
      <AppBar className='bg-white text-black shadow position-static py-2' sx={{ height: "200" }}>
        <Container maxWidth="xl">
          <Toolbar className='d-flex justify-content-center align-items-center'>
            {/* LinkedIn Icon */}
            <Avatar className="d-block d-sm-none"
              alt="Sameer Ahmed"
              src={ProfileLogo}
              sx={{ width: 40, height: 40, marginRight: 2 }}
            />
            <Button className="d-none d-sm-block">
              <LinkedInIcon sx={{ fontSize: '45px' }} />
            </Button>
            {/* Search Input */}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
            </Search>
            <IconButton
              size="large"
              color="inherit"
              sx={{
                display: { xs: 'flex', sm: 'none' },
              }}
            >
              <ChatIcon />
            </IconButton>

            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                gap: 4,
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: 1,
              }}
            >
              <Box className="d-flex flex-column align-items-center">
                <IconButton size="large" color="inherit">
                  <HomeIcon />
                </IconButton>
                <span style={{ fontSize: '12px', }}>Home</span>
              </Box>
              <Box className="d-flex flex-column align-items-center">
                <IconButton size="large" color="inherit">
                  <PeopleIcon />
                </IconButton>
                <span style={{ fontSize: '12px', }}>My Network</span>
              </Box>
              <Box className="d-flex flex-column align-items-center">
                <Link to="/jobs-details">
                  <IconButton size="large">
                    <WorkIcon />
                  </IconButton>
                </Link>
                <span style={{ fontSize: '12px', }}>Jobs</span>
              </Box>
              <Box className="d-flex flex-column align-items-center">
                <IconButton size="large" color="inherit">
                  <ChatIcon />
                </IconButton>
                <span style={{ fontSize: '12px', }}>Messaging</span>
              </Box>
              <Box className="d-flex flex-column align-items-center">
                <IconButton size="large" color="inherit">
                  <Badge badgeContent={1} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <span style={{ fontSize: '12px', }}>Notifications</span>
              </Box>
              <Box className="d-flex flex-column align-items-center">
                <Link to="/profile-details">
                  <Avatar
                    alt="Sameer Ahmed"
                    src={ProfileLogo} />
                </Link>
                <span style={{ fontSize: '12px', }}>Me</span>
              </Box>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}