import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#f0f0f0',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div 
        className="app"
        // style={{
        //   scrollSnapType: 'y proximity',
        //   height: '100vh',
        //   overflowY: 'auto',
        //   overflowX: 'hidden',
        //   scrollBehavior: 'smooth'
        // }}
      >
        <Header />
        <Hero />
        <Content />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
