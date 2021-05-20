import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, CardActionArea, Card, Button, CardMedia, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
      root: {
        maxWidth: '80%',
        spacing: 18,
      },
      media: {
        height: '300px',
        width: '200px'
      },
      spinner: {
        display: 'flex',
        '& > * + *': {
          marginLeft: theme.spacing(2),
        }
      },
      pagination: {
        marginTop: '40px',
        justifyContent: 'center',
        display: 'flex',
        "& .MuiPaginationItem-root": {
          color: "#fff"
        }
      }
    }));

const CharacterDetails = () => {
      const classes = useStyles();
      const { id } = useParams()

      const [character, setCharacter] = useState([]);
      // const [currentPage, setCurrentPage] = useState(1);

      useEffect(() => {
            
            //   fetch('https://rickandmortyapi.com/api/character?page=1')
              fetch(`https://rickandmortyapi.com/api/character/${id}`)
              .then(response => response.json())
              .then(data => setCharacter(data))
            }, [id])
            

      return (
            <div style={{backgroundColor:'#1a202c',height:'100vh'}}>
                  <Box align='center' color='white' pt={5}>
                  Character details
                  </Box>
                  
              <Card style={{ backgroundColor: 'rgba(60,62,68,1)', margin: '20px auto 0 auto' }} className={classes.root}>

                <CardActionArea style={{ display: 'flex' }}>
                  <Grid item xs={12} sm={6}>
                    <CardMedia
                      className={classes.media}
                      image={character.image}
                      title={character.name}
                    />

                  </Grid>
                  <Grid item xs={12} sm={6} align='left' color='white'> 
                        <h1>{character.name}</h1>
                        <h3>Gender: {character.gender}</h3>
                        <h3>Status: {character.status}</h3>
                        <h3>Species: {character.species}</h3>
                  </Grid>
                </CardActionArea>
              </Card>
                    <Button style={{margin:'0 auto',display:'flex',marginTop:'40px'}} className='hvr-sweep-to-bottom'><a style={{textDecoration:'none',color:'white'}} href="/">Go Home</a></Button>
            </div>
      );
};

export default CharacterDetails;