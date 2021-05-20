import './Home.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';
import { Box, Container, Grid, Typography,Button } from '@material-ui/core';
import Characters from '../Characters/Characters';
import rnm from '../../images/r&m.jpg';
import Footer from '../Footer/Footer';

const Home = () => {

      const useStyles = makeStyles((theme) => ({
            root: {
                  flexGrow: 1,
            },
            paper: {
                  padding: theme.spacing(2),
                  textAlign: 'center',
                  color: theme.palette.text.secondary,
            },
      }));

      const classes = useStyles();

      const handleClick =()=>{
            
      }

      return (

            <div className='main-container'>

                  <Typography variant="h3" component="h3" gutterBottom align="center">
                        <Box pt={3}> The Rick and Morty</Box>
                  </Typography>

                  <div className={classes.root}>
                        <Grid container justify="center" mt={5} spacing={3}>
                              <img style={{ maxWidth: '100%', height: 'auto', margin: '0 auto' }} src={rnm} alt="" />
                        </Grid>
                        <Container maxWidth="md">
                              <Characters />
                        </Container>
                  </div>
                  <Button onClick={()=>handleClick()} style={{margin:'0 auto',display:'flex',marginTop:'40px',color:'white'}} className='hvr-sweep-to-bottom'>See More</Button>
                  <Footer />
            </div>
      );
};

export default Home;