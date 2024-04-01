import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
// import NavComponent from "../navigation/navigation";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styles from "./register.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import FooterComponent from "../footer/footer";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../../services/auth.service"
import {toast} from "react-toastify";
import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavIndex';
import Footer from '../Footer copy/FooterIndex';

class RegisterComponent extends Component {
  state = {};
  render() {

    //initiate empty values
    const initialValues = {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      repeatPassword: "",
    };
    const onSubmit = (values, props) => {
      // console.log(values);
      // console.log(JSON.stringify(values,null,2));

      // set input values and call register api
      register({
        firstname: values.firstName,
        lastname: values.lastName,
        username: values.userName,
        email: values.email,
        password: values.password
      })
        .then((res) => {
          // console.log(res.data);
          toast.success('Successfully Registered! Please Login.', {
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
          toast.error('Registration Failed! Please Try Again Later.', {
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

      // console.log(props);
    };

     //set validations for user input values
    const validationSchema = Yup.object().shape({
      userName: Yup.string().min(2,"Mininum 2 characters").required("Requied !"),
      email: Yup.string().email("please enter a valid email").required("Required !"),
      password: Yup.string().matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,"Your Password needs to be 8 or more characters with a combination of Uppercase & Lowercase Letters, Numbers and Special Characters.").required("Requied !"),
      firstName: Yup.string().min(2,"Mininum 2 characters").required("Requied !"),
      lastName: Yup.string().min(2,"Mininum 2 characters").required("Requied !"),
      repeatPassword: Yup.string()
        .oneOf([Yup.ref("password")],"Password`s not match")
        .required("Requied !"),
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
                  <Grid xs={12} sm={10}  md={6} lg={5} xl={5} className={styles.inputFields}>
                    <h1 className={styles.titleRegister}>Register</h1>
                    <Formik
                    //set initial values
                      initialValues={initialValues}
                      onSubmit={onSubmit}
                      //validate input values
                      validationSchema={validationSchema}
                    >
                      {(props) => (
                        <Form pb={2}>
                          {/* {console.log(props)} */}
                          <Field
                            as={TextField}
                            className={styles.input}
                            required
                            id="filled-required"
                            label="First Name"
                            // margin="normal"
                            variant="outlined"
                            placeholder="John"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            InputProps={{
                              style: {
                                height: 38,
                                width: 180,
                              },
                            }}
                            name="firstName"
                            helperText={<ErrorMessage name="firstName" />}
                          />
                          <Field
                            as={TextField}
                            className={styles.input}
                            required
                            id="filled-required"
                            name="lastName"
                            label="Last Name"
                            margin="normal"
                            variant="outlined"
                            placeholder="Doah"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            InputProps={{
                              style: {
                                height: 38,
                                width: 180,
                              },
                            }}
                            helperText={<ErrorMessage name="lastName" />}
                          />
                          <Field
                            as={TextField}
                            className={styles.input}
                            required
                            id="filled-required"
                            name="userName"
                            label="UserName"
                            margin="normal"
                            variant="outlined"
                            placeholder="JohnDoah"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            InputProps={{
                              style: {
                                height: 38,
                                width: 300,
                              },
                            }}
                            helperText={<ErrorMessage name="userName" />}
                            style={{ width: 350 }}
                          />{" "}
                          <br></br>
                          <Field
                            as={TextField}
                            className={styles.input}
                            required
                            id="filled-required"
                            name="email"
                            label="Email"
                            margin="normal"
                            variant="outlined"
                            placeholder="John@example.com"
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
                          />{" "}
                          <br></br>
                          <Field
                            as={TextField}
                            className={styles.input}
                            required
                            id="filled-required"
                            label="Password"
                            name="password"
                            type="password"
                            margin="normal"
                            variant="outlined"
                            placeholder="**************"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            InputProps={{
                              style: {
                                height: 38,
                                width: 300,
                              },
                            }}
                            helperText={<ErrorMessage name="password" />}
                            style={{ width: 350 }}
                          />{" "}
                          <br></br>
                          <Field
                            as={TextField}
                            className={styles.input}
                            required
                            id="filled-required"
                            label="Repeat Password"
                            name="repeatPassword"
                            type="password"
                            margin="normal"
                            variant="outlined"
                            placeholder="**************"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            InputProps={{
                              style: {
                                height: 38,
                                width: 300,
                              },
                            }}
                            helperText={<ErrorMessage name="repeatPassword" />}
                            style={{ width: 300 }}
                          />
                          <div className={styles.clickingSignUp}>
                            By clicking Sign Up you are agreeing to the{" "}
                            <u>Terms and Conditions.</u>
                          </div>
                          <Button
                            className={styles.SignUpButton}
                            type="submit"
                            color="primary"
                            disabled={props.isSubmitting}
                          >
                            {props.isSubmitting ? "Loading" : "Sign Up"}
                          </Button>
                          {/* {console.log(props)} */}
                          <br></br>
                          <div className={styles.alreadyHaveAccount}>
                            Already have an account?{" "}
                            <Link style={{ color: "#04a5cf" }} to="/login">Log In</Link>
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

export default withStyles(styles)(RegisterComponent);
