import {  Button, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import CardNotes from '../components/CardNotes'
import Navbars from '../components/Navbars'
import { clear } from '../feature/posts'

const Notes = () => {
  const posts=useSelector((state)=> state.posts.items)
const [search, setSearch] = useState('');
const dispatch=useDispatch()
  return (
    <>
    <Navbars/>
    <Container>
    <Grid item xs={12} md={4} sm={6} mt={5} mb={5} 
    sx={{ width: 1/2,   textAlign:"center",
    margin:"20px auto" }}
    >
      {
        posts.length > 0? (
          <form className='myinput row'>
        
      <input 
        type={'text'}
              name=''
              className='form-control col-md-6 bg-light  mx-auto'
              variant='dark'
              placeholder='search by title...'
              onChange={(e) => setSearch(e.target.value)}
/>
<Button variant='contained'color='error'
onClick={()=>dispatch(clear())}
className='col-md-5 mt-2 mx-auto'
>Clear Notes</Button>
      </form>  
        ):
        <Typography variant='h2' color='GrayText'>PlEASE ADD ONE NOTE AT LEAST</Typography>
      }
    
          </Grid>
    <Grid container textAlign='center' spacing={2} mt={5} 
      sx={{
        margin:"auto"
      }}
    >
      {posts.filter((post) => {
                return search.toLowerCase() === ''
                  ? post
                  : post.title.toLowerCase().includes(search);
              }).map(post=> (
<Grid item xs={12} md={4} sm={6} key={post.id}  >
 <CardNotes post={post}/>
  </Grid>
    ) )}
    </Grid>
    </Container>
    </>
  )
}

export default Notes