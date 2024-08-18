import React from 'react'
import { Container, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ThanksPage: React.FC = () => {
  const navigate = useNavigate()

  const handleBackToHome = () => {
    navigate('/')
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Thank You!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Your message has been successfully submitted. We will get back to you
        shortly.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleBackToHome}>
        Back to Home
      </Button>
    </Container>
  )
}

export default ThanksPage
