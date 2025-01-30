import { Container, Box, Typography, Button, CssBaseline, AppBar, Toolbar } from '@mui/material';

const LandingPage = () => {
  return (
    <>
      <CssBaseline />
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Double D</Typography>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url(https://via.placeholder.com/1920x600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container textAlign="center" sx={{ color: 'white' }}>
          <Typography variant="h3" gutterBottom>
            Welcome to Double D
          </Typography>
          <Typography variant="h5" paragraph>
            Your go-to destination for all things related to the world of ads and content.
          </Typography>
          <Button variant="contained" color="primary" size="large" href="/learn-more">
            Learn More
          </Button>
        </Container>
      </Box>

      {/* Information Section */}
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Get Started with Ads
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Discover how you can leverage ads.txt to make your website ready for ad monetization.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Button variant="outlined" href="/ads.txt" target="_blank">
            View Ads.txt File
          </Button>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ py: 3, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <Typography variant="body2">
          © 2025 Double D. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default LandingPage;
