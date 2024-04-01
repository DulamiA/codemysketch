import React, { useContext, useEffect } from 'react'
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import HomeComponent from "./components/home/home.js";
import Home from "./components/homeNew/Home.js";
import RegisterComponent from "./components/register/register.js";
import LoginComponent from "./components/login/login.js";
import changePasswordComponent from "./components/changePassword/changePassword.js";
import recoverPasswordComponent from "./components/recoverPassword/recoverPassword.js";
import emailVerificationComponent from "./components/emailVerification/emailVerification.js";
import registerSuccessComponent from "./components/registerSuccess/registerSuccess.js";
import recoverPasswordSuccessComponent from "./components/recoverPasswordSuccess/recoverPasswordSuccess.js";
import HowToUseComponent from "./components/howToUse/howToUse.js";
import uploadSketchComponent from "./components/uploadSketch/uploadSketch.js";
import uploadSketchSuccessComponent from "./components/uploadSketchSuccess/uploadSketchSuccess.js";
import codeGenerateSuccessComponent from "./components/codeGenerateSuccess/codeGenerateSuccess.js";
import myAccountComponent from "./components/myAccount/myAccount.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutUsComponent from "./components/aboutUs/aboutUs.js";
import {UserProvider} from "./context/userContext";
import resetPasswordComponent from "./components/resetPassword/resetPassword"

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TensorflowTest from "./components/tensorflow-test/tensorflow-test";
import UserContext from './context/userContext';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#065367',
    },
  },
});

export const authentication = {
  getLoginInStatus() {
    var isLoggedIn = localStorage.getItem("accessToken");
    return !!isLoggedIn;
  },
};

function SecuredRoute(props) {
  return (
    <Route
      path={props.path}
      render={(data) =>
        authentication.getLoginInStatus() ? (
          <props.component {...data}></props.component>
        ) : (
          <Redirect to={{ pathname: "/login" }}></Redirect>
        )
      }
    ></Route>
  );
  
}

function App() {

  const {user, setUser} = useContext(UserContext);

  return (
    <div>
      <ThemeProvider theme={theme}>
      
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/howToUse" component={HowToUseComponent} />
          <Route path="/register" component={RegisterComponent} />
          <Route path="/login" component={LoginComponent} />
          <SecuredRoute
            path="/changePassword"
            component={changePasswordComponent}
          />
          <Route path="/recoverPassword" component={recoverPasswordComponent} />
          <Route
            path="/emailVerification"
            component={emailVerificationComponent}
          />
          <Route path="/registerSuccess" component={registerSuccessComponent} />
          <Route
            path="/recoverPasswordSuccess"
            component={recoverPasswordSuccessComponent}
          />
          <SecuredRoute path="/uploadSketch" component={uploadSketchComponent} />
          <SecuredRoute
            path="/uploadSketchSuccess"
            component={uploadSketchSuccessComponent}
          />
          <Route
            path="/codeGenerateSuccess"
            component={codeGenerateSuccessComponent}
          />
          <SecuredRoute path="/myAccount" component={myAccountComponent} />
          <Route path="/howToUse" component={HowToUseComponent} />
          <Route path="/aboutUs" component={AboutUsComponent} />
          <Route path="/resetPassword/:guid" component={resetPasswordComponent} />
          <Route path="/tensorflow-test" component={TensorflowTest} />
        </Switch>
      </Router>
      
      </ThemeProvider>

      <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
    </div>
  );
}

export default App;
