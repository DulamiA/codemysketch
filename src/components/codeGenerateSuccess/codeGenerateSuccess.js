import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
// import NavComponent from "../navigation/navigation";
import styles from "./codeGenerateSuccess.module.css";
import Button from "@material-ui/core/Button";
import codedownload from "../../assests/codedownload.svg";
// import downloadIcon from "../../assests/downloadIcon.svg";
import Grid from "@material-ui/core/Grid";
import GetAppIcon from "@material-ui/icons/GetApp";
import Footer2Component from "../footer2/footer2";
// import { getZipURL } from "../../services/auth.service";
// import { toast } from "react-toastify";
import NavBar from '../NavBar/NavIndex';
// import Footer from '../Footer copy/FooterIndex';

class codeGenerateSuccessComponent extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid
              item
              xs={10}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              className={styles.section2subcontainer}
            >
              <div className={styles.uploadsketchbox}>
                <img src={codedownload} alt="Images Uploaded Successfully!" />
                <h1 className={styles.uploadsketchheading}>
                  {" "}
                  Successfully Generated
                </h1>
                <br></br>
                <div>
                  <p>Code Snippet</p>
                  <br></br>
                  <p>
                    {/* {'var MyComponent = function() {\r\n  this.render = function() {\r\n     return React.createElement(\"div\", {\r\n       className: \"my-component\"\r\n     }, \"Hello there\");\r\n  };\r\n};'} */}
                  </p>
                </div>
                <div>
                  <label htmlFor="contained-button-file">
                    <Button
                      className={styles.uploadsketchbutton}
                      variant="contained"
                      color="primary"
                      component="span"
                      endIcon={<GetAppIcon />}
                    >
                      Download
                    </Button>
                  </label>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <Footer2Component></Footer2Component>
      </div>
    );
  }
}

export default withStyles(styles)(codeGenerateSuccessComponent);
