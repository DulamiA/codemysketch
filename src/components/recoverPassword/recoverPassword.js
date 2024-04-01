import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
// import NavComponent from "../navigation/navigation";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styles from "./recoverPassword.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import FooterComponent from "../footer/footer";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { forgotPassword } from "../../services/auth.service";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavIndex';
import Footer from '../Footer copy/FooterIndex';

class recoverPasswordComponent extends Component {
  state = {};
  render() {
    //initiate empty values
    const initialValues = {
      email: "",
    };
    const onSubmit = (values, props) => {
      console.log(values);
      console.log(JSON.stringify(values,null,2));

      // set input values & call recover password api
      forgotPassword({
        email: values.email
      })
        .then((res) => {
          console.log(res.data);
          this.props.history.push('/emailVerification')
          toast.success('Email has been sent. check your inbox', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          // console.log(email)
        })
        .catch((err) => {
          console.error(err)
        });

      setTimeout(() => {
        props.resetForm();
        props.setSubmitting(false);
      }, 2000);

    };

    //set validations for user input values
    const validationSchema = Yup.object().shape({
      email: Yup.string().email("please enter a valid email").required("Required !"),
    });
    return (
      <div>
        <NavBar/>
        <body className={styles.bodyBg}>
          <Container className={styles.formWrapper}>
            <Grid container>
              <Grid item s={0} sm={0}  md={1} lg={1} xl={1}></Grid>
              <Grid item  xs={12} sm={10}  md={10} lg={10} xl={10} className={styles.formContainer}>
                <Grid container>
                  <Grid item xs={12} sm={10}  md={6} lg={5} xl={5} className={styles.inputFields}>
                    <div className={styles.titleRecoverPassword}>
                      Recover your Password
                    </div>
                    <div className={styles.recoverPassworddata}>
                      Enter your username or email to recover your password
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
                        <Form>
                          <Field
                            as={TextField}
                            className={styles.input}
                            required
                            id="filled-required"
                            label="Username/Email"
                            margin="normal"
                            name="email"
                            variant="outlined"
                            placeholder="sarahd@mycompany.com"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            InputProps={{
                              style: {
                                height: 38,
                                width: 300,
                              },
                            }}
                            helperText={<ErrorMessage name="email" />}
                          />
                          <br></br>

                          <Button
                            className={styles.changePasswordButton}
                            type="submit"
                            color="primary"
                          >
                            Send Recovery Link
                          </Button>
                          <div className={styles.freeSpace}></div>
                          <div className={styles.DontHaveAccount}>
                            Back to <Link style={{ color: "#04a5cf" }} to="/login">Login</Link>
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
        </body>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(styles)(recoverPasswordComponent);
