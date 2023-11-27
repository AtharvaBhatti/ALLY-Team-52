import * as React from 'react';
import "./UpskillSmallCards.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StarIcon from '@mui/icons-material/Star';
import Divider from '@material-ui/core/Divider';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 } } style={{ borderRadius: '3vh'}}>
      <CardActionArea>
        <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography gutterBottom variant="h5" component="div" style={{ fontSize: '1.29vh', fontWeight: 500, display: 'flex', alignItems: 'center' }}>
            <PlayCircleIcon style={{ marginRight: '0.5rem' }} />
            80x Lesson
          </Typography>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StarIcon style={{ color: 'yellow', fontSize: '1.29vh' }} />
            <StarIcon style={{ color: 'yellow', fontSize: '1.29vh' }} />
            <StarIcon style={{ color: 'yellow', fontSize: '1.29vh' }} />
            <StarIcon style={{ color: 'yellow', fontSize: '1.29vh' }} />
            <StarIcon style={{ color: 'grey' ,fontSize: '1.29vh'}} />
          </div>
        </div>
        <Typography variant="body2" style={{ fontSize: '1.50vh', fontWeight: 700, display: 'flex'}}>
            Supervised Machine Learning: Regression and Classification
        </Typography>
        <Divider style={{ width: '100%', margin: '0.93vh 0', backgroundColor: 'rgba(218, 218, 247, 1)', border: '0.12vh' }} />
        <div className='upskill-progress'>
            <div className='upskill-percentage-completed font-inter'>76% completed</div>
            <div className='upskill-lessons-completed font-inter'>19 completed</div>
        </div>
        <ProgressBar now={76} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}