import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "../../logo.svg";
import SemicolonsLogo from "../../assests/SemicolonsLogo.svg";
import Grid from "@material-ui/core/Grid";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";

// const styles = {
//   root: {
//     flexGrow: 1,
//   },

// };

class FooterComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppBar className={styles.footerbg} position="static">
          <Toolbar>
            <Grid container direction="row" justify="center" alignItems="center" justifyContent="center">
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={styles.footerGrids}>
              <Link to="/" >
                <img src={Logo} alt="CODEMYSKETCH Logo" ></img>{" "}
                </Link>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={styles.footerGrids}>
                <p className={styles.footermiddlepara} >© 2021 CodeMySketch | All Rights Reserved.</p>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={styles.footerGrids}>
              <img src={SemicolonsLogo} alt="SemiColons Logo" className={styles.teamLogo} ></img>{" "}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(FooterComponent);
