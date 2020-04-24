import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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

class App extends PureComponent { 
  constructor(props) {
    super(props)
    this.state = {
    loggedIn : false,
  }
  }
  
  render() {
    return (
      <div>
      
      <Router basename='/chapli-sante/'>
      <NavBarComp1 />
        {/* <Switch> */}
          <Route path="/" exact component={Homepage} />
          <Route path='/men' exact component={Men} />
          <Route path='/women' exact component={Women} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/product/:pid" exact component={ProductPage} />
        {/* </Switch> */}
        <div className="partnerfooter">
          <Partners />
          <Footer />
          <BackTop />
        </div>
      </Router>
      </div>
    )
  }
}

export default App;