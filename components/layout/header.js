import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function DenseAppBar({ children }) {
  return (
    <React.Fragment>
      <Box sx={ { flexGrow: 1 } }>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              Explore the worlds Holidays
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      { children }
    </React.Fragment>
  );
}
