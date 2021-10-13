import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import Theme from './Theme';
import Menu from './components/Menu';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const useStyles = makeStyles(theme => ({

}))

function App() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <ThemeProvider theme={Theme}>

      <Hidden smDown>
        <Grid container direction="row">

          <Grid item container direction="column" lg={3} md={4}>
            <Menu />
          </Grid>

          <Grid item container direction="column" lg={9} md={8} style={{ position: "relative" }}>
            <div style={{ overflowY: "auto", position: "absolute", width: "100%", height: "100%" }} id="scrollDiv">

              <Hero />
              <About />
              <Resume />
              <Services />
              {/* <Portfolio /> */}
              <Contact />
              <Footer />

            </div>
          </Grid>

        </Grid>
      </Hidden>

      <Hidden mdUp>
        <div style={{ overflowY: "auto", position: "absolute", width: "100%", height: "100%" }} id="scrollDiv">
          <Grid item container direction="column" >
            <Menu />
            <Hero />
            <About />
            <Resume />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />

          </Grid>
        </div>
      </Hidden>

    </ThemeProvider>
  );
}

export default App;
