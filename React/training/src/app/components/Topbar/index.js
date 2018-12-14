import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.scss';
//import styles from './styles.module.scss';
import logo from './../../../assets/react_icon.svg';

class Topbar extends Component {
  render() {
    return (
      <nav className={'main'}>
        <a href="https://reactjs.org/" target="_blank" className='link'>
          <img src={logo} alt="wolox_logo" className="logo" />
        </a>
        <a href="http://localhost:3000/" className='link text'>
          <span>Page</span>
        </a>
        <a href="http://localhost:3000/" className='link sign-out'>
          <i className="fas fa-sign-out-alt"></i>
        </a>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token
});

export default connect(mapStateToProps)(Topbar);
