import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import * as React from 'react';

export default function DenseAppBar({ children }, props) {
  const router = useRouter();

  const navigate = () => {
    router.back();
  };

  return (
    <React.Fragment>
      <Box sx={ { flexGrow: 1 } }>
        <AppBar position="static">
          <Toolbar variant="dense">
            { router.route !== '/' &&
            <IconButton
              onClick={ navigate }
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={ { mr: 2 } }
            >
              <ArrowBackIosNewIcon/>
            </IconButton>
            }
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
