import React, {useState, Component} from 'react';
import SignIn from '../login/SignIn';
import search from "../../img/icons/search.png"
import man from "../../img/icons/man.png"
import logo from "../../img/logo.png"
import bag from "../../img/icons/bag.png"
import delivery from "../../img/icons/delivery.png"
import voucher from "../../img/icons/voucher.png"
import sales from "../../img/icons/sales.png"
import { Link } from 'react-router-dom';
import "../../index.css"
import SignUp from '../login/SignUp';
import '../../fonts/fonts.css'
import {Navbar, Nav} from 'react-bootstrap'
import { Modal, Button } from 'antd'
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


class NavBarComp1 extends Component {
    // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    constructor(props) {
      super(props);
      this.state = {
        activeTab : window.location.hash.slice(2),
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
        modalType : '',
        location : window.location.hash.slice(1),
      }
    }
    showModal = (e) => {
      this.setState(prevState => ({
        activeTab : 'none',
      }))
      console.log(e.target.name);
      if (e.target.name === "SignIn")
      {
        this.setState({
          modalType: 'SignIn',
          visible: true,
        });
      } else {
        this.setState({
          modalType: 'SignUp',
          visible: true,
        });
      }
    };
    
    handleOk = () => {
        this.setState({
          ModalText: 'The modal will be closed after two seconds',
          confirmLoading: true,
    });
    
    setTimeout(() => {
            this.setState({
            visible: false,
            confirmLoading: false,
            });
        }, 2000);
    };
    
    handleCancel = () => {
        this.setState({
          activeTab: window.location.pathname.slice(1),
        });
        console.log('Clicked cancel button');
        this.setState({
          visible: false,

        });
        // this.setState(this.state);
      };

    activeTabChange = (event,id) => {
      console.log(id);
      switch(id) {
        case 'id1' : this.setState({ activeTab:'' }); break;
        case 'id2': this.setState({ activeTab:'men' }); break;
        case 'id3': this.setState({ activeTab:'women' }); break;
        case 'id4': this.setState({ activeTab:'about' }); break;
        case 'id5': this.setState({ activeTab:'contact' }); break;
        default: break;
      }
    }


  render() {
    // const { visible, loading } = this.state;
    // if (this.state.location === '/login' || this.state.location === '/signup' ){
    //   return null;
    // }
    const logged_out_nav = (
      <>
        <Nav.Link name="SignUp">
          <Link 
            to={{
              pathname: "/signup",
              state: 'sdf'
            }}
            className="linkTag"
          >Sign up</Link>
        </Nav.Link>

        <Nav.Link name="SignIn" >
          <Link 
            to={{
              pathname: "/login",
              state: 'sdf'
            }}
            className="linkTag"
          >Log in</Link>
        </Nav.Link>  
      </>
    );

    const logged_in_nav = (
      <>
        <Nav.Link ><Link to='/cart' className="linkTag">{`Cart(${this.props.cart})`}</Link></Nav.Link>
        <Nav.Link ><Link to='/account' className="linkTag">My account</Link></Nav.Link>
        <Nav.Link onClick={this.props.handle_logout}>Logout</Nav.Link>
      </>
    );
        
    return (
      <div>
          
        <Modal
          title=""
          // style={{ top: '0' }}
          maskStyle={{backgroundColor:'white'}}
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" loading={this.state.confirmLoading} onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
        >
          <p>{this.state.modalType === "SignIn" ? <SignIn /> : <SignUp /> }</p>
        </Modal>

        <Navbar className="fixedMenu" collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark" style={{}}>
            <Navbar.Brand ><Link to='/' className="linkTag">All About Feet</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
            activeKey= {`/${this.state.activeTab}`}
            // activeKey = '/men'
            className="mr-auto"
            >
                <Nav.Link href='/'><Link to='/' className="linkTag"><span onClick={(e) => this.activeTabChange(e,'id1')}>Home</span></Link></Nav.Link>
                <Nav.Link href='/men'><Link to='/men' className="linkTag"><span onClick={(e) => this.activeTabChange(e,'id2')}>Men</span></Link></Nav.Link>
                <Nav.Link href='/women'><Link to='/women' className="linkTag"><span onClick={(e) => this.activeTabChange(e,'id3')}>Women</span></Link></Nav.Link>
                <Nav.Link href='/about'><Link to='/about' className="linkTag"><span onClick={(e) => this.activeTabChange(e,'id4')} >About</span></Link></Nav.Link>
                <Nav.Link href='/contact'><Link to='/contact' className="linkTag"><span onClick={(e) => this.activeTabChange(e,'id5')}>Contact</span></Link></Nav.Link>
            </Nav>
            
            <Nav inline style={{marginRight:'0px'}} defaultActiveKey=''>
                {this.props.logged_in ? logged_in_nav : logged_out_nav}
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div className="divSeparator"></div>
    </div>
    
  );
    }
}

export default withRouter(NavBarComp1);


NavBarComp1.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  handle_logout: PropTypes.func.isRequired
};