import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { AddCircleOutlineOutlined } from '@mui/icons-material'
import { Grid } from '@mui/material';

export default function Navbars() {


  return (
    <Grid container className='mynav'>
      <AppBar  >
        <Toolbar>
          <Grid item  xs={6} md={9} sm={9}>
          <Link to='/notes' className='nav-link'>
<Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1}}
          > 
            MY NOTES
          </Typography>
        </Link>    
          </Grid>
          <Grid item xs={6} md={3} sm={3}>
            <Link to='/create' className='nav-link'>
              <Typography>Create Note  <AddCircleOutlineOutlined/></Typography>
          </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}