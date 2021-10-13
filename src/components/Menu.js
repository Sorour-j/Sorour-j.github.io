import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
    container: {
        padding: "60px 30px",
        boxShadow: "0 0 30px rgba(0, 0, 0, 0.05)",
        height: "100vh",
        minHeight: "635px",
    },
    title: {
        fontWeight: 500,
        fontSize: "40px",
        lineHeight: "1em",
        textTransform: "uppercase",
        letterSpacing: "3px"
    },
    subtitle: {
        fontSize: "16px",
        textTransform: "uppercase",
        fontWeight: 400,
        letterSpacing: "3px",
    },
    tab: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        align: "left !important",
        padding: 0,
        fontFamily: "Oswald",
        fontWeight: 400,
        lineHeight: "1.75em",
        color: theme.palette.common.gray,
        fontSize: "14px",
        textTransform: "uppercase",
        letterSpacing: "2px",
        "& .MuiTab-wrapper": {
            alignItems: "flex-start",
        },
        "&:hover": {
            color: theme.palette.secondary.main,
        }
    },
    icon: {
        color: theme.palette.secondary.main,
        fontSize: "1.3rem",
        textDecoration: "none",
    },
    copyright: {
        fontSize: "0.75rem",
        fontWeight: 400,
        color: theme.palette.common.gray,
        marginTop: "15px",
        "& a": {
            fontSize: "0.75rem",
            textDecoration: "none",
            color: theme.palette.common.black
        }
    },
    menuContainer: {
        position: 'absolute',
        zIndex: 2,
        right: '20px',
        top: "20px",
    },
    menuHamTop: {
        backgroundColor: theme.palette.primary.main,
        padding: "10px 10px",
        borderRadius: "35px",
        boxShadow: '0 0 100px -5px rgba(0,0,0,.25)',
    },
    menuIcon: {
        fontSize: "2.2rem",
        transition: '0.3s',
        cursor: "pointer",
        userSelect: "none",
        "&:hover": {
            color: theme.palette.primary.main,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.8rem",
        },
    },
    menuPopContent: {
        padding: "60px 30px",
    }
}))

const homeLink = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#home');

    if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
const aboutLink = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#about');
    const Div = (event.target.ownerDocument || document).querySelector('#scrollDiv');
    if (anchor) {
        const x = anchor.offsetTop - 0;
        Div[`scrollTo`]({ top: x, behavior: `smooth` })
    }
};
const resumeLink = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#resume');
    const Div = (event.target.ownerDocument || document).querySelector('#scrollDiv');

    if (anchor) {
        const x = anchor.offsetTop - 0;
        Div[`scrollTo`]({ top: x, behavior: `smooth` })
    }
};
const servicesLink = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#services');
    const Div = (event.target.ownerDocument || document).querySelector('#scrollDiv');

    if (anchor) {
        const x = anchor.offsetTop - 0;
        Div[`scrollTo`]({ top: x, behavior: `smooth` })
    }
};
const portfolioLink = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#portfolio');
    const Div = (event.target.ownerDocument || document).querySelector('#scrollDiv');

    if (anchor) {
        const x = anchor.offsetTop - 0;
        Div[`scrollTo`]({ top: x, behavior: `smooth` })
    }
};
const contactLink = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#contact');
    const Div = (event.target.ownerDocument || document).querySelector('#scrollDiv');

    if (anchor) {
        const x = anchor.offsetTop - 0;
        Div[`scrollTo`]({ top: x, behavior: `smooth` })
    }
};

export default function Menu() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

    const [value, setValue] = React.useState(false);
    const [currentTab, setCurrentTab] = useState(0);
    const [menuCheck, setMenuCheck] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>

            <Hidden smDown>
                <Grid container direction="column" justify="space-between" className={classes.container} >
                    <Grid item container direction="column" >
                        <Grid item >
                            <Typography align="center" variant="h1" className={classes.title} gutterBottom>SOROUR</Typography>
                        </Grid>
                        <Grid item >
                            <Typography align="center" variant="subtitle1" className={classes.subtitle} gutterBottom>JAHANBIN</Typography>
                        </Grid>

                        <Grid item style={{ marginTop: "80px" }}>
                            <Tabs
                                orientation="vertical"
                                variant="fullWidth"
                                value={value} // value={window.location.pathname}
                                // onChange={handleChange}
                                aria-label="Vertical tabs example"
                                indicatorColor="primary"
                                textColor="secondary"
                            >
                                <Tab className={classes.tab} label="home" onClick={homeLink} />
                                <Tab className={classes.tab} label="about" onClick={aboutLink} />
                                <Tab className={classes.tab} label="resume" onClick={resumeLink} />
                                <Tab className={classes.tab} label="projects" onClick={servicesLink} />
                                {/* <Tab className={classes.tab} label="portfolio" onClick={portfolioLink} /> */}
                                <Tab className={classes.tab} label="contact" onClick={contactLink} />
                            </Tabs>
                        </Grid>
                    </Grid>

                    <Grid item container direction="column" alignItems="center">
                        <Grid item container justify="center" direction="row" spacing={2}>
                            <Grid item>
                                <a href="https://www.linkedin.com/in/sorour-jahanbin" target="_blank" >
                                    <FacebookIcon className={classes.icon} />
                                </a>
                            </Grid>
                            <Grid item>
                                <a href="https://www.linkedin.com/in/sorour-jahanbin" target="_blank" >
                                    <TwitterIcon className={classes.icon} />
                                </a>
                            </Grid>
                            <Grid item>
                                <a href="https://www.linkedin.com/in/sorour-jahanbin" target="_blank" >
                                    <InstagramIcon className={classes.icon} />
                                </a>
                            </Grid>
                            <Grid item>
                                <a href="https://www.linkedin.com/in/sorour-jahanbin" target="_blank" >
                                    <LinkedInIcon className={classes.icon} />
                                </a>
                            </Grid>
                        </Grid>
                        <Grid item >
                            <Typography align="center" variant="body2" className={classes.copyright} >
                                © 2021 SOROUR by
                                <a href="https://fmcv.ir" target="_blank" rel="noreferrer" style={{ fontWeight: "bold" }}> fmcv.ir</a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>


            {/*----- Mobile View -----*/}
            <Hidden mdUp>

                <Grid item className={classes.menuContainer} style={{ position: "fixed" }}>
                    <Grid item container direction="row-reverse" justify="center" >

                        <Grid item>
                            <Grid item container className={classes.menuHamTop}>
                                <MenuOutlinedIcon className={classes.menuIcon} style={{ color: theme.palette.secondary.main }} onClick={() => setMenuCheck(!menuCheck)} />
                            </Grid>

                            <Grid item >
                                <SwipeableDrawer
                                    anchor="left"
                                    open={menuCheck}
                                    onClose={() => setMenuCheck(false)}
                                    onOpen={() => setMenuCheck(true)}
                                    className={classes.menuPop}
                                >
                                    <Grid item container direction="column" justify="space-between" className={classes.menuPopContent}>

                                        <Grid item container direction="column" >
                                            <Grid item >
                                                <Typography align="center" variant="h1" className={classes.title} gutterBottom>SOROUR</Typography>
                                            </Grid>
                                            <Grid item >
                                                <Typography align="center" variant="subtitle1" className={classes.subtitle} gutterBottom>JAHANBIN</Typography>
                                            </Grid>

                                            <Grid item style={{ marginTop: "80px" }}>
                                                <Tabs
                                                    orientation="vertical"
                                                    variant="fullWidth"
                                                    value={value} // value={window.location.pathname}
                                                    // onChange={handleChange}
                                                    aria-label="Vertical tabs example"
                                                    indicatorColor="primary"
                                                    textColor="secondary"
                                                >
                                                    <Tab className={classes.tab} label="home" onClick={(e) => { setMenuCheck(false); homeLink(e); }} />
                                                    <Tab className={classes.tab} label="about" onClick={(e) => { setMenuCheck(false); aboutLink(e); }} />
                                                    <Tab className={classes.tab} label="resume" onClick={(e) => { setMenuCheck(false); resumeLink(e); }} />
                                                    <Tab className={classes.tab} label="projects" onClick={(e) => { setMenuCheck(false); servicesLink(e); }} />
                                                    {/* <Tab className={classes.tab} label="portfolio" onClick={(e) => { setMenuCheck(false); portfolioLink(e); }} /> */}
                                                    <Tab className={classes.tab} label="contact" onClick={(e) => { setMenuCheck(false); contactLink(e); }} />
                                                </Tabs>
                                            </Grid>
                                        </Grid>

                                        <Grid item container direction="column" alignItems="center" style={{ marginTop: "50px" }}>
                                            <Grid item container justify="center" direction="row" spacing={2}>
                                                <Grid item>
                                                    <a href="https://www.linkedin.com/in/sorour-jahanbin" target="_blank" >
                                                        <FacebookIcon className={classes.icon} />
                                                    </a>
                                                </Grid>
                                                <Grid item>
                                                    <a href="https://www.linkedin.com/in/sorour-jahanbin" target="_blank" >
                                                        <TwitterIcon className={classes.icon} />
                                                    </a>
                                                </Grid>
                                                <Grid item>
                                                    <a href="https://www.linkedin.com/in/sorour-jahanbin" target="_blank" >
                                                        <InstagramIcon className={classes.icon} />
                                                    </a>
                                                </Grid>
                                                <Grid item>
                                                    <a href="https://www.linkedin.com/in/sorour-jahanbin" target="_blank" >
                                                        <LinkedInIcon className={classes.icon} />
                                                    </a>
                                                </Grid>
                                            </Grid>
                                            <Grid item >
                                                <Typography align="center" variant="body2" className={classes.copyright} >
                                                    © 2021 SOROUR by
                                                    <a href="https://fmcv.ir" target="_blank" rel="noreferrer" style={{ fontWeight: "bold" }}> fmcv.ir</a>
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </SwipeableDrawer>
                            </Grid >
                        </Grid >



                    </Grid >
                </Grid >

            </Hidden>
        </React.Fragment>
    )
}
