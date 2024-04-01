import React, {  Component} from "react";
import { withStyles } from "@material-ui/styles";
// import NavComponent from "../navigation/navigation";
import styles from "./myAccount.module.css";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ButtonBase from "@material-ui/core/ButtonBase";
import Popup from './Popup';
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { getUserDetails , getUploadedImages, getImageData, getZipURL } from "../../services/auth.service"
import { GridList, GridListTile } from "@material-ui/core";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import coldark from 'react-syntax-highlighter/dist/esm/styles/prism/coldark-dark';
import { toast } from "react-toastify";
import GetAppIcon from "@material-ui/icons/GetApp";
import NavBar from '../NavBar/NavIndex';
// import Footer from '../Footer copy/FooterIndex';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 300,
    padding: 5
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function GridItem({item, index, onSelectImage}) {
  const classes = useStyles();
  return (
    <>
    <GridListTile>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Image {index + 1}
                    </Typography>
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt="complex" src={item.imageUrl} />
                    </ButtonBase> 
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: 'pointer' }} onClick={()=>{onSelectImage(item)}}>
                      Show Code
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </GridListTile>
      <br/>
    </>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

class myAccountComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      selectedItem: null,
      value: 0
    };
  }

  componentDidMount() {
    getUserDetails({})
      .then((res) => {
        console.log(res.data);
        const { data } = res.data;
        sessionStorage.setItem("firstname", data.firstname);
        sessionStorage.setItem("lastname", data.lastname);
        sessionStorage.setItem("username", data.username);
        sessionStorage.setItem("email", data.email);
      })
      .catch((err) => {
        console.error(err);
      });

    getUploadedImages()
      .then((res) => {
        console.log(res.data);
        const { data } = res.data;
        this.setState({items: data})
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { value, items, selectedItem } = this.state;
    return (
      <div>
        <NavBar/>
        <AppBar position="static">
          <Tabs
            className={styles.tabsPanelContainer}
            value={value}
            onChange={(event, newValue) => {
              this.setState({ value: newValue });
            }}
            aria-label="simple tabs example"
          >
            <Tab label="Projects" {...a11yProps(0)} />
            <Tab label="Account" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        {!!selectedItem && (
          <Popup
            content={
              <>
                <div className={styles.popupHeader}>
                  <b>Code for image {selectedItem.index + 1}</b>
                  <Button
                    className={styles.uploadsketchbutton}
                    variant="contained"
                    color="primary"
                    component="span"
                    endIcon={<GetAppIcon />}
                    onClick={() => {
                      getZipURL(selectedItem.item.id)
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
                </div>
                <SyntaxHighlighter language="javascript" style={coldark}>
                  {selectedItem.item.code}
                </SyntaxHighlighter>
              </>
            }
            handleClose={() => {
              this.setState({ selectedItem: null });
            }}
          />
        )}
        <TabPanel value={value} index={0}>
          <GridList cellHeight={180} container>
            {items.map((item, index) => (
              <GridItem
                item={item}
                index={index}
                onSelectImage={() => {
                  getImageData(item.id)
                    .then((res) => {
                      const { data: imageData } = res.data;
                      this.setState({
                        selectedItem: { index, item: imageData },
                      });
                    })
                    .catch((err) => {
                      console.error(err);
                    });
                }}
              />
            ))}
          </GridList>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <body className={styles.bodyBg}>
            <Container className={styles.formWrapper}>
              <Grid container>
                <Grid className={styles.formContainer}>
                  <Grid container>
                    <Grid className={styles.inputFields}>
                      <h1 className={styles.titleHeader}>Account Details</h1>
                      <br />
                      <br />
                      <TextField
                        as={TextField}
                        className={styles.input}
                        id="filled-required"
                        label="First Name"
                        variant="outlined"
                        value={sessionStorage.getItem("firstname")}
                        onChange="false"
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
                      />
                      <TextField
                        as={TextField}
                        className={styles.input}
                        id="filled-required"
                        name="lastName"
                        label="Last Name"
                        margin="normal"
                        variant="outlined"
                        value={sessionStorage.getItem("lastname")}
                        onChange="false"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        InputProps={{
                          style: {
                            height: 38,
                            width: 180,
                          },
                        }}
                      />
                      <br></br>
                      <br />
                      <TextField
                        as={TextField}
                        className={styles.input}
                        id="filled-required"
                        name="userName"
                        label="UserName"
                        margin="normal"
                        variant="outlined"
                        value={sessionStorage.getItem("username")}
                        onChange="false"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        InputProps={{
                          style: {
                            height: 38,
                            width: 300,
                          },
                        }}
                        style={{ width: 350 }}
                      />{" "}
                      <br></br>
                      <br />
                      <TextField
                        as={TextField}
                        className={styles.input}
                        id="filled-required"
                        name="email"
                        label="Email"
                        margin="normal"
                        variant="outlined"
                        value={sessionStorage.getItem("email")}
                        onChange="false"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        InputProps={{
                          style: {
                            height: 38,
                            width: 300,
                          },
                        }}
                      />
                      <br></br>
                      <br />
                      <Link to={"/changePassword"} className={styles.menuLink}>
                        <Button
                          className={styles.SignUpButton}
                          type="submit"
                          color="primary"
                        >
                          Change Password
                        </Button>
                      </Link>
                      <br></br>
                      <br />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </body>
        </TabPanel>
      </div>
    );
  }
}

export default withStyles(styles)(myAccountComponent);
