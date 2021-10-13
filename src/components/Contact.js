import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Fade from 'react-reveal/Fade';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Iframe from 'react-iframe'

const useStyles = makeStyles(theme => ({
    container: {
        padding: "60px 30px",
    },
    map: {
        height: "100%",
        minHeight: "300px",
        overflow: "hidden",
        position: "relative",
        border: `0px solid ${theme.palette.secondary.main}`
    },
}))

const Contact = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <React.Fragment>
            <Grid container direction="column" className={classes.container} id="contact">

                <Grid item >
                    <Typography variant="h2" gutterBottom>LOCATION</Typography>
                </Grid>
                <Grid item >
                    <Fade left duration={1500}>
                        <Typography variant="h1" paragraph>CONTACT ME</Typography>
                    </Fade>
                </Grid>

                <Grid item container direction="row" style={{ height: matchesSM ? "500px" : "300px" }}>
                    <Grid item md style={{ marginTop: matchesSM ? null : "50px" }}>
                        <Fade left duration={1500}>
                            <Grid container item direction="column">
                                <Grid item container direction="row">
                                    <Typography variant="subtitle1">ADDRESS: &nbsp; </Typography>
                                    <Typography variant="subtitle2" paragraph>University of York</Typography>
                                </Grid>

                                <Grid item container direction="row">
                                    <Typography variant="subtitle1">EMAIL: &nbsp; </Typography>
                                    <a href="mailto:Sorour.jahanbin@york.ac.uk" style={{ textDecoration: "none" }}>
                                        <Typography variant="subtitle2" paragraph>Sorour.jahanbin@york.ac.uk</Typography>
                                    </a>
                                </Grid>

                                <Grid item container direction="row">
                                    <Typography variant="subtitle1">PHONE: &nbsp; </Typography>
                                    <a href="tel:+7488519152" style={{ textDecoration: "none" }}>
                                        <Typography variant="subtitle2" paragraph>+7488519152</Typography>
                                    </a>
                                </Grid>

                            </Grid>
                        </Fade>
                    </Grid>

                    <Grid item md style={{ width: "100%" }}>
                        <Fade left duration={1500}>
                            <Grid item container className={classes.map}>
                                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2348.1940213507305!2d-1.0517825302833033!3d53.94606152198787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487930324a78a6f3%3A0xe55ee181ddf91d18!2sUniversity%20of%20York!5e0!3m2!1sen!2s!4v1616172527420!5m2!1sen!2s" width="100%" frameBorder="0" allowFullscreen="" ariaHidden="false" tabIndex="0" />
                            </Grid >
                        </Fade>
                    </Grid>

                </Grid>

            </Grid>
        </React.Fragment >
    )
}

export default Contact;
