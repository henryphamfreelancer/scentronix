"use client";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useState, MouseEvent } from 'react';
import { Drawer } from '@mui/material';

const pages = ['Shop', 'Receipts', 'Learn', 'About', 'Blog'];
const subMenu = ['Categories', 'Collections', 'Resource']

export function ResponsiveAppBar() {
  const [open, setOpen] = useState<boolean>(false)


  const handleOpenNavMenu = () => {
    setOpen(true)
  };

  const handleCloseNavMenu = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static" sx={{boxShadow: 'none'}}>
      <Box sx={{
        background: 'white',
      }}>
      ` <Container maxWidth="xl">
          <Toolbar disableGutters>
              <Box
                component="img"
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  width: '40px',
                }}
                alt="The house from the offer."
                src="/logo.png"
              />
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                  
                >
                  <MenuIcon color="primary" />
                </IconButton>

                <Drawer anchor="right" open={open} onClose={handleCloseNavMenu}>
                  <Box sx={{display: "flex", flexDirection: "column"}}>

                  <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', width: 300 }}>
                    {pages.map((page) => (
                      <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{
                          my: 2,
                          color:
                          '#050404',
                          display: 'block',
                          borderRadius: 0,
                          borderBottom: page === 'Receipts' ? '2px solid red' : 0
                        }}
                      >
                        {page}
                      </Button>
                    ))}
                  </Box>
                  <Box sx={{height: "1px", width: '100%', backgroundColor: 'black'}} />
                  <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', width: 300 }}>
                    {subMenu.map((page) => (
                      <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: '#050404',  display: 'block' }}
                      >
                        {page}
                      </Button>
                    ))}
                  </Box>
                  </Box>

                </Drawer>
              </Box>
            <Box sx={{ flexGrow: 1, paddingLeft: '100px', display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: '#050404',  display: 'block', borderRadius: 0, borderBottom: page === 'Receipts' ? '2px solid red' : 0 }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>`
      </Box>
      <Box sx={{
        background: '#f3f3f3',
        display: {xs: 'none', md: 'flex'}
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display: 'flex', alignItems: 'flex-end'}}>
          <Box
            component="img"
            sx={{
              width: '100px',
              display: { xs: 'none', md: 'flex' },
              position: 'absolute'
            }}
            alt="The house from the offer."
            src="/logo.png"
          />
          <Box sx={{ flexGrow: 1, paddingLeft: '100px', display: { xs: 'none', md: 'flex',  } }}>
            {subMenu.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#050404',  display: 'block', borderRadius: 'none' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
      </Box>
    </AppBar>
  );
}
