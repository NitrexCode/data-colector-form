import React from 'react'
import { Container, Typography, Grid, Box } from '@mui/material'

import { Form } from '../components'

const HomePage: React.FC = () => {
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
        boxShadow: 3,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
            className="bg-image homepage"
          ></Box>
        </Grid>
        <Grid item xs={12} md={6} alignContent={'center'}>
          <Box p={2}>
            <Typography variant="h4" component="h1" gutterBottom>
              Add to storage
            </Typography>
            <Form />
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePage
