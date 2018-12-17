import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';
import logo from './../../../assets/react_icon.svg';
import authActions from './../../../redux/Auth/actions';
import { NavLink } from "react-router-dom";

class Topbar extends Component {

  isActiveFunc (match, location) {
    return match;
  }

  render() {
    return (
      <nav className={styles.main}>
        <a target="_blank" href="https://reactjs.org/" className={styles.link} rel='noopener noreferrer'>
          <img src={logo} alt="wolox_logo" className={styles.logo} />
        </a>
        <NavLink exact to='/' className={`${styles.link}`} activeClassName={styles.active} isActive={this.isActiveFunc}>
          Main
        </NavLink>
        <NavLink to='/bla' className={styles.link} activeClassName={styles.active} isActive={this.isActiveFunc}>
          Bla
        </NavLink>
        <NavLink to='/' className={`${styles.link} ${styles.signout}`} onClick={() => this.props.userLogout()}>
          <i className="fas fa-sign-out-alt"></i>
        </NavLink>
      </nav>
/*
      <nav className={styles.main}>
        <a href="https://reactjs.org/" target="_blank" className={styles.link}>
          <img src={logo} alt="wolox_logo" className={styles.logo} />
        </a>
        <a href="http://localhost:3000/" className={`${styles.link} ${styles.text}`}>
          <span>Page</span>
        </a>
        <a href={null} className={`${styles.link} ${styles.signout}`} onClick={() => this.props.userLogout()}>
          <i className="fas fa-sign-out-alt"></i>
        </a>
      </nav>
*/
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
  userLogout: () => dispatch(authActions.userLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
