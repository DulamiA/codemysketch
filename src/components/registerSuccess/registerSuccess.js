import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
// import NavComponent from "../navigation/navigation";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styles from "./registerSuccess.module.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
// import FooterComponent from "../footer/footer";
import NavBar from '../NavBar/NavIndex';
import Footer from '../Footer copy/FooterIndex';

class registerSuccessComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar/>
        <body className={styles.bodyBg}>
          <Container className={styles.formWrapper}>
            <Grid container>
              <Grid item s={0} sm={0} md={1} lg={1} xl={1}></Grid>
              <Grid
                item
                xs={12}
                sm={10}
                md={10}
                lg={10}
                xl={10}
                className={styles.formContainer}
              >
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={10}
                    md={6}
                    lg={5}
                    xl={5}
                    className={styles.inputFields}
                  >
                    <CheckCircleIcon
                      className={styles.checkIcon}
                    ></CheckCircleIcon>
                    <div className={styles.registrationTitle}>
                      Your Registration has been <br></br>Done Successfully!
                    </div>
                    <div className={styles.recoverPassworddata}>
                      Please login to your account from <u>here</u>
                    </div>
                    <br></br> <br></br>
                    <div className={styles.freeSpace}></div>
                  </Grid>
                  <Grid item xs className={styles.inputbgimage}></Grid>
                </Grid>
              </Grid>
              <Grid item s={0} sm={0} md={1} lg={1} xl={1}></Grid>
            </Grid>
          </Container>
        </body>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(styles)(registerSuccessComponent);
