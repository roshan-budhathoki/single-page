import React from 'react'
import { Typography, Menu, Box, IconButton, MenuItem, styled, Link, Container } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon from '@mui/icons-material/Menu';

import mobileLogo from "../../../assets/mobileLogo.png";
import companyLogo from "../../../assets/companyLogo.png";

const Header = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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

  const CustomMenuItemTypography = styled(Typography)({
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
      name: "Carrer",
      url: "/carrer"
    },
    {
      name: "Our Team",
      url: "/Our Team"
    },
    {
      name: "News and Event",
      url: "/news"
    },
  ]

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" bgcolor="#FAFBFC" paddingY="1rem" sx={{
        paddingX: { xs: "1rem", sm: "1rem", md : "2rem" }
      }}> 
        <Box sx={{ display: { md: "flex", sm: "none", xs: "none" } }}>
          <img src={companyLogo} alt="this is company logo" />
        </Box>
        <Box sx={{ 
          display: { md: "none", sm: "flex", xs: "flex" }, 
          justifyContent:"space-between",
          alignItems: "center",
          width: "100%" 
        }}>
          <Box>
            <img src={mobileLogo} alt="this is company logo" />
          </Box>
          <MenuIcon />
        </Box>
        <Box sx={{ display: { xs : "none", sm: "none", md: "flex"}}} width="20rem" justifyContent="space-between">
          <CustomMenuTypography href="/about">
            About Us
          </CustomMenuTypography>
          <CustomMenuTypography href="/services">
            Services
          </CustomMenuTypography>
          <>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, "&:hover": {background: "none"} }}>
              <CustomMenuTypography marginRight=".3rem">Company</CustomMenuTypography>
              { 
                anchorElUser ? <KeyboardArrowUpIcon sx={{ color: "#171819"}}/> : <KeyboardArrowDownIcon sx={{ color: "#171819"}} />
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
              {subMenu.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseUserMenu}>
                  <CustomMenuItemTypography textAlign="center">{page.name}</CustomMenuItemTypography>
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