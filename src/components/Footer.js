import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import myImage from '../assets/images/me.jpg'

const useStyles = makeStyles(theme => ({
    container: {
        padding: "60px 30px",
    },
    icon: {
        color: theme.palette.primary.main,
        fontSize: "1.3rem",
        textDecoration: "none",
    },
}))

const Footer = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <React.Fragment>

            <Grid container className={classes.container} style={{ backgroundColor: theme.palette.secondary.main }} >

                <Grid item container direction={matchesSM ? "column" : "row"} justify="center" alignItems="center" spacing={3}>
                    <Grid item md>
                        <Typography align="center" variant="subtitle2" color="primary" paragraph>© 2021 SOROUR. All rights reserved</Typography>
                    </Grid>

                    <Grid item md>
                        <Grid item container direction="column">
                            <Typography align="center" variant="h1" color="primary" gutterBottom>SOROUR</Typography>
                            <Typography align="center" variant="h2" paragraph>JAHANBIN</Typography>
                        </Grid>
                    </Grid>

                    <Grid item md>
                        <Grid item container justify="center" direction="row" spacing={2}>
                            <Grid item>
                                <a href="https://www.linkedin.com/in/sorour-jahanbin" target="_blank" >
                                    <FacebookIcon color="primary" className={classes.icon} />
                                </a>
                            </Grid>
                            <Grid item>
                                <a href="https://www.linkedin.com/in/sorour-jahanbin" target="_blank" >
                                    <TwitterIcon color="primary" className={classes.icon} />
                                </a>
                            </Grid>
                            <Grid item>
                                <a href="https://www.linkedin.com/in/sorour-jahanbin" target="_blank" >
                                    <InstagramIcon color="primary" className={classes.icon} />
                                </a>
                            </Grid>
                            <Grid item>
                                <a href="https://www.linkedin.com/in/sorour-jahanbin" target="_blank" >
                                    <LinkedInIcon color="primary" className={classes.icon} />
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

        </React.Fragment>
    )
}

export default Footer;
