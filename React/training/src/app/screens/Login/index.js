import React, { Component, Fragment } from 'react';
import Form from './components/Form';

class Login extends Component {
  submit = values => {
    //window.alert(JSON.stringify(values, null, 4));

    const location = 'http://localhost:4000/users';
    const settings = {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
    };

    fetch(location, settings)
      .then(response => response.json())
        .then(json => {
          console.log(json);
          console.log(values);

          if (this.checkUser(json, values)) {
            console.log('Logged.');
          } else {
            alert('Verify your email and password.');
          }

        })
        .catch(e => {
            console.log(e);
        });
/*
    const data = async () => {
      try {
        //const bla = JSON.parse(await fetch(location, settings))
        const bla = await fetch(location, settings);
        console.log(bla);
      } catch (err) {
        console.log(err);
      }
    }
*/
  };

  checkUser (users, user) {
    for (let i = 0; i < users.length; i++) {
      if ( (users[i].email.toLowerCase() === user.email.toLowerCase()) && (users[i].password === user.password) ) {
        return true;
      }
    }
    return false;
  }

  render() {
    return (
      <Fragment>
        <Form onSubmit={this.submit} />
      </Fragment>
    );
  }
}

export default Login;
