import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Hero = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #2b328d 100%)',
        mt: 8,
        scrollSnapAlign: 'start',
        // scrollSnapStop: 'always'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            Demystifying Tariffs
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ mt: 4, mb: 4 }}
          >
            A comprehensive analysis of tariffs, their impact on global trade,
            and their role in modern economic policy.
          </Typography>
          <Typography 
          sx={{
            fontStyle: 'italic',
            textAlign: 'center'
          }}>
            By Raman Butta
          </Typography>
          
          <Box textAlign="center" mt={2}>
            <Button variant="contained"
              size="large" 
              endIcon={<NavigateNextIcon />} 
              href="https://mises.org/mises-wire/demystifying-tariffs"
              target = "_blank"
              rel = "noopener noreferer"
              >
                Original Article
             </Button>
          </Box>
          
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 