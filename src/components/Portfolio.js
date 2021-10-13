import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Fade from 'react-reveal/Fade';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import portfolio1 from '../assets/images/portfolio1.jpg'
import portfolio2 from '../assets/images/portfolio2.jpg'
import portfolio3 from '../assets/images/portfolio3.jpg'
import portfolio4 from '../assets/images/portfolio4.jpg'
import portfolio5 from '../assets/images/portfolio5.jpg'
import portfolio6 from '../assets/images/portfolio6.jpg'


const useStyles = makeStyles(theme => ({
    container: {
        padding: "60px 30px",
    },
    box: {
        position: "relative",
        "& div": {
            transition: "0.5s",
            position: "relative",
            height: "99.4%",
            "& div": {
                backgroundColor: "rgba(0, 0, 0, .9)",
                opacity: 0
            }
        },
        "&:hover": {
            "& div": {
                opacity: 1
            }
        }
    }
}))

const Portfolio = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <React.Fragment>
            <Grid container direction="column" className={classes.container} style={{ backgroundColor: theme.palette.background.bg2 }} id="portfolio">

                <Grid item >
                    <Typography variant="h2" gutterBottom>PORTFOLIO</Typography>
                </Grid>
                <Grid item >
                    <Fade left duration={1500}>
                        <Typography variant="h1" paragraph>CREATIVE WORKS</Typography>
                    </Fade>
                </Grid>

                <Grid item container direction="row" spacing={3}>
                    <Grid item lg={4} md={6} xs={12} className={classes.box} >
                        <Grid item>
                            <Fade left duration={1500}>
                                <div>
                                    <Grid item container direction="column" style={{ position: "absolute", paddingTop: "40px", paddingLeft: "30px" }}>
                                        <Typography variant="h3" color="primary" paragraph>MOCKUP</Typography>
                                        <Typography variant="subtitle2" >Branding Desing</Typography>
                                    </Grid>
                                    <img src={portfolio1} alt="me" draggable="false" style={{ width: "100%" }} />
                                </div>
                            </Fade>
                        </Grid>

                    </Grid>

                    <Grid item lg={4} md={6} xs={12} className={classes.box} >
                        <Grid item>
                            <Fade left duration={1300}>
                                <div>
                                    <Grid item container direction="column" style={{ position: "absolute", paddingTop: "40px", paddingLeft: "30px" }}>
                                        <Typography variant="h3" color="primary" paragraph>BOOK</Typography>
                                        <Typography variant="subtitle2" >Graphic Desing</Typography>
                                    </Grid>
                                    <img src={portfolio2} alt="me" draggable="false" style={{ width: "100%" }} />
                                </div>
                            </Fade>
                        </Grid>
                    </Grid>

                    <Grid item lg={4} md={6} xs={12} className={classes.box} >
                        <Grid item>
                            <Fade left duration={1100}>
                                <div>
                                    <Grid item container direction="column" style={{ position: "absolute", paddingTop: "40px", paddingLeft: "30px" }}>
                                        <Typography variant="h3" color="primary" paragraph>CLOCK</Typography>
                                        <Typography variant="subtitle2" >Graphic Desing</Typography>
                                    </Grid>
                                    <img src={portfolio3} alt="me" draggable="false" style={{ width: "100%" }} />
                                </div>
                            </Fade>
                        </Grid>
                    </Grid>

                    <Grid item lg={4} md={6} xs={12} className={classes.box} >
                        <Grid item>
                            <Fade left duration={1500}>
                                <div>
                                    <Grid item container direction="column" style={{ position: "absolute", paddingTop: "40px", paddingLeft: "30px" }}>
                                        <Typography variant="h3" color="primary" paragraph>LOGO</Typography>
                                        <Typography variant="subtitle2" >Branding Desing</Typography>
                                    </Grid>
                                    <img src={portfolio4} alt="me" draggable="false" style={{ width: "100%" }} />
                                </div>
                            </Fade>
                        </Grid>
                    </Grid>

                    <Grid item lg={4} md={6} xs={12} className={classes.box} >
                        <Grid item>
                            <Fade left duration={1300}>
                                <div>
                                    <Grid item container direction="column" style={{ position: "absolute", paddingTop: "40px", paddingLeft: "30px" }}>
                                        <Typography variant="h3" color="primary" paragraph>KINFOLD</Typography>
                                        <Typography variant="subtitle2" >Adobe Desing</Typography>
                                    </Grid>
                                    <img src={portfolio5} alt="me" draggable="false" style={{ width: "100%" }} />
                                </div>
                            </Fade>
                        </Grid>
                    </Grid>

                    <Grid item lg={4} md={6} xs={12} className={classes.box} >
                        <Grid item>
                            <Fade left duration={1100}>
                                <div>
                                    <Grid item container direction="column" style={{ position: "absolute", paddingTop: "40px", paddingLeft: "30px" }}>
                                        <Typography variant="h3" color="primary" paragraph>EIGHT</Typography>
                                        <Typography variant="subtitle2" >Adobe Desing</Typography>
                                    </Grid>
                                    <img src={portfolio6} alt="me" draggable="false" style={{ width: "100%" }} />
                                </div>
                            </Fade>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>
        </React.Fragment>
    )
}

export default Portfolio;
