import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../store/AppContext';

const HolidayList = () => {
  const state = useContext(AppContext);
  const [holidayList, setHolidayList] = useState(state.holidayList);

  useEffect(() => {
    setHolidayList(state.holidayList);
  }, [state.holidayList]);

  return (
    <Box
      sx={ {
        display: 'flex',
        ml: '5%',
        flexWrap: 'wrap',
        // justifyContent: 'space-around',
        alignItems: 'center',
      } }
    >
      { holidayList.map((day) => (
        <Card
          sx={ {
            width: '300px',
            p: '10px',
            m: '20px',
          } }
        >
          <CardMedia
            height="140"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              { day.date }
            </Typography>
            <Typography variant="h6" color="text.secondary">
              { day.localName }
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Holiday Details</Button>
          </CardActions>
        </Card>
      )) }
    </Box>
  );
};

export default HolidayList;
