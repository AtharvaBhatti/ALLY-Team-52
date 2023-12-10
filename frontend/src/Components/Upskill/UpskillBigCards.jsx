import * as React from 'react';
import "./UpskillBigCards.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StarIcon from '@mui/icons-material/Star';
import Divider from '@material-ui/core/Divider';
import { videoimg , userimg} from '../../assets/images';


export default function ActionAreaCard({course : course}) {
  const originalPrice = course.cost;
  const discountPrice = Math.floor(originalPrice * 0.8);

  return (
    <Card sx={{ maxWidth: 345 }} style={{ borderRadius: "3vh" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={videoimg}
          alt="green iguana"
        />
        <CardContent>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{
                fontSize: "1.29vh",
                fontWeight: 500,
              }}
            >
              ₹{originalPrice}
            </Typography>
          
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="px-2 py-2 text-black bg-yellow-300"
              style={{
                fontSize: "1.5vh",
                fontWeight: 500,
              }}
            >
              ₹{discountPrice}
            </Typography>
          </div>
          <Typography
            variant="body2"
            style={{ fontSize: "1.50vh", fontWeight: 700, display: "flex" }}
          >
            {course.oneLiner}
          </Typography>
          <Divider
            style={{
              width: "100%",
              margin: "0.93vh 0",
              backgroundColor: "rgba(218, 218, 247, 1)",
              border: "0.12vh",
            }}
          />
          <div className="upskill-teacher-info">
            <img
              src={userimg}
              alt="User Image"
              className="upskill-teacher-image"
            ></img>
            <div className="upskill-teacher-details">
              <div className="upskill-teacher-name"></div>
              <div className="upskill-teacher-designation">Self Developer</div>
            </div>
            <div className="upskill-teacher-interest font-inter">Education</div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}