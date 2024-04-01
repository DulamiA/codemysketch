import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Logo from "../../logo.svg";
import Grid from "@material-ui/core/Grid";
import styles from "./navigation.module.css";
import { Link } from "react-router-dom";
import UserContext from "../../context/userContext";

// const styles = {
//   root: {
//     flexGrow: 1,
//   },

// };

class NavComponent extends Component {
  static contextType = UserContext

  state = {};
  render() {
    const { user, setUser } = this.context

    return (
      <div>
        <AppBar className={styles.navbg} position="static">
          <Toolbar>
            <Grid container>
              <Grid item xs={1}></Grid>
              <Grid item xs={8} className={styles.menuListLeft}>
                <Link to="/" >
                <img src={Logo} alt="CODEMYSKETCH Logo" ></img>{" "}
                </Link>
                <ul>
                  <Link to="/howToUse" className={styles.listItem} >
                  <li className={styles.listItem}>Let's Code</li>
                  </Link>
                  <Link to="/myAccount" className={styles.listItem}>
                  <li className={styles.listItem}>My Account </li>
                  </Link>
                  <Link to="/aboutUs" className={styles.listItem}>
                  <li className={styles.listItem}>About Us</li>
                  </Link>
                </ul>
              </Grid>
              <Grid item xs={2.5} className={styles.menuListRight}>
                <ul>
                  { user.name ?
                    (
                        <Link to="/login" className={styles.menuLink} onClick={() => {
                          // call logout
                          const newUser = { name: null, loggedIn: false }
                          localStorage.removeItem('accessToken')
                          localStorage.removeItem("userData");
                          setUser(newUser);
                        }}>
                          <li className={styles.listItem}>Logout</li>{" "}
                        </Link>
                    ):
                      (<Link to="/login" className={styles.menuLink}>
                        <li className={styles.listItem}>Login</li>{" "}
                      </Link>)
                  }
                  {
                    user.name ?
                        (
                          <li className={styles.listItem}>{`Hi, ${user.name} `}&#129312;</li>):
                        (
                            <Link to="/register" className={styles.menuLink}>
                              {" "}
                              <li className={styles.listItem}>
                                <Button className={styles.SignUpBtn}>Sign Up</Button>
                              </li>
                            </Link>
                        )
                  }


                </ul>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavComponent);
