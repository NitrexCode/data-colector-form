import React from 'react'
import { Container, Typography, Grid, Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import './Pages.css'

const ThanksPage: React.FC = () => {
  const navigate = useNavigate()

  const handleBackToHome = () => {
    navigate('/')
  }

  return (
    <Container
      maxWidth="lg"
      className="page_container"
      disableGutters
      sx={{
        maxWidth: {
          xs: '100%',
          sm: '70%',
          md: '60%',
        },
        marginRight: 'auto',
        marginLeft: 'auto',
      }}
    >
      <Grid container spacing={2} position={'relative'}>
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
            className="bg-image thanks"
          />
        </Grid>
        <Grid item xs={12} md={6} alignContent={'center'}>
          <Box p={2}>
            <Typography variant="h4" component="h1" gutterBottom>
              Thank You!
            </Typography>
            <Typography variant="body1" gutterBottom>
              Your message has been successfully submitted. We will get back to
              you shortly.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleBackToHome}
            >
              Back to Home
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ThanksPage
