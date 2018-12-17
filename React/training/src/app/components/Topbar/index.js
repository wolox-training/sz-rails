import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';
import logo from './../../../assets/react_icon.svg';
import authActions from './../../../redux/Auth/actions';
import { Link } from 'react-router-dom';

class Topbar extends Component {
  render() {
    return (
      <nav className={styles.main}>
        <Link to="//www.google.com.co" className={styles.link} target="_blank" rel='noopener noreferrer'>
          <img src={logo} alt="wolox_logo" className={styles.logo} />
        </Link>
        <Link to='/' className={styles.link}>Main</Link>
        <Link to='about' className={styles.link}>About</Link>
        <Link to='/' className={`${styles.link} ${styles.signout}`} onClick={() => this.props.userLogout()}>
          <i className="fas fa-sign-out-alt"></i>
        </Link>
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
