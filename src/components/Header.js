import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";




const drawerWidth = 240;



function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  // const drawerWidth = 240;


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navitems = (<>
    <ListItem disablePadding>
      <ListItemButton sx={{ textAlign: 'left' }} onClick={() => { navigate('/') }}>
        <ListItemText primary={"Home"} />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton sx={{ textAlign: 'left' }} className="btn dropdown-toggle" type='button'
        id="dropdownMenu2" data-bs-toggle="dropdown" >
        <ListItemText primary={"aboutUs"} />
      </ListItemButton>
      <List className="dropdown-menu " style={{ borderRadius:"0PX", height:"30vh", justifyContent:"center"}} >
          <ListItem  >
          <a className='dropdown-item'  href='aboutUs'> aboutUs </a> 
          </ListItem>
          <ListItem className=" text-dark">
          <a className='dropdown-item' href="aboutUs"> Historical Background </a> 
          </ListItem>
          <ListItem
            className="text-dark">
             <a className='dropdown-item' href="aboutUs"> Mission & Vision </a> 
          </ListItem>
          <ListItem className=" text-secondary">
          <a className='dropdown-item' href='management'>Leadership & staff </a> 
          </ListItem>
        </List>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton sx={{ textAlign: 'left' }}  onClick={() => { navigate('/contact') }}>
        <ListItemText primary={"contactUS"} />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton sx={{ textAlign: 'left' }} onClick={() => { navigate('/gallery') }}>
        <ListItemText primary={"Gallery"} />
      </ListItemButton>
    </ListItem>
     
    <ListItem disablePadding >
      <ListItemButton sx={{ textAlign: 'left' }}  className="btn dropdown-toggle " type='button'
        id="dropdownMenu2" data-bs-toggle="dropdown">
        <ListItemText primary={"Admission"} />
      </ListItemButton>
      <List className="dropdown-menu " style={{ borderRadius:"0PX", height:"30vh", justifyContent:"center"}}  >
          <ListItem  >
          <a className='dropdown-item' href='programs'> Programs </a> 
          </ListItem>
          <ListItem className=" text-dark">
          <a className='dropdown-item'  href='programs'> Entry Requirements </a> 
          </ListItem>
          {/* <ListItem
            className="text-dark">
             <a className='dropdown-item'> Fees </a> 
          </ListItem> */}
          <ListItem className=" text-light">
          <a className='dropdown-item '  href='programs'> <strong>Apply Now</strong> </a> 
          </ListItem>
        </List>
    </ListItem>

    {/* <ListItem disablePadding >
      <ListItemButton sx={{ textAlign: 'left' }}  className="btn " type='button' onClick={() => { navigate('/aboutUs') }}
        >
        <ListItemText primary={"Apply Now"} />
      </ListItemButton>
    </ListItem> */}
  </>);



  const drawer = (
    <Box sx={{ textAlign: 'center',  color:"black" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        ACTS
      </Typography>
      <Divider />
      <List sx={{ display: "block" }}>
        {navitems}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
     
      <AppBar component="nav" elevation={1} color='secondary'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ display: { xs: "block", lg: 'none', xl: "none" } }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: { xs: 'centre', lg: 'left', xl: "left", md: "center" } }}
          >
            ACTS
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <List sx={{ display: { xs: "none", lg: 'flex', xl: "flex" } }}>
              {navitems}
            </List>
          </Box>
          {/* <Toolbar /> */}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}

          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>


      </Box>
    </Box>
  )
}

export default Header