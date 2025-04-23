import { Box, Typography, Container, Link } from '@mui/material';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.primary.main
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2" color="white">
            © {new Date().getFullYear()} Demystifying Tariffs - Article by Raman Butta.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: { xs: 2, md: 0 } }}>
            <Link href="https://x.com/RamanButta1" 
            color="white" 
            underline="none" 
            target = "_blank"
            rel = "noopener noreferer"
            >
              <XIcon />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 