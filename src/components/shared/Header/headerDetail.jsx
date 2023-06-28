import React from 'react'
import { 
  Menu, Box, IconButton, 
  List, MenuItem, ListItemButton,  
  styled, Link, Container,
  ListItem, ListItemIcon, ListItemText, 
  SwipeableDrawer,
  AppBar,
  Toolbar,  
} from '@mui/material'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/Inbox';
import ClearIcon from '@mui/icons-material/Clear';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import mobileLogo from "../../../assets/mobileLogo.png";
import companyLogo from "../../../assets/companyLogo.png";
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [openSubMenu, setOpenSubmenu] = React.useState(true);

  const [openMenu, setOpenMenu] =React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const location = useLocation();
  const { pathname } = location;

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = () => {
    setOpenSubmenu(!openSubMenu);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpenMenu(open);
  };

  const CustomMenuTypography = styled(Link)({
    fontWeight: 600,
    fontSize: "0.8rem",
    fontFamily: "Poppins",
    color: "#171819",
    textAlign: "center",
    textDecoration: "none",
    alignItems: "center",
    display: "flex"
  })

  const CustomMenuItemTypography = styled(Link)({
    fontWeight: 500,
    fontSize: "0.8rem",
    fontFamily: "Poppins",
    color: "#171819",
    textDecoration: "none",
    textAlign: "center",
    alignItems: "center",
    display: "flex"
  })

  const subMenu = [
    {
      name: "Careers",
      icon: <InboxIcon />,
      path: "/careers"
    },
    {
      name: "Our Team",
      icon: <InboxIcon />,
      path: "/teams"
    },
    {
      name: "News and Event",
      icon: <InboxIcon />,
      path: "/news"
    },
  ]

  const parentMobileMenu = [
    {
      name: "About Us",
      path: "/about"
    },
    {
      name: "Services",
      path: "/services"
    },
    {
      name: "Galleries",
      path: "/galleries"
    },
  ]

  const MobileMenu = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <List>
        <ListItemButton sx={{float: "right"}} onClick={toggleDrawer(false)}>
          <ListItemIcon >
            <ClearIcon sx={{marginLeft: "2rem"}} />
          </ListItemIcon>
        </ListItemButton>
        {
          parentMobileMenu.map((item, index) => 
            <ListItem key={index} disablePadding onClick={() => navigate(`${item.path}`)}>
              <ListItemButton >
                <ListItemText primary={item.name} sx={{ marginTop: "0.4rem", color: pathname === item.path ? "#F05C26" : "#171819"  }} />
              </ListItemButton>
            </ListItem>
          )
        }
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Company" 
            sx={{ 
                color: 
                      pathname === "/careers" || 
                      pathname === "/teams" || 
                      pathname === "/news" 
                ? "#F05C26" : "#171819"
              }} 
          />
          {openSubMenu ? <ExpandLess
              sx={{ 
                color: 
                      pathname === "/careers" || 
                      pathname === "/teams" || 
                      pathname === "/news" 
                ? "#F05C26" : "#171819"
              }} 
          /> : <ExpandMore 
              sx={{ 
                color: 
                      pathname === "/careers" || 
                      pathname === "/teams" || 
                      pathname === "/news" 
                ? "#F05C26" : "#171819"
              }} 
          />}
        </ListItemButton>
        <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {
              subMenu.map((item, index) => 
                <ListItemButton sx={{ pl: 4 }} key={index} onClick={() => navigate(`${item.path}`)}>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} sx={{ color: 
                  pathname === item.path 
                  ? "#F05C26" : "#171819"}}/>
                </ListItemButton>
              )              
            } 
          </List>
        </Collapse>
      </List>
    </Box>
  );

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" bgcolor="#FAFBFC" paddingY="1rem" sx={{
        paddingX: { xs: "1rem", sm: "1rem", md : "2rem" } 
      }}> 
        <Box sx={{ display: { md: "flex", sm: "none", xs: "none" }, cursor: "pointer" }} onClick={() => navigate('/')}>
          <img src={companyLogo} alt="this is company logo" height="auto" width="208px" />
        </Box>
        <AppBar
          sx={{
            display: { md: "none", sm: "flex", xs: "flex" }, 
            width: "100%",
          }}
        >
          <Toolbar
            sx={{
              display: { md: "none", sm: "flex", xs: "flex" }, 
              justifyContent:"space-between",
              alignItems: "center",
              background: "#FAFBFC", 
              position: "fixed",
              width: "100%",
              paddingX: "2rem" 
            }}
          >
            <Box onClick={() => navigate('/')}>
              <img src={mobileLogo} alt="this is company logo" />
            </Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 6, color: "black" }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon  />
            </IconButton>
            <SwipeableDrawer
              anchor="right"
              open={openMenu}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(false)}
            >
              <MobileMenu />
            </SwipeableDrawer>
          </Toolbar>
        </AppBar>
        <Box sx={{ display: { xs : "none", sm: "none", md: "flex"}}} width="25rem" justifyContent="space-between">
          <CustomMenuTypography href="/about" sx={{ color: pathname === "/about" ? "#F05C26" : "#171819"}}>
            About Us
          </CustomMenuTypography>
          <CustomMenuTypography href="/services" sx={{ color: pathname === "/services" ? "#F05C26" : "#171819"}}>
            Services
          </CustomMenuTypography>
          <CustomMenuTypography href="/galleries" sx={{ color: pathname === "/galleries" ? "#F05C26" : "#171819"}}>
            Gallery
          </CustomMenuTypography>

          <>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, "&:hover": {background: "none"} }}>
              <CustomMenuTypography marginRight=".3rem" sx={{ 
                  color: 
                        pathname === "/careers" || 
                        pathname === "/teams" || 
                        pathname === "/news"
                  ? "#F05C26" : "#171819"

                }}>Company</CustomMenuTypography>
              { 
                anchorElUser ? 
                <KeyboardArrowUpIcon 
                sx={{
                  color: 
                      pathname === "/careers" || 
                      pathname === "/teams" || 
                      pathname === "/news" 
                ? "#F05C26" : "#171819"
                }}
                  /> : 
                <KeyboardArrowDownIcon sx={{ 
                  color: 
                      pathname === "/careers" || 
                      pathname === "/teams" || 
                      pathname === "/news" 
                ? "#F05C26" : "#171819"
                }} />
              }
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMountanchorElUsered
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {subMenu.map((page, index) => (
                <MenuItem key={index}>
                  <CustomMenuItemTypography textAlign="center" href={page.path} sx={{ color: 
                  pathname === page.path 
                  ? "#F05C26" : "#171819"}} >{page.name}</CustomMenuItemTypography>
                </MenuItem>
              ))}
            </Menu>
          </>
        </Box>
      </Box>
    </Container>
  )
}

export default Header