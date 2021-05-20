import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, CircularProgress, Button, CardActionArea, Card, CardMedia } from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '60%',
    spacing: 18,
  },
  media: {
    height: '200px',
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

const Characters = () => {

  const classes = useStyles();


  const [characters, setCharacters] = useState([]);
  // eslint-disable-next-line
  const [currentPage, setCurrentPage] = useState(1);
  // const [charactersPerPage, setCharactersPerPage] = useState(20);

  useEffect(() => {
    const fetchCharacter = ()=>{
      fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
    }
    fetchCharacter();
  }, [currentPage])

  // const indexOfLastCharacter = currentPage*charactersPerPage;
  // const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage

  const history = useHistory();
  const showCharacters = id => {
    history.push(`character/${id}`)
  }

// const handleClick = e =>{
//   console.log(e);
// }

  return (
    <div style={{ paddingBottom: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Characters</h1>
      {
        characters.length ?
          <div>
            {characters.map(image =>
              <Card style={{ backgroundColor: 'rgba(60,62,68,1)', margin: '20px auto 0 auto' }} className={classes.root}>

                <CardActionArea style={{ display: 'flex' }}>
                  <Grid item xs={12} sm={6}>
                    <CardMedia
                      className={classes.media}
                      image={image.image}
                      title={image.name}
                    />

                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <h1 style={{ color: 'white', paddingLeft: '10px', textAlign: 'left' }}>{image.name}</h1>
                    <Button onClick={() => showCharacters(image.id)} color='secondary'>Know More</Button>
                  </Grid>
                </CardActionArea>
              </Card>
            )}
            {/* <div className={classes.pagination}>
              <Pagination count={34} variant="outlined" color="secondary"  />
            </div> */}
          </div>
          :
          <div className={classes.spinner}>
            <CircularProgress style={{ marginLeft: 'auto', marginRight: 'auto', width: '5%', marginBottom: '10%' }} className='' color="secondary" />
          </div>
      }


    </div>
  );
};

export default Characters;