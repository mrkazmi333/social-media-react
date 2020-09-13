export function getFormBody(params) {
  let formBody = [];
  for (let property in params) {
    let encodedKey = encodeURIComponent(property); //'user name'  ===> 'user%20name'
    let encodedValue = encodeURIComponent(params[property]); // 'mrk 123' ==> 'mrk%20123'

    formBody.push(encodedKey + '=' + encodedValue);
  }
  return formBody.join('&'); //username=motasim&password=1223
}

export function getAuthTokenFromLocalStorage() {
  return localStorage.getItem('token');
}
