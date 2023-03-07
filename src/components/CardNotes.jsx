import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, IconButton, Typography } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import { removePosts } from '../feature/posts';
import { Link } from 'react-router-dom';

const CardNotes = ({post}) => {
  const dispatch=useDispatch()

  return (
    <div>
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
      <Link to={`${post.title}`} state={post} className='nav-link'>
      <Button variant='contained' color='secondary' className='mb-2'>View Details</Button>
        </Link>
      </Card>
    </div>
  )
}

export default CardNotes