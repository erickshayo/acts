import React from 'react'
import { Box, Grid, Typography, IconButton, Divider, Button } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, PictureAsPdf } from '@mui/icons-material';
import buildingACt from "../assets/topActs.JPG";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import pdf from '../assets/applicationGST.pdf';

function Programs() {


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
                <Typography variant='h5' sx={{ float: "left", marginTop: "-40px", color:"white" }} > <strong>Our programs</strong></Typography>
            </Box>


            <Box sx={{display: { xs: "block", lg: 'flex', xl: "flex" }, justifyContent:"space-evenly"}}>

                <Grid item xs={9}  sx={{ marginTop: '50px', padding:"3%" }}>
                    <h4 style={{textAlign:'left'}}>OUR PROGRAMS</h4>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                            <Avatar alt="Cindy Baker" >B</Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="MASTERS OF DIVINITY IN BIBLICAL STUDIES"
                                
                            />
                        </ListItem>
                        <Divider  component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                            <Avatar alt="Cindy Baker" >D</Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="MASTERS OF DIVINITY IN MINISTERIAL STUDIES"
                            />
                        </ListItem>
                        <Divider component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Cindy Baker" >A</Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="MASTERS OF ARTS IN LEADERSHIP"
                              
                            />
                        </ListItem>

                        <Divider component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                            <Avatar alt="Cindy Baker" >I</Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="MASTERS OF ARTS IN INTERCULTURAL STUDIES (MISSIONS)"
                               
                            />
                        </ListItem>

                        <Divider component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                            <Avatar alt="Cindy Baker" >E</Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="MASTERS OF ARTS IN EDUCATION"
                                
                            />
                        </ListItem>
                    </List>

                </Grid>


                <Grid item xs={9} sx={{ marginTop: '50px', padding:"3%" }}>
                <h4>ADMISSION REQUIREMENT FOR MDiv AND MA</h4>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start">
                            
                            <ListItemText
                                primary="- Born again member of a church"
                                
                            />
                        </ListItem>
                        <Divider component="li" />
                        <ListItem alignItems="flex-start">
                            
                            <ListItemText
                                primary="- Filled by Holy Spirit according to Acts 2:4"
                               
                            />
                        </ListItem>
                        <Divider component="li" />
                        <ListItem alignItems="flex-start">
                            
                            <ListItemText
                                primary="- Call of God and Commitment to Ministry"
                               
                            />
                        </ListItem>

                        <Divider  component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="- Bachelor Degree in Biblical, Theological, Ministerial or other studies from a recognized institution with a minimum GPA of 3.2"
                              
                            />
                        </ListItem>

                        
                    </List>

                    <Box sx={{display:"flex", justifyContent:"space-evenly", marginTop:"20px"}}>
                    <Button 
                    endIcon={<PictureAsPdf/>}
                    variant="contained"
                    size="large"
                    >

               <a href={pdf} download style={{textDecoration:"none", color:"white"}}>Download Application Form</a>
                    
                    </Button>
                    <Button
                    >
                        
                    </Button>
                    </Box>

                </Grid>
            </Box>
                
            <Footer />
        </Box>
    )
}

export default Programs