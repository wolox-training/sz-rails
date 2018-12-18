import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';
import logo from './../../../assets/react_icon.svg';
import authActions from './../../../redux/Auth/actions';
import { Link } from 'react-router-dom';
import { userSignedIn } from './../../../utils/mainUtils';
import { CONSTANTS } from './../../../config/constants';

class Topbar extends Component {
  logout () {
    this.props.userLogout();
    this.forceUpdate();
  }

  render() {
    return (
      ( userSignedIn(this.props.token, 'token') ) && (
        <nav className={styles.main}>
          <Link to={CONSTANTS.REACT_URL} className={styles.link} target="_blank" rel='noopener noreferrer'>
            <img src={logo} alt="react_logo" className={styles.logo} />
          </Link>
          <Link to='/' className={styles.link}>Main</Link>
          <Link to='about' className={styles.link}>About</Link>
          <Link to='/' className={`${styles.link} ${styles.signout}`} onClick={() => this.logout()}>
            <i className="fas fa-sign-out-alt"></i>
          </Link>
        </nav>
      )
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
