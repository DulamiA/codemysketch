import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
// import NavComponent from "../navigation/navigation";
// import FooterComponent from "../footer/footer";
import Grid from "@material-ui/core/Grid";
import styles from "./aboutUs.module.css";
import AboutUsCover from "../../assests/aboutuscover.jpg";
import shamal from "../../assests/shamal.jpg";
import Thilini from "../../assests/Thilini.jpg";
import Hiruni from "../../assests/Hiruni.png";
import Punsisi from "../../assests/Punsisi.png";
import Anushka from "../../assests/Anushka.png";
import Chamod from "../../assests/Chamod.png";
import SemicolonsCover from "../../assests/SemicolonsCover.jpg";
import NavBar from '../NavBar/NavIndex';
import Footer from '../Footer copy/FooterIndex';

class AboutUsComponent extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className={styles.section1}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
            <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
              <h1 className={styles.section1heading}>
                About{" "}
                <span className={styles.section1heading2}> CodeMySketch </span>
              </h1>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <img
                    src={AboutUsCover}
                    alt="How To Use - Profile"
                    className={styles.imgcover}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <p className={styles.section1subheading}>
                    The aim of the project is to design, develop and evaluate a
                    system that would generate prototype source code based on
                    the hand drawn wireframes. <br></br><br></br>
                    This project will provide a software solution to automate
                    the process of implementing GUIs after the hand-drawn
                    sketches/wireframes are done without the requirement of
                    coding for any user.<br></br><br></br>
                    Through the implementation of this project, it will be
                    capable to accurately detect and classify GUI-components in
                    a mock-up artifact, generate hierarchies that are similar to
                    those that a developer would create and to generate on
                    creation of apps that are visually similar to mock-up
                    artifacts. <br></br><br></br>
                    A novel approach is aimed throughout
                    this project which the prototyping process can be automated
                    to save time on developing UI prototypes. Using this
                    approach, the application components can be developed from
                    its sketches and convert it into its corresponding UI which
                    the performance is affected by the training data sets which
                    can be improved by providing more labelled examples of
                    sketches.
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
          </Grid>
        </div>

        <div className={styles.sectionBlue}>
          <h1 className={styles.section2heading}> Our </h1>
          <h1 className={styles.section2heading2}>Team</h1>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={2}
              xl={2}
              className={styles.section2subcontainer}
            >
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={8}
              xl={8}
              className={styles.section2subcontainer}
            >
              <img
                src={SemicolonsCover}
                alt="How To Use"
                className={styles.imgalign}
              />{" "}
              <br></br>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={2}
              xl={2}
              className={styles.section2subcontainer}
            >
            </Grid>
          </Grid>
          <p className={styles.section2subheading}>
          We are Semicolons
          </p>


          <Grid container direction="row" justify="center" alignItems="center">
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              xl={3}
              className={styles.section2subcontainer}
            >
              <img
                src={Punsisi}
                alt="How To Use - Profile"
                className={styles.imgalign}
              />{" "}
              <br></br>
              Punsisi Kaludewa
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              xl={3}
              className={styles.section2subcontainer}
            >
              <img
                src={Hiruni}
                alt="How To Use"
                className={styles.imgalign}
              />{" "}
              <br></br>
              Hiruni Kaushika
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              xl={3}
              className={styles.section2subcontainer}
            >
              <img
                src={Thilini}
                alt="How To Use - Paragraph"
                className={styles.imgalign}
              />{" "}
              <br></br>
              Thilini Pabasara
            </Grid>
          </Grid>
        </div>
        <div className={styles.sectionBlue}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              xl={3}
              className={styles.section2subcontainer}
            >
              <img
                src={Anushka}
                alt="How To Use - Check Box"
                className={styles.imgalign}
              />{" "}
              <br></br>
              Anushka Madushanka
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              xl={3}
              className={styles.section2subcontainer}
            >
              <img
                src={Chamod}
                alt="How To Use - Text Box"
                className={styles.imgalign}
              />{" "}
              <br></br>
              Chamod Bhanuka
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              xl={3}
              className={styles.section2subcontainer}
            >
              <img
                src={shamal}
                alt="How To Use - Drop Down"
                className={styles.imgalign}
              />{" "}
              <br></br>
              Shamal Iroshan
            </Grid>
          </Grid>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(styles)(AboutUsComponent);
