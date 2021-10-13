import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Fade from 'react-reveal/Fade';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import heroImage from '../assets/images/hero.jpg'
import avatarImage from '../assets/images/avatar.jpg'

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${heroImage})`,
        height: "100vh",
        minHeight: "600px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    title: {
        fontWeight: 500,
        fontSize: "45px",
        lineHeight: "1em",
        textTransform: "uppercase",
    },
    subtitle: {
        fontFamily: "Rambla, sans-serif",
        fontSize: "27px",
        fontWeight: 700,
    },
}))

const Hero = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <React.Fragment>
            <Grid container direction="column" justify="center" alignItems="center" className={classes.background} id="home">
                <Fade up>
                    <Grid item >
                        <img src={avatarImage} alt="avatar" draggable="false" style={{ width: "200px", borderRadius: "100%", border: "8px solid rgba(0, 0, 0, .1)" }} />
                    </Grid>
                    <Grid item style={{ marginTop: "20px" }}>
                        <Typography align="center" variant="h1" className={classes.title} color="primary" gutterBottom >SOROUR JAHANBIN</Typography>
                    </Grid>
                    <Grid item >
                        <Typography align="center" variant="subtitle1" className={classes.subtitle} color="primary" gutterBottom>I'm Early Stage Researcher</Typography>
                    </Grid>
                </Fade>

            </Grid>
        </React.Fragment>
    )
}

export default Hero;
