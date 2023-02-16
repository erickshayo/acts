import React from 'react';
import { Typography, Link, Box } from '@mui/material';
import { purple } from '@mui/material/colors';
import { Email, LocationOn, Phone } from '@mui/icons-material';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="#">
                ACTS
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Footer() {

    return (
        <Box sx={{ bgcolor: purple[500], marginBottom: "-110px", width: "100%", textAlign: "centre" }}>
            <Box sx={{ display: { xs: "block", lg: 'flex', xl: "flex" } , marginTop: "20px", justifyContent: "space-evenly" }}>
                <Box>
                    <Typography variant='h6' color="white" >
                        ACTS
                    </Typography>
                    <Typography variant="body2" color="white">
                        prepare, empower and develop servant leaders with the best Pentecostal training,
                    </Typography>
                    <Typography variant="body2" color="white">
                        reach the world with the gospel of Jesus Christ in the power of Holy Spirit
                    </Typography>
                </Box>
                <Box> <Typography variant='h6' color="white" align="center">
                    Links
                </Typography>
                    <Link color="inherit" href="contact">
                        contactUS
                    </Link>
                    <br />
                    <Link color="inherit" href="aboutUs">
                        Almanac
                    </Link>
                    <br />
                    <Link color="inherit" href="programs" sx={{ fontSize: "12erm", color: "whitesmoke" }}>
                        <strong>Apply Now</strong>
                    </Link>
                </Box>
                <Box> <Typography variant='h6' color="white" align="center">
                    Quick contacts
                </Typography>
                    <Typography variant="body2" color="white" align="center" sx={{ padding: "12px" }}>
                        <Email /> Email: registrar@actsseminary.education
                    </Typography>
                    <Typography variant="body2" color="white" align="center" >
                        <LocationOn />  Arusha Road-Mbwanga street,
                        Near Mipango Instutute
                    </Typography>
                    <Typography variant="body2" color="white" align="center" >
                        <Phone /> +255 712 051 589 / 767 626 929
                    </Typography></Box>

                <Box></Box>
            </Box>
            <Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Box>

        </Box>
    )
}
