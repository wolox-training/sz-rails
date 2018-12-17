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
        <NavLink to='/about' className={styles.link} activeClassName={styles.active} isActive={this.isActiveFunc}>
          About
        </NavLink>
        <NavLink to='/' className={`${styles.link} ${styles.signout}`} onClick={() => this.props.userLogout()}>
          <i className="fas fa-sign-out-alt"></i>
        </NavLink>
      </nav>
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
