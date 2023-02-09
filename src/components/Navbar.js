import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
// const drawerWidth = 240;
// const navItems = ['Home', 'Profile', 'Login'];



const theme = createTheme({
  palette: {
    primary: {
      main: '#683B2B',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

function DrawerAppBar(props) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
  
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            CRAVE and FEAST
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button href="/home" sx={{ color: '#fff' }}>Home</Button>
              <Button href="/profile"sx={{ color: '#fff' }}>Profile</Button>
              <Button href="/login"sx={{ color: '#fff' }}>Logout</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const Navbar = () => {
  return (
    <div>
      <DrawerAppBar/>
      </div>
  )
}

export default Navbar