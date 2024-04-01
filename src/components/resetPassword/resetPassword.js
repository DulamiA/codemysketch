import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
// import NavComponent from "../navigation/navigation";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styles from "./resetPassword.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import FooterComponent from "../footer/footer";
import * as Yup from "yup";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { resetPassword } from "../../services/auth.service";
import { toast } from "react-toastify";
import NavBar from '../NavBar/NavIndex';
import Footer from '../Footer copy/FooterIndex';

// import { resetPassword } from "../../services/auth.service" 

class resetPasswordComponent extends Component {
  state = {};
  render() {
    console.log(this.props)
    const initialValues = {
      newPassword: "",
      repeatPassword: "",
    };
    const onSubmit = (values, props) => {
      console.log(values);

      // set input values & call change password api
      resetPassword({
        guid: this.props.match.params.guid,
        newPassword: values.newPassword
      })
        .then((res) => {
          console.log(res.data);
          toast.success('Password reset successfully. Login with your new password', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          this.props.history.push('/login')
        })
        .catch((err) => {
          console.error(err)
          toast.error('Something went wrong !', {
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

      console.log(props);
    };

    const validationSchema = Yup.object().shape({
      newPassword: Yup.string().matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/).required("Requied !"),
      repeatPassword: Yup.string()
        .oneOf([Yup.ref("newPassword")],"Password`s not match")
        .required("Requied !"),
    });
    return (
      <div>
        <NavBar/>
        <body className={styles.bodyBg}>
          <Container className={styles.formWrapper}>
            <Grid container>
              <Grid item xs={1}></Grid>
              <Grid item xs={10} className={styles.formContainer}>
                <Grid container>
                  <Grid item xs={5} className={styles.inputFields}>
                    <div className={styles.titleChangePassword}>
                      Reset <br></br> Password
                    </div>
                    <br></br> <br></br>
                    <Formik
                      initialValues={initialValues}
                      onSubmit={onSubmit}
                      //validate input values
                      validationSchema={validationSchema}
                    >
                      {(props) => (

                        <Form>
                          
                          <Field
                            as={TextField}
                            className={styles.input}
                            required
                            id="filled-required"
                            label="New Password"
                            type="password"
                            margin="normal"
                            variant="outlined"
                            placeholder="**************"
                            name="newPassword"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            InputProps={{
                              style: {
                                height: 38,
                                width: 370,
                              },
                            }}
                            helperText={<ErrorMessage name="newPassword" />}
                          />
                          <br></br>
                          <Field
                            as={TextField}
                            className={styles.input}
                            required
                            id="filled-required"
                            label="Re-enter New Password"
                            type="password"
                            name="repeatPassword"
                            margin="normal"
                            variant="outlined"
                            placeholder="**************"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            InputProps={{
                              style: {
                                height: 38,
                                width: 370,
                              },
                            }}
                            helperText={<ErrorMessage name="repeatPassword" />}
                          />
                          <Button
                            className={styles.changePasswordButton}
                            type="submit"
                            color="primary"
                          >
                            reset Password
                          </Button>
                          <div className={styles.freeSpace}></div>
                        </Form>
                      )}
                    </Formik>
                  </Grid>
                  <Grid item xs className={styles.inputbgimage}></Grid>
                </Grid>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
          </Container>
          <Footer/>
        </body>
      </div>
    );
  }
}

export default withStyles(styles)(resetPasswordComponent);
