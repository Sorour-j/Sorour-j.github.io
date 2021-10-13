import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Fade from 'react-reveal/Fade';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

const useStyles = makeStyles(theme => ({
    container: {
        padding: "60px 30px",
    },
    box: {
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: "5px",
        padding: "25px"
    },
}))

const Resume = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <React.Fragment>

            { /* RESUME */}
            <Grid container direction="column" className={classes.container} id="resume">
                <Grid item >
                    <Typography variant="h2" gutterBottom>MY REFERENCE</Typography>
                </Grid>
                <Grid item >
                    <Fade left duration={1500}>
                        <Typography variant="h1" paragraph>Resume</Typography>
                    </Fade>
                </Grid>

                <Grid item container direction="row" justify="center" spacing={matchesMD ? 5 : null}>
                    <Grid item md>
                        <Fade left duration={1500}>
                            <div>
                                <Typography variant="h3" align="center" gutterBottom>Education</Typography>
                                <Timeline >
                                    <TimelineItem>
                                        <TimelineOppositeContent >
                                            <Typography variant="subtitle1" >Sep. 2019 – Now</Typography>
                                            <Typography variant="subtitle2">University of York, York, United Kingdom</Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot color="secondary" />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Typography variant="h3" style={{ fontSize: "1rem" }}>PhD of Computer Science</Typography>
                                            <Typography variant="subtitle2">Thesis title: Intelligent Run-Time Partitioning of Low-Code System Models</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent >
                                            <Typography variant="subtitle1" >Sep. 2016 – March 2019</Typography>
                                            <Typography variant="subtitle2">University of Isfahan, Isfahan, Iran</Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot color="secondary" />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Typography variant="subtitle1" style={{ fontSize: "1rem" }} >M.Sc. in Computer Engineering (Software)</Typography>
                                            <Typography variant="subtitle2">Thesis title: An approach for generating test models in model transformation testing</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent >
                                            <Typography variant="subtitle1" >Sep. 2011 – Sep.2015</Typography>
                                            <Typography variant="subtitle2">Shahid Chamran University, Ahvaz, Iran</Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot color="secondary" />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Typography variant="subtitle1" style={{ fontSize: "1rem" }} >Bachelor of Science</Typography>
                                            <Typography variant="subtitle2">Computer Software Engineering</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                            </div>
                        </Fade>
                    </Grid>

                    <Grid item md>
                        <Fade left duration={1500}>
                            <div>
                                <Typography variant="h3" align="center" gutterBottom>Experience</Typography>
                                <Timeline >
                                    <TimelineItem>
                                        <TimelineOppositeContent >
                                            <Typography variant="subtitle1" > - </Typography>
                                            <Typography variant="subtitle2"> MDE workshoptheory</Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot color="secondary" />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Typography variant="h3" style={{ fontSize: "1rem" }}>Researcher</Typography>
                                            <Typography variant="subtitle2">A member of Automated Software Engineering (ASE) research group at University of York</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent >
                                            <Typography variant="subtitle1" > - </Typography>
                                            <Typography variant="subtitle2">Automated Software Engineering</Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot color="secondary" />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Typography variant="subtitle1" style={{ fontSize: "1rem" }} >Researcher</Typography>
                                            <Typography variant="subtitle2">An Active member of MDE research group and facilitator of an MDE workshoptheory and practice</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent >
                                            <Typography variant="subtitle1" >2 months</Typography>
                                            <Typography variant="subtitle2">Ahvaz Steel Company</Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot color="secondary" />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Typography variant="subtitle1" style={{ fontSize: "1rem" }} >internship</Typography>
                                            <Typography variant="subtitle2">internship at Ahvaz Steel Company, Iran</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                            </div>
                        </Fade>
                    </Grid>

                </Grid>

            </Grid>

            { /* Publication */}
            <Grid container direction="column" className={classes.container} style={{ backgroundColor: theme.palette.background.bg2 }} >

                <Grid item >
                    <Typography variant="h2" gutterBottom>MY PROOF</Typography>
                </Grid>
                <Grid item >
                    <Fade left duration={1500}>
                        <Typography variant="h1" paragraph>PUBLICATIONS</Typography>
                    </Fade>
                </Grid>

                <Grid item container direction="row" spacing={3}>
                    <Grid item md={6} xs={12}>
                        <Fade left duration={1300}>
                            <div style={{ height: "100%" }}>
                                <Grid item container direction="row" className={classes.box} style={{ height: "100%" }}>
                                    <Grid item container direction="column">
                                        <Typography variant="subtitle1" paragraph>
                                            Sorour Jahanbin, Dimitris Kolovos, and Simos Gerasimou. 2020. Intelligent run-time
                                            partitioning of low-code system models
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            In Proceedings of the 23rd ACM/IEEE International
                                            Conference on Model Driven Engineering Languages and Systems: Companion Proceedings
                                            (MODELS '20)
                                        </Typography>
                                        <Typography variant="subtitle2" style={{ fontSize: "12px" }}>February 2020</Typography>
                                    </Grid>
                                </Grid>
                            </div>
                        </Fade>
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <Fade left duration={1500}>
                            <div style={{ height: "100%" }}>
                                <Grid item container direction="row" className={classes.box} style={{ height: "100%" }}>
                                    <Grid item container direction="column" >
                                        <Typography variant="subtitle1" paragraph>
                                            2018 8th International Conference on Computer and Knowledge Engineering
                                            (ICCKE), Mashhad, 2018
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            S. Jahanbin and B. Zamani, "Test Model Generation Using Equivalence Partitioning"
                                        </Typography>
                                        <Typography variant="subtitle2" style={{ fontSize: "12px" }}>February 2020</Typography>
                                    </Grid>
                                </Grid>
                            </div>
                        </Fade>
                    </Grid>

                </Grid>
            </Grid>

        </React.Fragment>
    )
}

export default Resume;
