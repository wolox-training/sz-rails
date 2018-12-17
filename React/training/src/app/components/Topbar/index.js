import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';
import logo from './../../../assets/react_icon.svg';
import authActions from './../../../redux/Auth/actions';

class Topbar extends Component {
  render() {
    return (
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
