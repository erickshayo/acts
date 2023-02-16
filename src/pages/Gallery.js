import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Grid, Typography, IconButton, Divider } from '@mui/material';
import buildingACt from "../assets/topActs.JPG";
// import pe1 from '../assets/DJI_0962.JPG';
import pe2 from '../assets/DJI_0963.JPG';
import pe3 from '../assets/DJI_0964.JPG';
import pe4 from '../assets/DJI_0965.JPG';
import pe5 from '../assets/DJI_0966.JPG';
import pe6 from '../assets/DJI_0967.JPG';
import pe7 from '../assets/DJI_0973.JPG';
import pe8 from '../assets/DJI_0974.JPG';
import pe9 from '../assets/DJI_0980.JPG';
// import ADMIN from '../assets/DJI_0962.JPG'
import pl1 from '../assets/_MG_9787.jpg';
import pl2 from '../assets/_MG_9791.jpg';
import pl3 from '../assets/_MG_9704.jpg';
import pl4 from '../assets/_MG_9706.jpg';
import pl5 from '../assets/_MG_9709.jpg';
import pl6 from '../assets/_MG_9710.jpg';
import pl7 from '../assets/_MG_9779.jpg';
import pl8 from '../assets/_MG_9770.jpg';
// import pl9 from '../assets/_MG_9729.jpg';


export default function Gallery() {
  return (
    <Box>
    <Header></Header>
    <Box
     sx={{
      backgroundImage: `url(${buildingACt})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor: "rgba(76, 175, 80, 0.3)",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '20vh',
      positoni: 'relative'
    }}
  >
     <Box
    sx={{
      backgroundColor: "#9c27b0",
      width: '100%',
      height: '20vh',
      opacity: 0.5
    }}
  ></Box>
        <Typography variant='h5' sx={{ float: "left", marginTop: "-30px", color:"white" }} > <strong>Gallarey </strong></Typography>
      </Box>

    <ImageList cols={3} sx={{paddingLeft: "10%", paddingRight: "10%", margin: "0px" }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} >
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />  
          <ImageListItemBar
            title={item.title}
            subtitle={<span>{item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
      <Footer />
    </Box>
  );
}

const itemData = [
  // {
  //   img:pe1,
  //   title: 'Breakfast',
  //   author: '@bkristastucchio',
  // },
  {
    title: '',
    img: pe2,
    author: 'ACTS Ground',
  },
  {
    title: '',
    img: pe3,
    author: 'ACTS Ground',
  },
  {
    title: '',
    img: pe4,
    author: 'ACTS Ground',
  },
  {
    img: pe5,
    title: '',
    author: 'ACTS Ground',
  },
  {
    img: pe6,
    title: '',
    author: 'ACTS Ground',
  },
  {
    img: pl1,
    title: '',
    author: 'ACTS Canteen',
  },
  {
    img: pe7,
    title: '',
    author: 'ACTS Ground',
  },
  {
    img: pe8,
    title: '',
    author: 'ACTS Ground',
  },
  
  {
    img: pl2,
    title: '',
    author: 'ACTS Canteen',
  },
  {
    img: pe9,
    title: '',
    author: 'ACTS Ground',
  },
  
  {
    img: pl3,
    title: '',
    author: 'ACTS Hostel',
  },
  
  {
    img: pl4,
    title: '',
    author: 'ACTS Hostel',
  },
  
  {
    img: pl5,
    title: '',
    author: 'ACTS Library',
  },
  
  {
    img: pl6,
    title: '',
    author: 'ACTS Library',
  },
  
  {
    img: pl7,
    title: '',
    author: 'ACTS Library',
  },
  
  {
    img: pl8,
    title: '',
    author: 'ACTS Library',
  },
  
  {
    img: pe9,
    title: '',
    author: 'ACTS Ground',
  },
  {
    img: pe7,
    title: '',
    author: 'ACTS Ground',
  },

 
];