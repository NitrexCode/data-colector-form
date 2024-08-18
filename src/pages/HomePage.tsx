import React from 'react'
import { Container, Typography } from '@mui/material'

import { Form } from '../components'

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Us
      </Typography>
      <Form />
    </Container>
  )
}

export default HomePage
