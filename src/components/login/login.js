import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
// import NavComponent from "../navigation/navigation";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styles from "./login.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import FooterComponent from "../footer/footer";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../services/auth.service";
import { authentication } from "../../App.js";
import UserContext from "../../context/userContext";
import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavIndex';
import Footer from '../Footer copy/FooterIndex';

class LoginComponent extends Component {
  static contextType = UserContext

  state = {};
  render() {

    const { setUser } = this.context


    //initiate empty values
    const initialValues = {
      userName: "",
      password: "",
    };
    const onSubmit = (values, props) => {
      console.log(values);
      // console.log(JSON.stringify(values,null,2));

      // set input values and call login api
      login({
        username: values.userName,
        password: values.password,
      })
        .then((res) => {
          console.log(authentication.getLoginInStatus())
          const { data } = res.data 
          localStorage.setItem('accessToken', data.tokens.accessToken)
          const newUser = { name: data.user.username, loggedIn: true }
          localStorage.setItem("userData",JSON.stringify(newUser));
          this.props.history.push('/')
          setUser(newUser)
        })
        .catch((err) => {
          console.error(err);
          toast.error('Incorrect Username or Password', {
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


    //set validations for user input values
    const validationSchema = Yup.object().shape({
      userName: Yup.string().required("Requied !"),
      password: Yup.string().required("Requied !"),
    });
    return (
      <div>
        <NavBar/>
        <body className={styles.bodyBg}>
          <Container className={styles.formWrapper}>
            <Grid container>
              <Grid item s={0} sm={1}  md={1} lg={1} xl={1}></Grid>
              <Grid item  xs={12} sm={10}  md={10} lg={10} xl={10} className={styles.formContainer}>
                <Grid container>
                  <Grid item xs={12} sm={10}  md={6} lg={5} xl={5} className={styles.inputFields}>
                    <div className={styles.titleLogin}>Welcome Back!</div>
                    <div className={styles.logindata}>
                      Log in with your data what you entered during <br></br>
                      your registration
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
                            label="Username"
                            variant="outlined"
                            placeholder="John"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            InputProps={{
                              style: {
                                height: 38,
                                width: 300,
                              },
                            }}
                            name="userName"
                            helperText={<ErrorMessage name="userName" />}
                          />
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
                          />
                          <div className={styles.ForgotPassword}>
                            Forgot the Password?
                            <Link style={{ color: "#04a5cf" }} to='/recoverPassword'> Reset</Link>
                          </div>
                          <Button
                            className={styles.LoginButton}
                            type="submit"
                            color="primary"
                            disabled={props.isSubmitting}
                          >
                            {props.isSubmitting ? "Loading" : "Log In"}
                          </Button>
                          <div className={styles.freeSpace}></div>

                          <div className={styles.DontHaveAccount}>
                            Don't have an account?{" "}
                            <Link style={{ color: "#04a5cf" }} to='/register'>Sign Up</Link>
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

export default withStyles(styles)(LoginComponent);
