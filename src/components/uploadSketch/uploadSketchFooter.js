import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Grid from "@material-ui/core/Grid";
import styles from "./uploadSketchFooter.module.css";

class FooterComponent extends Component {
  state = {};
  render() {
    return (
      <div className={styles.footerDev}>
        <AppBar className={styles.footerbg}>
          <Toolbar>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <p className={styles.footermiddlepara} >* The images which are being uploaded will be subjected for further machine learning model training. They will be securely stored whereas image privacy is fully authorized to the owner.</p>
                </Grid>
            </Grid>
            {/* <Grid container direction="row" justify="center" alignItems="center" justifyContent="center">
              
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={styles.footerGrids}>
                <p className={styles.footermiddlepara} >* The images which are being uploaded will be subjected for further machine learning model training. They will be securely stored whereas image privacy is fully authorized to the owner.</p>
              </Grid>
             
            </Grid> */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(FooterComponent);