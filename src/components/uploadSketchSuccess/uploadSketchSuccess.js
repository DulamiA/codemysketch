import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
// import NavComponent from "../navigation/navigation";
import styles from "./uploadSketchSuccess.module.css";
import Grid from "@material-ui/core/Grid";
import HoverRating from "../rating/rating";
import NavBar from '../NavBar/NavIndex';
// import Footer from '../Footer copy/FooterIndex';

class uploadSketchSuccessComponent extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Grid container direction="row" justify="center" alignItems="center">
          <HoverRating/>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(uploadSketchSuccessComponent);
