import React from 'react'
import { Box, Grid, Typography, IconButton, Divider,Avatar } from '@mui/material';
import {   Email, LinkRounded,  LocationOn, Phone, } from '@mui/icons-material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import List from '@mui/material/List';
import Footer from '../components/Footer';
import Header from '../components/Header';


function ContactUs() {


    const renderMap = () => {
        const mapOptions = {
            center: { lat: -6.181240, lng: 35.748160 },
            zoom: 16,
        };

        const map = new window.google.maps.Map(
            document.getElementById('map'),
            mapOptions
        );

        const marker = new window.google.maps.Marker({
            position: { lat: -6.181240, lng: 35.748160 },
            map: map,
        });
    };

    return (
        <Box>
            <Header></Header>
        <Box sx={{ display:{ xs: "block", lg: 'flex', xl: "flex"} , justifyContent: "space-evenly" }}>
            <Grid item xs={6} sx={{ marginTop: '50px' }}>
            <Card  sx={{padding:"15px"}}>
            <Typography variant="h4" component="h2" sx={{textAlign:'left'}}>
                            Contact Us
                        </Typography>
                <form>
                    <div className="form-outline mb-4">
                        <input type="text" id="form4Example1" className="form-control" placeholder='Enter Name ....'/>
                        {/* <label className="form-label" for="form4Example1">Name</label> */}
                    </div>

                    <div className="form-outline mb-4">
                        <input type="email" id="form4Example2" className="form-control" placeholder='Enter Email address ...'/>
                        {/* <label className="form-label" for="form4Example2">Email address</label> */}
                    </div>

                    <div className="form-outline mb-4">
                        <textarea className="form-control" id="form4Example3" rows="4" placeholder='Message ......'></textarea>
                        {/* <label className="form-label" for="form4Example3">Message</label> */}
                    </div>

                    {/* <div className="form-check d-flex justify-content-center mb-4">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />
                        <label className="form-check-label" for="form4Example4">
                            Send me a copy of this message
                        </label>
                    </div> */}

                    <button type="submit" className="btn btn-primary btn-block mb-4" style={{backgroundColor: "#9c27b0"}}>Send</button>
                </form>
                </Card>
            </Grid>
            <Grid item xs={6} sx={{ marginTop: '50px' }}>

                <Card >
                    <CardContent>
                        <Typography variant="h4" component="h2" sx={{textAlign:'left'}}>
                            Address
                        </Typography>
                        <Divider/>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                            <Avatar alt="location" ><LocationOn /></Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Arusha Road-Mbwanga street, Near Mipango Instutute"
                                
                            />
                        </ListItem>
                        <Divider component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                            <Avatar alt="location" ><Email /></Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="registrar@actsseminary.education"
                                
                            />
                        </ListItem>
                        <Divider component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                            <Avatar alt="location" ><Phone /></Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary=" +255 712 051 589 / 767 626 929"
                                
                            />
                        </ListItem>
         
                    </List>
                        {/* <Typography color="textSecondary">
                           
                        </Typography>
                        <Typography variant="body2" component="p">
                            Email: info@example.com
                        </Typography>
                        <Typography variant="body2" component="p">
                            Phone: 555-555-5555
                        </Typography>
                        <Typography variant="body2" component="p">
                            Address: 123 Main St, Anytown USA
                        </Typography> */}
                        <div >
                            <div id="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253888.9331992513!2d35.478111725000005!3d-6.128739600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184de59c9d373987%3A0xb5d84a416a25f8be!2sTanzania%20Assemblies%20of%20God%20Head%20Office%20-%20Dodoma!5e0!3m2!1sen!2stz!4v1676538581952!5m2!1sen!2stz" width="300" height="200" style={{border:"0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Box>
        <Footer />
        </Box>
    )
}

export default ContactUs