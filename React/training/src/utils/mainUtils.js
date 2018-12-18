export function getToken(tokenSelected) {
  const token = localStorage.getItem(tokenSelected);
  return token;
}

export function userSignedIn(propToken, authToken) {
  return (
    (propToken || getToken(authToken)) ? true : false
  );
}
