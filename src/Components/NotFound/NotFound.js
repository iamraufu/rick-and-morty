import './NotFound.css';
import React from 'react';
import { Button } from '@material-ui/core';

const NotFound = () => {
      return (
            <div style={{textAlign:'center',color:'#f50057'}} className='undefined-container'>
                  <Button color='secondary' className='' />
                  <h1 className='text-secondary' style={{fontSize:'8rem'}}>4 0 4</h1>
                  <h2>There's Nothing Here...</h2>
                  <p>Maybe the page you're looking for is not found or never existed</p>
                  <Button style={{margin:'0 auto',display:'flex'}} className='hvr-sweep-to-bottom'><a style={{textDecoration:'none',color:'white'}} href="/">Go Home</a></Button>
            </div>
      );
};

export default NotFound;