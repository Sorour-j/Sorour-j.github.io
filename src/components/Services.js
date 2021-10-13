import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Fade from 'react-reveal/Fade';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import LaptopMacOutlinedIcon from '@material-ui/icons/LaptopMacOutlined';
import WbIncandescentOutlinedIcon from '@material-ui/icons/WbIncandescentOutlined';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import ImportantDevicesOutlinedIcon from '@material-ui/icons/ImportantDevicesOutlined';
import BubbleChartOutlinedIcon from '@material-ui/icons/BubbleChartOutlined';

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

const Services = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <React.Fragment>
            <Grid container direction="column" className={classes.container} id="services">

                <Grid item >
                    <Typography variant="h2" gutterBottom>WHAT I DO</Typography>
                </Grid>
                <Grid item >
                    <Fade left duration={1500}>
                        <Typography variant="h1" paragraph>SELECTED PROJECTS</Typography>
                    </Fade>
                </Grid>

                <Grid item container direction="row" spacing={3}>
                    <Grid item lg={4} md={6} xs={12} >
                        <Fade left duration={1500}>
                            <div style={{ height: "100%" }}>
                                <Grid item container direction="row" className={classes.box} style={{ height: "100%" }}>
                                    <Grid item container direction="column" alignItems="center">
                                        {/* <LaptopMacOutlinedIcon style={{ fontSize: "50px", marginBottom: "10px" }} /> */}
                                        <Typography align="center" variant="h3" paragraph>
                                            Course: Automatic Verification
                                        </Typography>
                                        <Typography align="center" variant="subtitle1" paragraph>
                                            Model Checking
                                        </Typography>
                                        <Typography align="center" variant="subtitle2">
                                            A project about automated testing test generation using model checking with UPPAL
                                </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                        </Fade>
                    </Grid>

                    <Grid item lg={4} md={6} xs={12} >
                        <Fade left duration={1300}>
                            <div style={{ height: "100%" }}>
                                <Grid item container direction="row" className={classes.box} style={{ height: "100%" }}>
                                    <Grid item container direction="column" alignItems="center">
                                        {/* <WbIncandescentOutlinedIcon style={{ fontSize: "50px", marginBottom: "10px" }} /> */}
                                        <Typography align="center" variant="h3" paragraph>
                                            Course: Software Architecture
                                        </Typography>
                                        <Typography align="center" variant="subtitle1" paragraph>
                                            Architecture patterns
                                        </Typography>
                                        <Typography align="center" variant="subtitle2">
                                            A project about architectural analysis of municipal waste management systems
                                </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                        </Fade>
                    </Grid>

                    <Grid item lg={4} md={6} xs={12} >
                        <Fade left duration={1100}>
                            <div style={{ height: "100%" }}>
                                <Grid item container direction="row" className={classes.box} style={{ height: "100%" }}>
                                    <Grid item container direction="column" alignItems="center">
                                        {/* <CameraAltOutlinedIcon style={{ fontSize: "50px", marginBottom: "10px" }} /> */}
                                        <Typography align="center" variant="h3" paragraph>
                                            Course: Dynamic Complex Networks
                                        </Typography>
                                        <Typography align="center" variant="subtitle1" paragraph>
                                            Social network and complex network analysis
                                        </Typography>
                                        <Typography align="center" variant="subtitle2">
                                            Work with Gephi tool
                                </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                        </Fade>
                    </Grid>

                    <Grid item lg={4} md={6} xs={12} >
                        <Fade left duration={1500}>
                            <div style={{ height: "100%" }}>
                                <Grid item container direction="row" className={classes.box} style={{ height: "100%" }}>
                                    <Grid item container direction="column" alignItems="center">
                                        {/* <AssessmentOutlinedIcon style={{ fontSize: "50px", marginBottom: "10px" }} /> */}
                                        <Typography align="center" variant="h3" paragraph>
                                            Course: Specific topic in software
                                </Typography>
                                        <Typography align="center" variant="subtitle2">
                                            Model-Driven engineering, Model transformation programs, model management
                                            languages like Epsilon languages, ATL
                                </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                        </Fade>
                    </Grid>

                    <Grid item lg={4} md={6} xs={12} >
                        <Fade left duration={1300}>
                            <div style={{ height: "100%" }}>
                                <Grid item container direction="row" className={classes.box} style={{ height: "100%" }}>
                                    <Grid item container direction="column" alignItems="center">
                                        {/* <ImportantDevicesOutlinedIcon style={{ fontSize: "50px", marginBottom: "10px" }} /> */}
                                        <Typography align="center" variant="h3" paragraph>
                                            Course: Thesis
                                </Typography>
                                        <Typography align="center" variant="subtitle2">
                                            A new approach for generation models in model transformation testing
                                            Implement a tool for generating test models with a graphical interface using Java,
                                            EPL and EMG languages
                                </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                        </Fade>
                    </Grid>

                    <Grid item lg={4} md={6} xs={12} >
                        <Fade left duration={1100}>
                            <div style={{ height: "100%" }}>
                                <Grid item container direction="row" className={classes.box} style={{ height: "100%" }}>
                                    <Grid item container direction="column" alignItems="center">
                                        {/* <BubbleChartOutlinedIcon style={{ fontSize: "50px", marginBottom: "10px" }} /> */}
                                        <Typography align="center" variant="h3" paragraph>
                                            Course: Software Engineering
                                </Typography>
                                        <Typography align="center" variant="subtitle2">
                                            • Design and develop management software for a computer institute, with the ability
                                            to enrol the students, accounting management, add new courses, plan of classes and
                                            store student and employer’s information using Java, Linq, SQL Server and UML
                                            diagram
                                </Typography>
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

export default Services;
