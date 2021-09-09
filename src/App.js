// CONFIG IMPORTS
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { loginUserWithCookie } from 'services/apiManager';
import Cookies from 'js-cookie';

// PAGES IMPORTS
import Home from  'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import AdProfile from 'pages/Apartment/Apartment';
import UserProfile from 'pages/UserProfile/UserProfile';
import CreateProperty from 'pages/CreateProperty/CreateProperty';
import Conditions from 'pages/Conditions/conditions';
import Apartment from 'pages/Apartment/Apartment';

// COMPONENTS IMPORTS
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/footer';
import Loading from 'components/Loading/Loading';


function App() {

  const currentUser = useSelector((state) => state.users);
  const login = useSelector((state) => state.users.login);
  const [isAuthTrue, setIsAuthTrue] = useState();
  // the loading will be used for private routes such as profile
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkAuth().then(res => {
      setIsAuthTrue(res);
      setLoading(true);
    })
  });


  const checkAuth = async() => {
    return await (loginUserWithCookie());
  }

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <>
      { loading ? ( 
        < Route {...rest} render={ props => ( isAuthTrue ? ( <Component {...props} />) : (  <Redirect to={{ pathname: '/login' }} /> ) )} />)
        : (
          <Loading type='spin' color='#454545' />
        )
      }
    </>
);

const isAuth = () => {
  return (
    login === '' &&
    Cookies.get('cookie_token') === undefined ? false : true)
};

  // <Route path="/profile" component={UserProfile} />

  return (
      <>
        <BrowserRouter>
          <Navbar auth={ isAuthTrue }/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login">
              { isAuth() ? <Redirect to="/" /> : <Login /> }
            </Route>
            <Route path="/register">
              { isAuth() ? <Redirect to="/" /> : <Register /> }
            </Route>
            <Route path="/listing/:slug" exact component={Apartment}/>
            <Route path="/ApartmentsProfile" component={AdProfile} />
            <PrivateRoute path="/profile" exact component={UserProfile} />
            <Route path="/create-property" component={CreateProperty}/>
            <Route path="/conditions" component={Conditions}/>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </>
  );
}

export default App;
