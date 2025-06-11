import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

import "./InfoBox.css";

export default function InfoBox({ info }) {
  let INIT_URL =
    "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL=
    "https://media.istockphoto.com/id/2108000291/photo/wooden-outdoor-thermometer-background-scorching-summer-sun-and-blue-sky.jpg?s=1024x1024&w=is&k=20&c=YZv3u1y0NeROVunZq5MbuFYjn9eSTA2PM8HNwTcCcDo="
    const COLD_URL=
    "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL=
    "https://images.unsplash.com/photo-1536329978773-2f8ac431f330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww"

  return (
    <div className="InfoBox">
      <br />
      <br />
      {/* <h1>WeatherInfo - {info.feelsLike}</h1> */}
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ?RAIN_URL: (info.temp > 15 ? HOT_URL : COLD_URL)}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{info.humidity > 80 ? <ThunderstormIcon/>: (info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>)}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature: {info.temp}&deg;C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Min Temperature: {info.tempMin}&deg;C</p>
              <p>Max Temperature: {info.tempMax}&deg;C </p>
              <p>
                The Weather can be described as: <i>{info.weather}</i> & Feels
                Like: {info.feelsLike}&deg;C{" "}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
