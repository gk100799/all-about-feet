import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
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
import { BackTop, message, Result, Button } from 'antd';
import SignIn from './components/login/SignIn';
import SignUp from './components/login/SignUp';
import ScrollToTop from './components/homepage/ScrollToTop'
import NotFoundPage from './components/homepage/NotFoundPage'
import {axiosInstance, request} from './helpers'



class App extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      location : this.props.location === '/login' ? false : this.props.location === '/signup' ? false : true,
      logged_in: localStorage.getItem('token') ? true : false,
      username: '',
      cart: 0,
    }
    this.setstate = this.setstate.bind(this);
    this.handleCartInc = this.handleCartInc.bind(this);
    this.handleCartDec = this.handleCartDec.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
  }

  componentDidMount() {
    if (this.state.logged_in) {
      axiosInstance.get('/login/current_user/')
        .then(res => res.data)
        .then(json => {
          this.setState({ username: json.username, cart:json.cart });
        })
        .catch(err => console.log('hello'));
    }
  }

  setstate = (boolean, username) => {
    this.setState({
      logged_in: boolean,
      username: username
    });
  }

  handle_logout = () => {
    message.config({
      top: 80,
    })
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
    message.success("Logout Successful!")
  };

  handleCartInc = () => {
    this.setState({
      cart : this.state.cart + 1,
    })
  }

  handleCartDec = () => {
    this.setState({
      cart : this.state.cart - 1,
    })
  }

  handleOrder = () => {
    this.setState({
      cart : 0,
    })
  }


  render() {
    return (
      <Router basename={process.env.PUBLIC_URL} >
      {/* { this.state.location && <NavBarComp1 /> } */}
      {/* <NavBarComp1 /> */}
        {/* <Switch> */} 
          <ScrollToTop />
          <Route 
            path={['/','/men','/women','/about','/contact','/cart','/product/:pid','/login','/signup','/account']} 
            exact 
            render={(props) => <NavBarComp1 logged_in={this.state.logged_in} handle_logout={this.handle_logout} cart={this.state.cart}/>}
          />
          <Route path="/" exact component={Homepage} />
          <Route path="/men" exact component={Men} />
          <Route path='/women' exact component={Women} />
          <Route path="/about" exact component={NotFoundPage} />
          <Route path="/contact" exact component={NotFoundPage} />
          <Route path="/cart" exact render={(props) => <Cart handleCartDec={this.handleCartDec} handleOrder={this.handleOrder} />} />
          <Route path="/product/:pid" exact render={(props) => <ProductPage logged_in={this.state.logged_in} handleCartInc={this.handleCartInc} />} />
          <Route path='/login' exact render={(props) => <SignIn setstate={this.setstate} />} /> 
          <Route path='/signup' exact render={(props) => <SignUp setstate={this.setstate} />} /> 
          <Route path="/account" exact component={NotFoundPage} />
        {/* </Switch> */}
        <div className="partnerfooter">
        <Route path={['/','/men','/women','/about','/contact','/cart','/product/:pid','/account']} exact component={Partners} />
          <Route path={['/','/men','/women','/about','/contact','/cart','/product/:pid','/account']} exact component={Footer} />
        </div>
        
        {/* <Route path={['/','/men','/women','/about','/contact','/cart','/product/:pid']} exact component={BackToTopComp1} /> */}
        {/* <Route path="/404" exact component={NotFoundPage} />
        <Redirect to="/404" /> */}
        <BackTop style={{right:'35px'}} />
      </Router>
    )
  }
}

export default App;