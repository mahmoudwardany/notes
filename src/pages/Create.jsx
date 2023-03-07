import { Button,FormControl,FormControlLabel,FormLabel,Radio,RadioGroup,TextField,Typography } from '@mui/material'
import React, {  useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Container } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../feature/posts';
import { useNavigate } from 'react-router-dom';
import Navbars from '../components/Navbars';
import '../index.css'



const Create = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const posts=useSelector((state)=> state.posts.items)

    const [title, setTitle] = useState('')
    const [desc, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [cat,setCategory]=useState('todos')

    const handleSubmit = (post) => {
      setTitleError(false)
      setDetailsError(false)
      dispatch(addPost(post))
      navigate('/notes')
    }

  return (
    <>
    <Navbars/>
    <Container>
              
        <Typography
        variant='h2'
        color='textSecondary'
        align='center'
        >
            Create a New Note
        </Typography>
        <form noValidate autoComplete='off' 
        
        >
<TextField
error={title===''?true:false}
label='Note Title'
required
color='primary'
variant='outlined'
fullWidth
sx={{ mt: 2 }}
onChange={(e)=> setTitle(e.target.value)}

/>
<TextField
error={desc===''?true:false}

fullWidth
label='Note Description'
required
color='primary'
variant='outlined'
multiline
rows={4}
sx={{ mt: 2,mb:2 }}
onChange={(e)=> setDetails(e.target.value)}
/>
<FormControl>
  <FormLabel >Note Category</FormLabel>
  <RadioGroup value={cat} onChange={(e)=>setCategory(e.target.value)}>
  <FormControlLabel value="todos" control={<Radio />} label="Todos" />
    <FormControlLabel value="work" control={<Radio />} label="Work" />
    <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
    <FormControlLabel value="others" control={<Radio />} label="Others" />
  </RadioGroup>
</FormControl>
<br/>

<Button
onClick={()=>handleSubmit({id:Date.now(),title,desc,cat})}
        color='primary'
        variant='contained'
        disableElevation
        endIcon={<SendIcon fontSize='large' />}
        >
            Submit
        </Button>
        </form>
        
    </Container>
    </>
  )
}

export default Create