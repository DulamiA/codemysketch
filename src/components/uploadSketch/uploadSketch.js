import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
// import NavComponent from "../navigation/navigation";
import styles from "./uploadSketch.module.css";
import Button from "@material-ui/core/Button";
import imagesupload from "../../assests/imageupload.svg";
import Grid from "@material-ui/core/Grid";
import { getUploadImageUrl, getZipURL } from "../../services/auth.service";
import { uploadImage } from "../../services/auth.service";
import { toast } from "react-toastify";
// import imageuploadsuccess from "../../assests/imageuploadsuccess.svg";
import codedownload from "../../assests/codedownload.svg";
import GetAppIcon from "@material-ui/icons/GetApp";
import CircularProgress from "@material-ui/core/CircularProgress";
// import Footer2Component from "../footer2/footer2";
import UserContext from "../../context/userContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import coldark from "react-syntax-highlighter/dist/esm/styles/prism/coldark-dark";
import HoverRating from "../rating/rating";
// import FooterComponent from "./uploadSketchFooter";
import NavBar from '../NavBar/NavIndex';
// import Footer from '../Footer copy/FooterIndex';

class uploadSketchComponent extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      imageData: null,
      agree: false,
    };
  }

  render() {
    const { user } = this.context;

    const uploadPicture = (e) => {
      this.setState(
        {
          /* contains the preview, if you want to show the picture to the user
            you can access it with this.state.currentPicture
        */
          picturePreview: URL.createObjectURL(e.target.files[0]),
          /* this contains the file we want to send */
          pictureAsFile: e.target.files[0],
        },
        () => {
          setImageAction();
        }
      );
    };

    const checkboxHandler = () => {
      if (this.state.agree) {
        this.setState({ agree: false });
      } else {
        this.setState({ agree: true });
      }
    };

    const setImageAction = async () => {
      try {
        this.setState({ isLoading: true });
        const getUploadImageRes = (await getUploadImageUrl({})).data;
        // const formData = new FormData();
        // formData.append(
        //     "file",
        //     this.state.pictureAsFile
        // );

        await fetch(getUploadImageRes.data.signedUrl, {
          method: "put",
          headers: { "Content-Type": this.state.pictureAsFile.type },
          body: this.state.pictureAsFile,
        });

        const imageData = await uploadImage({
          title: "sketch",
          imageUrl: getUploadImageRes.data.imageUrl,
        });
        this.setState({ imageData, isLoading: false });
        // this.props.history.push('/uploadSketchSuccess')
      } catch (e) {
        console.log(e);
        toast.error("Ooops! Something went wrong. Please Try Again", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        this.props.history.push("/howToUse");
      }
    };

    const { imageData, isLoading } = this.state;
    return (
      <div>
        <NavBar/>
        {isLoading ? (
          <div className={styles.progressIcon}>
            <CircularProgress />
          </div>
        ) : (
          <Grid container direction="row" justify="center" alignItems="center">
            {imageData ? (
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

                    <div className={styles.sidebarbox}>
                      <SyntaxHighlighter language="javascript" style={coldark}>
                        {imageData.data.data.code}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contained-button-file">
                      {user.name ? (
                        <Button
                          className={styles.uploadsketchbutton}
                          variant="contained"
                          color="primary"
                          component="span"
                          endIcon={<GetAppIcon />}
                          onClick={() => {
                            getZipURL(imageData.data.data.id)
                              .then((res) => {
                                window.open(res.data.data.url, "_blank");
                              })
                              .catch((err) => {
                                toast.error(
                                  "Ooops! Something went wrong. Please Try Again",
                                  {
                                    position: "bottom-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                  }
                                );
                              });
                          }}
                        >
                          Download
                        </Button>
                      ) : (
                        <p>
                          Please Login to Download the Complete Code! &#129321;
                        </p>
                      )}
                    </label>
                    <p>Please Rate the Output &#129321;</p>
                    <HoverRating/>
                  </div>
                </div>
              </Grid>
            ) : (
              <Grid
                xs={10}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                className={styles.section2subcontainer}
              >
                <div className={styles.uploadsketchbox}>
                  <img src={imagesupload} alt="Upload Images" />
                  <h1 className={styles.uploadsketchheading}>
                    {" "}
                    Upload your sketches{" "}
                  </h1>
                  <br></br>
                  <div>
                    <input
                      className={styles.uploadsketchfile}
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                      name="image"
                      onChange={uploadPicture}
                    />
                    <br></br>
                    <label htmlFor="contained-button-file">
                      <div>
                        <input
                          type="checkbox"
                          id="agree"
                          onChange={checkboxHandler}
                        />
                        <label htmlFor="agree">
                          I hereby agree to the terms and conditions of
                          codemysketch image policy*{" "}
                        </label>
                      </div>

                      <br></br>

                      <Button
                        className={styles.uploadsketchbutton}
                        variant="contained"
                        color="primary"
                        component="span"
                        disabled={!this.state.agree}
                      >
                        Browse
                      </Button>
                    </label>
                  </div>
                </div>
              </Grid>
            )}
          </Grid>
        )}
         {/* <FooterComponent></FooterComponent> */}
      </div>
    );
  }
}

export default withStyles(styles)(uploadSketchComponent);
