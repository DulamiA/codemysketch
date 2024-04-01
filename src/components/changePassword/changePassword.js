import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
// import NavComponent from "../navigation/navigation";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styles from "./changePassword.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import FooterComponent from "../footer/footer";
import NavBar from '../NavBar/NavIndex';
import Footer from '../Footer copy/FooterIndex';

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { changePassword } from "../../services/auth.service"

class changePasswordComponent extends Component {
  state = {};
  render() {

    //initiate empty values
    const initialValues = {
      oldPassword: "",
      newPassword: "",
    };
    const onSubmit = (values, props) => {
      console.log(values);
      console.log(JSON.stringify(values,null,2));

      // set input values & call change password api
      changePassword({
        oldPassword: values.oldPassword,
        newPassword: values.newPassword
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err)
        });

      setTimeout(() => {
        props.resetForm();
        props.setSubmitting(false);
      }, 2000);

      console.log(props);
    };

    //set validations for user input values
    const validationSchema = Yup.object().shape({
      oldPassword :Yup.string().required("Requied !"),
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
                      Change <br></br> Password
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
                            label="Old Password"
                            type="password"
                            margin="normal"
                            variant="outlined"
                            placeholder="**************"
                            name="oldPassword"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            InputProps={{
                              style: {
                                height: 38,
                                width: 370,
                              },
                            }}
                            helperText={<ErrorMessage name="oldPassword" />}
                          />
                          <br></br>
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
                            Change Password
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

export default withStyles(styles)(changePasswordComponent);
