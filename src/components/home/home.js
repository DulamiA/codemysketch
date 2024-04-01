import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
// import NavComponent from "../navigation/navigation";
import Grid from "@material-ui/core/Grid";
import styles from "./home.module.css";
import Button from "@material-ui/core/Button";
import homepageimage1 from "../../assests/homepage-image1.svg";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import howitworks1 from "../../assests/HowItWorks1.svg";
import howitworks2 from "../../assests/HowItWorks2.svg";
import howitworks3 from "../../assests/HowItWorks3.svg";
import feature1 from "../../assests/feature1.svg";
import feature2 from "../../assests/feature2.svg";
import feature3 from "../../assests/feature3.svg";
import feature4 from "../../assests/feature4.svg";
import feature5 from "../../assests/feature5.svg";
import UserContext from "../../context/userContext";
// import FooterComponent from "../footer/footer";
import NavBar from '../NavBar/NavIndex';
import Footer from '../Footer copy/FooterIndex';



class HomeComponent extends Component {
  static contextType = UserContext

  render() {

    // const { user, setUser } = this.context
    console.log(this.props)
    return (
      <div>
        <NavBar/>
        <div className={styles.section1}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item  xs={1} sm={1}  md={1} lg={1} xl={1} ></Grid>
          <Grid item  xs={10} sm={10}  md={10} lg={10} xl={10} >
            <div>
              <h1 className={styles.section1heading}>
                We have the{" "}
                <span className={styles.section1heading2}>
                  {" "}
                code for your sketch{" "}
                </span>
              </h1>
              {/*<p>&#128540;</p>*/}
              <p className={styles.section1subheading}>
                React Native Based Cross Platform Mobile App Code Generator For
                Hand Drawn UI Sketches
              </p>
               <Grid container direction="row" justify="center" alignItems="center" className={styles.buttoncontainer}>
              <Grid item xs={4} className={styles.section2subcontainer}></Grid>
              <Grid container direction="row" justify="center" alignItems="center">
              <Grid item xs={6} sm={4}  md={3} lg={2} xl={2} className={styles.section2subcontainer}>
                <Button className={styles.GetStarted} endIcon={<ArrowRightIcon />} onClick={()=>{
                  this.props.history.push('/howToUse')
                }}>
                  {" "}
                  How To Use
                </Button>
              </Grid>
              <Grid item xs={6} sm={4}  md={3} lg={2} xl={2} className={styles.section2subcontainer}>
                <Button className={styles.GetStarted} endIcon={<ArrowRightIcon />}onClick={()=>{
                  this.props.history.push('/uploadSketch')
                }}>
                  {" "}
                  Get Started
                </Button>
              </Grid>
              </Grid>
              <Grid item xs={4} className={styles.section2subcontainer}></Grid>
            </Grid>
            </div>
            <img
              className={styles.section1image}
              src={homepageimage1}
              alt="Homepage section 1"
            />
          </Grid>
          <Grid item  xs={1} sm={1}  md={1} lg={1} xl={1} ></Grid>
        </Grid>
        </div>

        <div className={styles.section2}>
          <h1 className={styles.section2heading}> How it </h1>
          <h1 className={styles.section2heading2}>Works</h1>
          <Grid container direction="row" justify="center" alignItems="center">
              <Grid item  xs={12} sm={4}  md={3} lg={3} xl={3} className={styles.section2subcontainer}>
                <img src={howitworks1} alt="How It Works 1" /> <br></br>
                Upload UI Sketches
              </Grid>
              <Grid item  xs={12} sm={4} md={3} lg={3} xl={3} className={styles.section2subcontainer}>
                <img src={howitworks2} alt="How It Works 2" /> <br></br>
                React Native Code Genaration
              </Grid>
              <Grid item  xs={12} sm={4} md={3} lg={3} xl={3} className={styles.section2subcontainer}>
                <img src={howitworks3} alt="How It Works 3" /> <br></br>
                Download the code
              </Grid>
          </Grid>
        </div>

        <div className={styles.section3}></div>
        <h1 className={styles.section3heading}> Codemysketch </h1>
        <h1 className={styles.section3heading2}> Features</h1>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item  xs={12} sm={5}  md={4} lg={4} xl={4}>
            <div
              className={styles.section3subcontainer}
              style={{ marginRight: "20px" , marginLeft: "20px" }}
            >
              <img
                className={styles.section3subcontainerimage}
                src={feature1}
                alt="Feature 1"
              />
              {" "}
              <br></br>
              <h1 className={styles.section3subcontainerheading}>
                {" "}
                Quick image scanning capability{" "}
              </h1>
              <p className={styles.section3subcontainerparagraph}>
                Sketch the UI and upload a snapshot through the app. Take a
                breath and wait for a moment, the app will sync with your mind.
              </p>
            </div>
          </Grid>
          <Grid item  xs={12} sm={5}  md={4} lg={4} xl={4}>
            <div
              className={styles.section3subcontainer}
              style={{ marginRight: "20px", marginLeft: "20px" }}
            >
              <img
                className={styles.section3subcontainerimage}
                src={feature2}
                alt="Feature 2"
              />{" "}
              <br></br>
              <h1 className={styles.section3subcontainerheadingright}>
                {" "}
                Seamless process of the sketch into a code{" "}
              </h1>
              <p className={styles.section3subcontainerparagraphright}>
                Making Prototypes is now on your hand. The WebApp will process
                your sketch into a React Native code without any hassle. Provide
                your sketch only, the App will handle others.
              </p>
            </div>
          </Grid>
        </Grid>


        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item  xs={12} sm={5}  md={4} lg={4} xl={4}>
            <div
              className={styles.section3subcontainer}
              style={{  marginRight: "20px", marginLeft: "20px" }}
            >
              <img
                className={styles.section3subcontainerimage}
                src={feature3}
                alt="Feature 3"
              />{" "}
              <br></br>
              <h1 className={styles.section3subcontainerheading}>
                {" "}
                Work with multiple sketches{" "}
              </h1>
              <p className={styles.section3subcontainerparagraph}>
                Does your project have multiple sketches? No problem, the app
                will generate all them into one project.
              </p>
            </div>
          </Grid>
          <Grid item  xs={12} sm={5}  md={4} lg={4} xl={4}>
            <div
              className={styles.section3subcontainer}
              style={{  marginRight: "20px", marginLeft: "20px" }}
            >
              <img
                className={styles.section3subcontainerimage}
                src={feature4}
                alt="Feature 4"
              />{" "}
              <br></br>
              <h1 className={styles.section3subcontainerheadingright}>
                {" "}
                Navigation ability{" "}
              </h1>
              <p className={styles.section3subcontainerparagraphright}>
                Now you can generate your project’s basic navigation system in
                your sketches.
              </p>
            </div>
          </Grid>
        </Grid>

        <Grid container direction="row" justify="center">
          <Grid item  xs={12} sm={5}  md={4} lg={4} xl={4}>
            <div className={styles.section3subcontainer} style={{  marginRight: "20px", marginLeft: "20px" }} >
              <img
                className={styles.section3subcontainerimage}
                src={feature5}
                alt="Feature 5"
              />{" "}
              <br></br>
              <h1 className={styles.section3subcontainerheading}>
                {" "}
                Share your UI idea with co-workers instantly{" "}
              </h1>
              <p className={styles.section3subcontainerparagraph}>
                The place where you in, does not matter. Now you can share your
                UI’s code with your co-worker.
              </p>
            </div>
          </Grid>
        </Grid>
       
        <Footer/>
      </div>
    );
  }
}

export default withStyles(styles)(HomeComponent);
