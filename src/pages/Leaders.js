import React from 'react'
import { Box, Grid, Typography, IconButton, Divider } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from '@mui/icons-material';
import buildingACt from "../assets/topActs.JPG";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import majule from "../assets/majule faculty.png";
import majembe from "../assets/majembe faculty.png";
import nyanda from "../assets/nyanda faculty.png";
import Kibga from "../assets/Kibga faculty.jpg";
import nhigula from "../assets/nhigula faculty.png";
import vicePresident from "../assets/vicePresident.jpg";






function Leaders() {
  return (
    <div>
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
        <Typography variant='h5' sx={{ float: "left", marginTop: "-40px", color: 'white' }} > <strong>our Staff </strong></Typography>
      </Box>



      {/* row1 */}
      <Box style={{ display:{ xs: "block", lg: 'flex', xl: "flex" }, alignItem: "center", justfyContent: "centre", marginTop: "25px" }}>

        <Grid item xs={6} lg={4} sx={{ marginTop: '50px', paddingLeft: "10%", paddingRight: "10%"}}>

          <div className=" themed-grid-col p-9">
            <h2 style={{ textAlign: "center" }}>Meet our Staff</h2>
            <p>We are proud to recruit the best teachers
              who are committed to nurturing and inspiring
              every Student they care for. We support them
              to do this through world class professional
              development, amplified by the sharing of
              international best practice. Meet some
              of our most passionate and inspiring
              teachers at Africa continental Theological
              Seminary.
            </p>
            <p>
              Professors have a profound impact on each of us.
              Beyond our Students, they are perhaps the most
              influential figures of our childhood, inspiring
              and guiding our development for the years ahead.
              We understand just how important the role our
              teachers have, so we ensure that our team includes
              only the very best – qualified and experienced
              professionals who are committed to making every
              lesson an engaging and exciting experience for our Students.
            </p>

          </div>

        </Grid>
        <Grid item xs={6} lg={4}  sx={{ marginTop: '50px', paddingLeft: "10%", paddingRight: "10%"}}>

          <div className=" themed-grid-col p-2">
            <ImageList cols={3} sx={{width: "95%", textAlign: "center"}}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={<span> {item.author}</span>}
                    position="below"
                  />
                </ImageListItem>
              ))}
            </ImageList>


          </div>
        </Grid>

      </Box>


      {/* row2 */}





      <Footer />
    </div>
  )
}

export default Leaders
const itemData = [
  {
    img: nhigula,
    title: 'Dr. Immaculate Nhigula',
    author: 'Presdent',
  },
  {
    img: vicePresident,
    title: 'REV. DR. JOSEPH KIMEME',
    author: 'Vice President',
  },
  {
    img: majule,
    title: 'REV. DR. GEOFREY P. MAJULE',
    author: 'Dip, BA, M.Div & D.Min',
  },
  {
    img: majembe,
    title: 'REV. DR. PASTORY MAJEMBE',
    author: 'Dip, BA, M.Div, Th. M & D.Min',
  },
  {
    img: nyanda,
    title: 'REV. DR. JACKSON NYANDA',
    author: 'Academic Dean & Registar',
  },
  {
    img: Kibga,
    title: 'DR. ELIA Y. KIBGA',
    author: 'Staff',
  },
  // {
  //   img: gde,
  //   title: 'Honey',
  //   author: '@arwinneil',
  // },


];