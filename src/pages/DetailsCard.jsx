import { DeleteOutline } from '@mui/icons-material';
import { Button, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import React from 'react'

import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { removePosts } from '../feature/posts';
import '../index.css'
const DetailsCard = () => {
  const location = useLocation();
  const post = location.state;
 
const dispatch=useDispatch()
  return (
    <Grid item xs={12} md={12} mt={5} mb={5} 
    sx={{ textAlign:"center",
    margin:"20px auto",
    width: 500
  }}
  
    >
    <Card sx={{ maxWidth: 345 }}>
    <CardHeader
      action={
        <IconButton onClick={()=>dispatch(removePosts(post))}
        >
          <DeleteOutline />
        </IconButton>
      }
      title={post.title}
      subheader={post.cat}
    />
    <CardContent  >
      <Typography >
        {post.desc}
        </Typography>
    </CardContent>
    <Link to={'/notes'}  className='nav-link'>
    <Button variant='contained' color='primary' className='mb-2'>Back to  Notes</Button>
      </Link>
    </Card>
    </Grid>
  )
}

export default DetailsCard