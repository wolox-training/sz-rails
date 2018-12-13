export function checkUser(users, user) {
  for (let i = 0; i < users.length; i++) {
    if ( (users[i].email.toLowerCase() === user.email.toLowerCase()) && (users[i].password === user.password) ) {
      return true;
    }
  }
  return false;
}
