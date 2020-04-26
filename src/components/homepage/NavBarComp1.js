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


class NavBarComp1 extends Component {
    // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    constructor(props) {
      super(props);
      this.state = {
        activeTab : window.location.pathname.slice(1),
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
        modalType : '',
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
        case 'id1' : this.setState({ activeTab:'home' }); break;
        case 'id2': this.setState({ menActive:'men' }); break;
        case 'id3': this.setState({ womenActive:'women' }); break;
        case 'id4': this.setState({ aboutActive:'about' }); break;
        case 'id5': this.setState({ contactActive:'contact' }); break;
        default: break;
      }
    }


  render() {
    // const { visible, loading } = this.state;
    const collapse = true;
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

        <Navbar className="fixedMenu" collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark" style={{overflowY:'visible'}}>
            <Navbar.Brand ><Link to='/' className="linkTag">CHAPLI SANTE</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
            activeKey= {`/${this.state.activeTab}`}
            className="mr-auto"
            >
                <Nav.Link href='/' onClick={(e) => this.activeTabChange(e,'id1')} >Home</Nav.Link>
                <Nav.Link href='/men' onClick={(e) => this.activeTabChange(e,'id2')} >Men</Nav.Link>
                <Nav.Link href='/women' onClick={(e) => this.activeTabChange(e,'id3')} >Women</Nav.Link>
                <Nav.Link href='/about' onClick={(e) => this.activeTabChange(e,'id4')} >About</Nav.Link>
                <Nav.Link href='/contact' onClick={(e) => this.activeTabChange(e,'id5')} >Contact</Nav.Link>
            </Nav>
            
            <Nav inline style={{marginRight:'0px'}} defaultActiveKey=''>
                <Nav.Link name="SignUp" onClick={(e) => this.showModal(e)}>Sign up</Nav.Link>
                <Nav.Link name="SignIn" onClick={(e) => this.showModal(e)}>Log in</Nav.Link>  
                <Nav.Link ><Link to='/account' className="linkTag">My account</Link></Nav.Link>
                <Nav.Link ><Link to='/cart' className="linkTag">Cart</Link></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div className="divSeparator"></div>
    </div>
    
  );
    }
}

export default NavBarComp1;
