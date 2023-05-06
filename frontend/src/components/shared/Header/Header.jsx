import React from 'react'
import { Typography, Menu, Box, IconButton, MenuItem, styled } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const Header = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const CustomMenuTypography = styled(Typography)({
    fontWeight: 600,
    fontSize: "0.8rem",
    fontFamily: "Poppins",
    color: "#171819",
    textAlign: "center",
    alignItems: "center",
    display: "flex"
  })

  const CustomMenuItemTypography = styled(Typography)({
    fontWeight: 500,
    fontSize: "0.8rem",
    fontFamily: "Poppins",
    color: "#171819",
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
    <Box display="flex" justifyContent="space-between" bgcolor="#FAFBFC" padding="1rem 2rem"> 
      <Box>
        <Typography
          color="#F05c26"
          fontSize="2rem"
          fontWeight="600"
          fontFamily="Poppins"
        >
          Numeric Mind
        </Typography>
      </Box>
      <Box display="flex" width="20rem" justifyContent="space-between">
        <CustomMenuTypography>
          About Us
        </CustomMenuTypography>
        <CustomMenuTypography>
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
  )
}

export default Header