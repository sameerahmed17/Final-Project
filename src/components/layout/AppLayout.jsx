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
import { Button, Container } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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

export default function Navbar() {
  const [value, setValue] = React.useState(0);
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        color: 'black',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* LinkedIn Icon */}
          <Button className='bg-primary'>
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

          {/* Icons (hide on small screens) */}

          {/* <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="My Network" icon={<PeopleIcon />} />
        <BottomNavigationAction label="Jobs" icon={<WorkIcon />} />
        <BottomNavigationAction label="Messaging" icon={<ChatIcon />} />
        <BottomNavigationAction label="Notifications" icon={<NotificationsIcon />} />
      </BottomNavigation>
    </Box> */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              gap: 2,
              justifyContent: 'center',
              alignItems: 'center',
              flexGrow: 1,
            }}
          >
            <IconButton size="large" color="inherit">
              <HomeIcon />
            </IconButton>
            <IconButton size="large" color="inherit">
              <PeopleIcon />
            </IconButton>
            <IconButton size="large" color="inherit">
              <WorkIcon />
            </IconButton>
            <IconButton size="large" color="inherit">
              <ChatIcon />
            </IconButton>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={1} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
