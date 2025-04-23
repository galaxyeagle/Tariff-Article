import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  return (
    <Container>
      <AppBar 
        position="fixed" 
        color="primary" 
        elevation={0}
        sx={
          {
            zIndex: 0,
            left: 0,
            right: 0,
            overflowX: 'hidden',
          }
        }
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1, textAlign: "center" }}>
            <TypeAnimation
              sequence={[
                'Article',
                2000,
                'Presentation',
                2000,
                'Executive Reports',
                2000,
                'All Documents',
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ 
                fontSize: '1.25rem', 
                fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                fontWeight: 500
              }}
              repeat={Infinity}
              cursor={true}
            />
            <Typography 
              component="span" 
              sx={{ 
                fontSize: '1.25rem',
                ml: 1
              }}
            >
              wrapped in an &lt;App /&gt;
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;