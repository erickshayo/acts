import React from 'react'
import { Box, Grid, Typography, IconButton, Divider } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from '@mui/icons-material';
import buildingACt from "../assets/topActs.JPG";

function About() {
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
        <Typography variant='h5' sx={{ float: "left", marginTop: "-40px", color:"white" }} > <strong>Know more aboutUs </strong></Typography>
      </Box>
      <div className="row mb-3 text-center mt-5 " style={{marginLeft:'30px'}}>
        <div className="col-sm-9 col-lg-4 themed-grid-col" style={{ backgroundColor: "rgb(155, 72, 155)", color: "white" }}>
          <Typography variant='h5'> <Link /> <strong>QickLinks </strong></Typography>
          <hr />

          <Typography variant='body4'><a href="https://www.pathseminary.org/admission" style={{ textDecoration: "none", color: "white" }}>New students information conserning Tution Fees </a></Typography>
          <hr />
          <Typography variant='body4'><a href="https://www.pathseminary.org/apply" style={{ textDecoration: "none", color: "white" }}>Application Form for Doctrate students </a></Typography>
          <hr />
          <Typography variant='body4'><a href="https://my.globaluniversity.edu/?" style={{ textDecoration: "none", color: "white" }}>Masters students Portal </a></Typography>
        </div>


        <div className="col-lg-3 col-sm-9 themed-grid-col p-2">
          <h6>ACTS'S HISTORY</h6>
          <p>This seminary started as a Unit of
            Postgraduate Studies at the
            Assemblies of God Central Bible
            College – CBC.
          </p>
          <p>
            It was launched in
            October 27, 2007 by the former
            Archbishop of that period Rev. Dr.
            Ranwell Mwanisongole; in a special
            inauguration ceremony held at the
            Tanzania Assemblies of God Bible
            College (AGBC).
          </p>

          <p>This unit was established under the
            leadership and administration of East
            Africa Graduate Studies (EAGS),
            Nairobi, and operated under the
            umbrella of EAGS Nairobi.
          </p>
          <p>From the year 2013 to 2019 and from 2019 to until now, there have been
          </p>

        </div>

        <div className="col-lg-3 col-sm-9  themed-grid-col p-2">
          {/* <h6>ACTS'S HISTORY</h6> */}

          <p>
            major changes in the Postgraduate Training Unit of the Assemblies of
            God Bible College Dodoma (AGBC).
          </p>

          <p>From 2013 to 2019, this Unit was no longer under the East Africa
            Graduate school (EAGS) of Nairobi, but was made an independent
            unit, communicating with Global University USA directly.
          </p>
          <p>
            In 2020, Archbishop Dr. Barnabas Mtokambali inaugurated the
            Seminary of the Tanzanian Assemblies of God church that will serve
            not only Tanzania but the entire continent of Africa. It is called
            “AFRICA’S CONTINENTAL THEOLOGICAL SEMINARY.”
          </p>

        </div>




      </div>

      <div  style={
        { display: "flex" , backgroundColor: "lightgrey", padding: "15px", textAlign: "left" }
      }>
        <div className=" themed-grid-col p-2">
          <h4 style={{ textAlign: "left" }}>Mission</h4>

          <p style={{ textAlign: "left", paddingBottom:"20px" }}>To prepare, empower and develop
            servant leaders with the best
            Pentecostal training, skills, integrity
            and passion for multiplying the
            church and reach the world with the
            gospel of Jesus Christ in the power of
            Holy Spirit

          </p>


        </div>

        <div className=" themed-grid-col p-2">
          <h4 style={{ textAlign: "left" }}>
            Vision
          </h4>

          <p>To have servant leaders who are
            committed to God and His Word,
            spiritually transformed and
            empowered by Holy Spirit to reach
            and impact nations with the gospel of
            Jesus Christ

          </p>



        </div>

      </div>
      <Footer />
    </div>
  )
}

export default About