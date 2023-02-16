import { Box, Grid, Typography, IconButton, Divider, Button, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React from 'react';
import Header from '../components/Header';
import { Announcement, CalendarMonth,  LinkRounded,  LocationOn, Speaker, Timeline, Timer } from '@mui/icons-material';
import buildingACt from "../assets/topActs.JPG";
import Footer from '../components/Footer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import nhigula from "../assets/nhigula faculty.png";
import fred from "../assets/msuguFred.jpg";
import ngonyani from "../assets/ngonyaniStu.jpg";
import ernest from "../assets/ereneststu.jpg";




export default function Home() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    // padding: "15px",
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Box sx={{}}>
        <Header></Header>
        <Grid  spacing={2} elevation={0} sx={{ padding: "10px", width:"100%" }}>
          <Grid item xs={12} md={12}>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={buildingACt} className="d-block w-100" alt="..." style={{ height: "70vh" }} />
                  {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg> */}

                  <div className="container">
                    <div className="carousel-caption text-start ">
                      <h1>Africa's continental theological Seminary(ACTS)</h1>
                      <h4>To prepare, empower and develop servant leaders with the best Pentecostal training And skills</h4>
                      <p><Button className="btn btn-md btn-primary" color="secondary" href="programs">Apply Now</Button></p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://imgs.search.brave.com/fkBvGy8ognLxOKpurdkbgL-p5ngtTh8InJvO_FWGqKI/rs:fit:1200:400:1/g:ce/aHR0cDovL3d3dy5j/dWVhLmVkdS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wMS9H/cmFkdWF0aW9uLUdy/b3VwLmpwZw
               " className="d-block w-100" alt="..." style={{ height: "70vh" }} />
                  {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg> */}

                  <div className="container">
                    <div className="carousel-caption">
                      <h1>Africa's continental theological Seminary(ACTS).</h1>
                      <p>To prepare, empower and develop servant leaders with the best Pentecostal training And skills.</p>
                      <p><a className="btn btn-lg btn-primary" href="aboutUs">Learn more</a></p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://imgs.search.brave.com/rZcwSvTMP2HH5oeS3XzvB7nKQuEm5VQiOkrqqq8vr5M/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5t/aWx3YXVrZWVpbmRl/cGVuZGVudC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDUvUGV3QmxhY2tD/aHVyY2hTdHVkeVBo/b3Rvc18wNC5qcGc"
                    className="d-block w-100" alt="..." style={{ height: "70vh" }} />

                  {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg> */}

                  <div className="container">
                    <div className="carousel-caption text-end">
                      <h1>Africa's continental theological Seminary(ACTS)Africa's continental theological Seminary(ACTS).</h1>
                      <p>integrity and passion for multiplying the church and reach the world with the gospel of Jesus Christ in the power of Holy Spirit</p>
                      <p><a className="btn btn-lg btn-primary" href="programs">Apply Now</a></p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>



          </Grid>


        </Grid>

        <Divider />
        <Grid container spacing={2} sx={{ marginBottom: "20px",marginTop: "20px",justifyContent:"space-evenly" }}>

          <Grid item xs={9} lg={4} xl={4} sx={{ backgroundColor: "rgb(155, 72, 155)", color: "white", marginLeft: "50px", padding: "20px" }} >
            <Typography variant='h5'> <LinkRounded /> <strong>QuickLinks </strong></Typography>
            <hr />

            <Typography variant='body4'><a href="https://www.pathseminary.org/admission" style={{ textDecoration: "none", color: "white" }}>New students information conserning Tution Fees </a></Typography>
            <hr />
            <Typography variant='body4'><a href="https://www.pathseminary.org/apply" style={{ textDecoration: "none", color: "white" }}>Application Form for Doctrate students </a></Typography>
            <hr />
            <Typography variant='body4'><a href="https://my.globaluniversity.edu/?" style={{ textDecoration: "none", color: "white" }}>Masters students Portal </a></Typography>
          </Grid>

          <Grid item xs={6} alignItems="center">
            <h3>Recent Events News&upadets</h3>
            <List sx={{ width: '100%', bgcolor: 'background.paper',maxWidth:500 }}>
              <ListItem sx={{display:'block'}}>
                <Typography variant='body2'> <CalendarMonth /> Novemver 1 2022</Typography>
                <Typography variant='h6'> <strong><Link color="inherit" href="/" style={{textDecoration: "none"}}>
                New students orientation
                    </Link></strong></Typography>
                {/* <ListItemText
                  primary=""

                /> */}
                <Typography variant='body4'><Timer /> 9:25pm<LocationOn />acts dodoma</Typography>
                
              </ListItem>
              <Divider component="li" />


              <ListItem sx={{display:'block'}}>
                <Typography variant='body2'> <CalendarMonth /> December 1 2022</Typography>
                <Typography variant='h6'><strong> <Link color="inherit" href="/" style={{textDecoration: "none"}}>
                Announcement to join short and long term courses - Bible Knowledge
                    </Link> </strong></Typography>
                {/* <ListItemText
                  primary=""

                /> */}
                <Typography variant='body4'><Timer /> 9:25pm<LocationOn />acts dodoma</Typography>
              
              </ListItem>
              <Divider component="li" />
              


              <ListItem sx={{display:'block'}}>
                <Typography variant='body2'> <CalendarMonth /> December 1 2022</Typography>
                <Typography variant='h6'><strong> <Link color="inherit" href="/" style={{textDecoration: "none"}}>
                ACTS Dodoma Campus Tracer Study Report for 2021/2022 Academic Year
                    </Link> </strong></Typography>
                {/* <ListItemText
                  primary=""

                /> */}
                <Typography variant='body4'><Timer /> 9:25pm<LocationOn />acts dodoma</Typography>
                
              </ListItem>
              <Divider component="li" />



              <ListItem sx={{display:'block'}}>
                <Typography variant='body2'> <CalendarMonth /> December 1 2022</Typography>
                <Typography variant='h6'><strong> <Link color="inherit" href="/" style={{textDecoration: "none"}}>
                Students selected to join masters degree programmers for the academic year 2022/2023.
                    </Link> </strong></Typography>
                {/* <ListItemText
                  primary=""

                /> */}
                <Typography variant='body4'><Timer /> 9:25pm<LocationOn />acts dodoma</Typography>
                
              </ListItem>
              <Divider component="li" />


              {/* <ListItem alignItems="flex-start">

                <ListItemText
                  primary="- Call of God and Commitment to Ministry"

                />
              </ListItem>

              <Divider component="li" />
              <ListItem alignItems="flex-start">

                <ListItemText
                  primary="- Bachelor Degree in Biblical, Theological, Ministerial or other studies from a recognized institution with a minimum GPA of 3.2"

                />
              </ListItem> */}


            </List>
          </Grid>
          

        </Grid>
        <Grid item xs={9}>
          <section className="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded" style={{ backgroundColor: "lightgray" }}>
            <div className="row d-flex justify-content-center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-body m-3">
                    <div className="row">
                      <div className="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                        <img src={nhigula}
                          className="rounded-circle img-fluid shadow-1" alt="woman avatar" width="200" height="200" />
                      </div>
                      <div className="col-lg-8">
                        <h5 className="text-muted fw-light mb-4">
                          Acts exists to develop God’s ministers
                          who are capable of pioneering
                          indigenous churches with the
                          potential to grow spiritually,
                          numerically, and geographically in
                          the power of the Holy Spirit, thus
                          fulfilling the Great commission
                        </h5>
                        <p className="fw-bold lead mb-2"><strong>DR. IMMACULATE NHIGU</strong></p>
                        <p className="fw-bold text-muted mb-0">President</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </Grid>
        <Grid item xs={9}>
        <section>
  <div className="row d-flex justify-content-center">
    <div className="col-md-10 col-xl-8 text-center">
      <h3 className="mb-4 pt-5">What students Say aboutUs</h3>
      <p className="mb-4 pb-2 mb-md-5 pb-md-0">
        
      </p>
    </div>
  </div>

  <div className="row text-center">
    <div className="col-md-4 mb-5 mb-md-0">
      <div className="d-flex justify-content-center mb-4">
        <img src={ernest}
          className="rounded-circle shadow-1-strong" width="150" height="150" />
      </div>
      <h5 className="mb-3">ERNEST IDABU</h5>
      <h6 className="text-primary mb-3">Masters of Arts Degree in Biblical Studies</h6>
      <p className="px-xl-3">
        <i className="fas fa-quote-left pe-2"></i>I recommend these courses to everyone, 
        and wish you, guys, luck with the new studies! 
      </p>
    
    </div>
    <div className="col-md-4 mb-5 mb-md-0">
      <div className="d-flex justify-content-center mb-4">
        <img src={fred}
          className="rounded-circle shadow-1-strong" width="150" height="150" />
      </div>
      <h5 className="mb-3">FRED MSUNGU</h5>
      <h6 className="text-primary mb-3">Masters of Arts Degree(Leadership Concentration)</h6>
      <p className="px-xl-3">
        <i className="fas fa-quote-left pe-2"></i>
        I am grateful for your wonderful course! 
        Your tutors are the best, and I am completely 
        satisfied with the level of professional teaching. 
      </p>
   
    </div>
    <div className="col-md-4 mb-0">
      <div className="d-flex justify-content-center mb-4">
        <img src={ngonyani}
          className="rounded-circle shadow-1-strong" width="150" height="150" />
      </div>
      <h5 className="mb-3">AURELIAN NGONYANI</h5>
      <h6 className="text-primary mb-3">Masters of Divinity Degree(Ministerial Track)</h6>
      <p className="px-xl-3">
        <i className="fas fa-quote-left pe-2"></i>I recommend these courses to everyone, 
        and wish you, guys, luck with the new studies! 
      </p>
   
    </div>
  </div>
</section>

        </Grid>
        <Footer />
      </Box>

    </div>
  )
}
