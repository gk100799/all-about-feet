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

class App extends Component { 
  constructor(props) {
    super(props)
    this.state = {
    loggedIn : false,
    location : this.props.location === '/login' ? false : this.props.location === '/signup' ? false : true
  }
  }
  
  render() {
    return (
      <div>
      
      <Router basename='/'>
      {/* { this.state.location && <NavBarComp1 /> } */}
      {/* <NavBarComp1 /> */}
        {/* <Switch> */} 
          <Route path={['/','/men','/women','/about','/contact','/cart','/product/:pid']} exact component={NavBarComp1} />
          <Route path="/" exact component={Homepage} />
          <Route path="/men" exact component={Men} />
          <Route path='/women' exact component={Women} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/product/:pid" exact component={ProductPage} />
          <Route path='/login' exact component={SignIn} /> 
          <Route path='/signup' exact component={SignUp} /> 
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