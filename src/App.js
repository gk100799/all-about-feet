import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Men from './components/homepage/Men'
import Women from './components/homepage/Women'
import About from './components/homepage/About'
import Contact from './components/homepage/Contact'
import Homepage from './components/homepage/Homepage'
import NavBarComp1 from './components/homepage/NavBarComp1'
import Partners from './components/homepage/Partners'
import Footer from './components/homepage/Footer'
import ProductPage from './components/homepage/ProductPage'
import Cart from './components/homepage/Cart'
import './fonts/fonts.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/homepage/Footer.css'
import 'antd/dist/antd.css';
import { BackTop } from 'antd';
import SignIn from './components/login/SignIn';
import SignUp from './components/login/SignUp';
import ScrollToTop from './components/homepage/ScrollToTop'
import axios from 'axios'
import { useHistory } from 'react-router-dom';


class App extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      location : this.props.location === '/login' ? false : this.props.location === '/signup' ? false : true,
      logged_in: localStorage.getItem('token') ? true : false,
      username: '',
    }
    this.handle_login = this.handle_login.bind(this);
    this.handle_signup = this.handle_signup.bind(this);
  }
  
  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://localhost:8000/login/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        })
        .catch(err => console.log('hello'));
    }
  }

  handle_login = (e, username, password) => {
    e.preventDefault();
    let data = {
      "username" : username,
      "password" : password,
    }
    axios.post('http://localhost:8000/token-auth/', data)
      // .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.data.token);
        this.setState({
          logged_in: true,
          username: json.data.user.username
        });
        window.location.href='/'
      })
      // .then(window.location.href='/')
      .catch(err => console.log(err));
  };


  handle_signup = (e, firstName, lastName, email, username, password) => {
    e.preventDefault();
    let data = {
      "first_name" : firstName,
      "last_name" : lastName,
      "username" : email,
      "password" : password,
    }
    axios.post('http://localhost:8000/login/users/', data)
      // .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          username: json.username
        });
        window.location.href='/'
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };



  render() {
    return (
      <div>
      <Router basename='/' >
      {/* { this.state.location && <NavBarComp1 /> } */}
      {/* <NavBarComp1 /> */}
        {/* <Switch> */} 
          <ScrollToTop />
          <Route 
            path={['/','/men','/women','/about','/contact','/cart','/product/:pid']} 
            exact 
            render={(props) => <NavBarComp1 logged_in={this.state.logged_in} handle_logout={this.handle_logout}/>}
          />
          <Route path="/" exact component={Homepage} />
          <Route path="/men" exact component={Men} />
          <Route path='/women' exact component={Women} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/product/:pid" exact component={ProductPage} />
          {/* <Route path='/login' exact component={SignIn} handle_login={this.handle_login} /> 
          <Route path='/signup' exact component={SignUp} handle_signup={this.handle_signup} />  */}
          <Route path='/login' exact render={(props) => <SignIn handle_login={this.handle_login} />} /> 
          <Route path='/signup' exact render={(props) => <SignUp handle_signup={this.handle_signup} />} /> 
        {/* </Switch> */}
        <div className="partnerfooter">
        <Route path={['/','/men','/women','/about','/contact','/cart','/product/:pid']} exact component={Partners} />
          <Route path={['/','/men','/women','/about','/contact','/cart','/product/:pid']} exact component={Footer} />
        </div>
        {/* <Route path={['/','/men','/women','/about','/contact','/cart','/product/:pid']} exact component={BackToTopComp1} /> */}
      </Router>
      <BackTop style={{right:'35px'}} />
      </div>
    )
  }
}

export default App;