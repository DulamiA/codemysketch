import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
// import NavComponent from "../navigation/navigation";
import Grid from "@material-ui/core/Grid";
import styles from "./howToUse.module.css";
import Button from "@material-ui/core/Button";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import HowToUseProfile from "../../assests/HowToUSe - Profile.svg";
import HowToUseImage from "../../assests/HowToUSe - Image.svg";
import HowToUseParagraph from "../../assests/HowToUSe - Paragraph.svg";
import HowToUseCheckBox from "../../assests/HowToUSe - CheckBox.svg";
import HowToUseTextBox from "../../assests/HowToUSe - TextBox.svg";
import HowToUseDropDown from "../../assests/HowToUSe - DropDown.svg";
import HowToUseLabel from "../../assests/HowToUSe - UserName.svg";
import HowToUseBackArrow from "../../assests/HowToUSe - BackArrow.svg";
import HowToUseRadioInput from "../../assests/HowToUSe - RadioInput.svg";
import HowToUseButton from "../../assests/HowToUSe - Button.svg";
import HowToUseCard from "../../assests/HowToUSe - Card.svg";
import HowToUseMenu from "../../assests/HowToUSe - Menu.svg";
import HowToUseSearchIcon from "../../assests/HowToUSe - Search.svg";
import HowToUseLine from "../../assests/HowToUSe - Line.svg";
import homepageimage1 from "../../assests/homepage-image1.svg";
// import FooterComponent from "../footer/footer";
import NavBar from '../NavBar/NavIndex';
import Footer from '../Footer copy/FooterIndex';

class HowToUseComponent extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className={styles.section1} >
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item  xs={1} sm={1}  md={1} lg={1} xl={1} ></Grid>
          <Grid item  xs={10} sm={10}  md={10} lg={10} xl={10} >
          
          <h1 className={styles.section1heading}>
              How to use{" "}
              <span className={styles.section1h4eading2}>
                {" "}
                CodeMySketch{" "}
              </span>
            </h1>
            <p className={styles.section1subheading}>
            Users need to upload the hand drawn UI sketches for a standardized method like shown below 
            in order to get an accurate detection since the model is trained using the labeled sample images 
            which are drawn using the similar sample elements.
            </p>
          
          </Grid>
          <Grid item  xs={1} sm={1}  md={1} lg={1} xl={1} ></Grid>
          </Grid>
          </div>

        <div className={styles.sectionBlue}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item  xs={12} sm={12}  md={4} lg={3} xl={3}    className={styles.section2subcontainer}>
              <img src={HowToUseProfile} alt="How To Use - Profile" className={styles.imgalign} /> <br></br>
              Profile
            </Grid>
            <Grid  item  xs={12} sm={12}  md={4} lg={3} xl={3} className={styles.section2subcontainer}>
              <img src={HowToUseImage} alt="How To Use" className={styles.imgalign} /> <br></br>
              Image
            </Grid>
            <Grid item xs={12} sm={12}  md={4} lg={3} xl={3} className={styles.section2subcontainer}>
              <img src={HowToUseParagraph} alt="How To Use - Paragraph" className={styles.imgalign} /> <br></br>
              Paragraph
            </Grid>
          </Grid>
        </div>
        <div className={styles.sectionWhite}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12} sm={12}  md={4} lg={3} xl={3}  className={styles.section2subcontainer}>
              <img src={HowToUseCheckBox} alt="How To Use - Check Box" className={styles.imgalign} /> <br></br>
              Check Box
            </Grid>
            <Grid item xs={12} sm={12}  md={4} lg={3} xl={3}  className={styles.section2subcontainer}>
              <img src={HowToUseTextBox} alt="How To Use - Text Box" className={styles.imgalign} /> <br></br>
              Text Box
            </Grid>
            <Grid item xs={12} sm={12}  md={4} lg={3} xl={3}  className={styles.section2subcontainer}>
              <img src={HowToUseDropDown} alt="How To Use - Drop Down" className={styles.imgalign} /> <br></br>
              Drop Down
            </Grid>
          </Grid>
        </div>
        <div className={styles.sectionBlue}>
        
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12} sm={12}  md={4} lg={3} xl={3} className={styles.section2subcontainer}>
              <img src={HowToUseLabel} alt="How To Use - Label/Text" className={styles.imgalign} /> <br></br>
              Label/Text
            </Grid>
            <Grid item xs={12} sm={12}  md={4} lg={3} xl={3} className={styles.section2subcontainer}>
              <img src={HowToUseBackArrow} alt="How To Use - Back Arrow" className={styles.imgalign} /> <br></br>
              Back Arrow
            </Grid>
            <Grid item xs={12} sm={12}  md={4} lg={3} xl={3} className={styles.section2subcontainer}>
              <img src={HowToUseRadioInput} alt="How To Use - Radio input" className={styles.imgalign} /> <br></br>
              Radio input
            </Grid>
          </Grid>
        </div>
        <div className={styles.sectionWhite}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12} sm={12}  md={4} lg={3} xl={3} className={styles.section2subcontainer}>
              <img src={HowToUseButton} alt="How To Use - Button" className={styles.imgalign} /> <br></br>
              Button
            </Grid>
            <Grid item xs={12} sm={12}  md={4} lg={3} xl={3} className={styles.section2subcontainer}>
              <img src={HowToUseCard} alt="How To Use - Card" className={styles.imgalign} /> <br></br>
              Card
            </Grid>
            <Grid item xs={12} sm={12}  md={4} lg={3} xl={3} className={styles.section2subcontainer}>
              <img src={HowToUseMenu} alt="How To Use - Menu" className={styles.imgalign} /> <br></br>
              Menu
            </Grid>
          </Grid>
        </div>
        <div className={styles.sectionBlue}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12} sm={12}  md={4} lg={3} xl={3} className={styles.section2subcontainer}>
              <img src={HowToUseSearchIcon} alt="How To Use - Search Icon" className={styles.imgalign} /> <br></br>
              Search Icon
            </Grid>
            <Grid item xs={12} sm={12}  md={4} lg={3} xl={3} className={styles.section2subcontainer}>
              <img src={HowToUseLine} alt="How To Use - Line" className={styles.imgalign} /> <br></br>
              Line
            </Grid>
            <Grid item xs={12} sm={12}  md={4} lg={3} xl={3} className={styles.section2subcontainer}></Grid>
          </Grid>
        </div>
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
              <p className={styles.section1subheading}>
                React Native Based Cross Platform Mobile App Code Generator For
                Hand Drawn UI Sketches
              </p>
              <Button className={styles.GetStarted} endIcon={<ArrowRightIcon />} onClick={()=>{
                this.props.history.push('/uploadSketch')
              }}>
                {" "}
                Get Started
              </Button>
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
        <Footer/>
      </div>
    );
  }
}

export default withStyles(styles)(HowToUseComponent);
