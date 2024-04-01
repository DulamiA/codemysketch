import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
// import NavComponent from "../navigation/navigation";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styles from "./emailVerification.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Footer2Component from "../footer2/footer2";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { verifyEmail } from "../../services/auth.service"
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavIndex';
// import Footer from '../Footer copy/FooterIndex';

class emailVerificationComponent extends Component {
  state = {};
  render() {

     //initiate empty values
    const initialValues = {
      verifyCode: "",
    };
    

    const onSubmit = (values, props) => {
      console.log(values);

      // call email verification api
      verifyEmail(values.verifyCode)
        .then((res) => {
          console.log(res.data)
          this.props.history.push(`/resetPassword/${values.verifyCode}`)
        })
        .catch((err) => {
          console.error(err);
          toast.error('Invalid code', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });

      setTimeout(() => {
        props.resetForm();
        props.setSubmitting(false);
      }, 2000);

    };

    //set validations for user input values
    const validationSchema = Yup.object().shape({
      verifyCode: Yup.string().required("Requied !"),
    });
    return (
      <div>
        <NavBar/>
        <body className={styles.bodyBg}>
          <Container className={styles.formWrapper}>
            <Grid container>
              <Grid item s={0} sm={0}  md={1} lg={1} xl={1}></Grid>
              <Grid item  xs={12} sm={10}  md={10} lg={10} xl={10}  className={styles.formContainer}>
                <Grid container>
                  <Grid item xs={12} sm={10}  md={6} lg={5} xl={5} className={styles.inputFields}>
                    <div className={styles.titleRecoverPassword}>
                      Email Verification
                    </div>
                    <div className={styles.recoverPassworddata}>
                      Please type the verification code sent to <br></br>
                      sarahd@mycompany.com
                    </div>
                    <br></br> <br></br>
                    <Formik
                      //set initial values
                      initialValues={initialValues}
                      onSubmit={onSubmit}
                      //validate input values
                      validationSchema={validationSchema}
                    >
                      {(props) => (

                        <Form className={styles.form}>
                          <Field 
                            as={TextField}
                            className={styles.input}
                            required
                            id="filled-required"
                            label="Enter the 6 digit code"
                            margin="normal"
                            variant="outlined"
                            placeholder="******"
                            name="verifyCode"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            InputProps={{
                              style: {
                                height: 38,
                                width: 300,
                              },
                            }}
                            helperText={<ErrorMessage name="verifyCode" />}
                          />
                          <br></br>

                          <Button
                            className={styles.changePasswordButton}
                            type="submit"
                            color="primary"
                          >
                            Confirm
                          </Button>
                          <div className={styles.freeSpace}></div>
                          <div className={styles.DontHaveAccount}>
                            Didn't receive the code?{" "}
                            <Link style={{ color: "#04a5cf" }} to="/recoverPassword">
                              Resend the verification code
                            </Link>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </Grid>
                  <Grid item xs className={styles.inputbgimage}></Grid>
                </Grid>
              </Grid>
              <Grid item s={0} sm={0}  md={1} lg={1} xl={1}></Grid>
            </Grid>
          </Container>
          <Footer2Component></Footer2Component>
        </body>
        
      </div>
    );
  }
}

export default withStyles(styles)(emailVerificationComponent);
