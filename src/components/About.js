import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Fade from 'react-reveal/Fade';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

import myImage from '../assets/images/me.jpg'
import cv from '../assets/SorourJahanbin_CV.pdf'

const useStyles = makeStyles(theme => ({
    container: {
        padding: "60px 30px",
    },
}))

const About = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <React.Fragment>

            { /* ABOUT ME */}
            <Grid container direction="column" className={classes.container} id="about">

                <Grid item >
                    <Typography variant="h2" gutterBottom>INFORMATION</Typography>
                </Grid>
                <Grid item >
                    <Fade left duration={1500}>
                        <Typography variant="h1" paragraph>ABOUT ME</Typography>
                    </Fade>
                </Grid>

                <Grid item container direction="row" spacing={3}>
                    <Grid item md={5}>
                        <Fade left duration={1500}>
                            <div>
                                <img src={myImage} alt="me" draggable="false" style={{ width: "100%" }} />
                            </div>
                        </Fade>
                    </Grid>

                    <Grid item md={7}>
                        <Grid item container direction="column">
                            <Fade left duration={1500}>
                                <div>
                                    <Grid item>
                                        <Typography variant="h2" paragraph>ABOUT ME</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h3" paragraph>I'm Sorour Jahanbin & Early Stage Researcher</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" paragraph>
                                            Hi, My name is Sorour Jahanbin. I am a Software Developer, and
                                            interested to present in a team project and collaborative with experts in different
                                            fields. I want to improve myself and get experience to get in the upper position of science. I
                                            am a full-time Early Stage Researcher at the Department of Computer Science of the
                                            University of York, in the context of Lowcomote Marie Sklodowska-Curie Innovative Training
                                            Network, funded by the European Commission.
                                </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Grid item container direction="row">
                                            <Grid item md={6} xs={12}>
                                                <Grid item container direction="row">
                                                    <Typography variant="subtitle1">Birthday: &nbsp; </Typography>
                                                    <Typography variant="subtitle2" paragraph>7 March 1993</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item md={6} xs={12}>
                                                <Grid item container direction="row">
                                                    <Typography variant="subtitle1">Degree: &nbsp; </Typography>
                                                    <Typography variant="subtitle2" paragraph>Master</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item md={6} xs={12}>
                                                <Grid item container direction="row">
                                                    <Typography variant="subtitle1">Website: &nbsp; </Typography>
                                                    <Typography variant="subtitle2" paragraph> www.sorour.com</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item md={6} xs={12}>
                                                <Grid item container direction="row">
                                                    <Typography variant="subtitle1">Mail: &nbsp; </Typography>
                                                    <a href="mailto:Sorour.jahanbin@york.ac.uk" style={{ textDecoration: "none" }}>
                                                        <Typography variant="subtitle2" paragraph>Sorour.jahanbin@york.ac.uk</Typography>
                                                    </a>
                                                </Grid>
                                            </Grid>
                                            <Grid item md={6} xs={12}>
                                                <Grid item container direction="row">
                                                    <Typography variant="subtitle1">Phone: &nbsp; </Typography>
                                                    <a href="tel:****" style={{ textDecoration: "none" }}>
                                                        <Typography variant="subtitle2" paragraph></Typography>
                                                    </a>
                                                </Grid>
                                            </Grid>
                                            <Grid item md={6} xs={12}>
                                                <Grid item container direction="row">
                                                    <Typography variant="subtitle1">Linkedin: &nbsp; </Typography>
                                                    <a href="https://www.linkedin.com/in/sorour-jahanbin" target="_blank" style={{ textDecoration: "none" }} >
                                                        <Typography variant="subtitle2" paragraph>sorour-jahanbin</Typography>
                                                    </a>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <a href={cv} download target="_blank" style={{ textDecoration: "none" }}>
                                            <Button variant="contained" color="secondary" style={{ borderRadius: 0 }}>
                                                DOWNLOAD CV
                                    </Button>
                                        </a>
                                    </Grid>
                                </div>
                            </Fade>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

            { /* MY SKILLS */}
            <Grid container direction="column" className={classes.container} style={{ backgroundColor: theme.palette.background.bg2 }} >

                <Grid item >
                    <Typography variant="h2" gutterBottom>ABILITIES</Typography>
                </Grid>
                <Grid item >
                    <Fade left duration={1500}>
                        <Typography variant="h1" paragraph>MY SKILLS</Typography>
                    </Fade>
                </Grid>

                <Grid item container direction="row" spacing={5}>
                    <Grid item md>
                        <Fade left duration={1500}>
                            <div>
                                <Typography variant="subtitle1">Computer Skills</Typography>
                                <Typography variant="subtitle2" paragraph>
                                    • Java, Csharp, SQL Server, Epsilon Language <br />
                                    • Experience with Eclipse editor and Eclipse Modelling Language (EMF) <br />
                                    • MDE, Model Transformation <br />
                                    • Windows, Microsoft office, LATEX <br />
                                </Typography>
                                <Typography variant="subtitle1">Languages</Typography>
                                <Typography variant="subtitle2" paragraph>
                                    • English professional working proficiency <br />
                                    • Persian Native<br />
                                </Typography>
                            </div>
                        </Fade>
                    </Grid>

                    <Grid item md style={{ width: "100%" }}>
                        <Grid item container direction="column">
                            <Fade left duration={1500}>
                                <div>
                                    <Grid item >
                                        <Grid item container direction="row" justify="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" style={{ fontWeight: 500 }}>Java</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle1" style={{ fontWeight: 500 }} gutterBottom>90% </Typography>
                                            </Grid>
                                        </Grid>
                                        <LinearProgress variant="determinate" value={90} color="secondary" style={{ height: "3px" }} />
                                    </Grid>

                                    <Grid item style={{ marginTop: "10px" }}>
                                        <Grid item container direction="row" justify="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" style={{ fontWeight: 500 }}>Csharp</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle1" style={{ fontWeight: 500 }} gutterBottom>80% </Typography>
                                            </Grid>
                                        </Grid>
                                        <LinearProgress variant="determinate" value={80} color="secondary" style={{ height: "3px" }} />
                                    </Grid>

                                    <Grid item style={{ marginTop: "10px" }}>
                                        <Grid item container direction="row" justify="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" style={{ fontWeight: 500 }}>MDE</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle1" style={{ fontWeight: 500 }} gutterBottom>95% </Typography>
                                            </Grid>
                                        </Grid>
                                        <LinearProgress variant="determinate" value={95} color="secondary" style={{ height: "3px" }} />
                                    </Grid>

                                    <Grid item style={{ marginTop: "10px" }}>
                                        <Grid item container direction="row" justify="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" style={{ fontWeight: 500 }}>Model Transformation</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle1" style={{ fontWeight: 500 }} gutterBottom>85% </Typography>
                                            </Grid>
                                        </Grid>
                                        <LinearProgress variant="determinate" value={85} color="secondary" style={{ height: "3px" }} />
                                    </Grid>
                                </div>
                            </Fade>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

        </React.Fragment >
    )
}

export default About;
