const generateCookie = (username, password) => {
  document.cookie = 'username=' + username + '&password=' + password
}

const validateUser = () => {
  cookieArray = document.cookie.match('username=')
  if (cookieArray != null && cookieArray.length > 0) {
    cookieValue = cookieArray.input
    username = cookieValue.substring(
      cookieValue.indexOf('username=') + 9,
      cookieValue.indexOf('&password=')
    )
    password = cookieValue.substring(
      cookieValue.indexOf('&password=') + 10,
      cookieValue.length
    )
    return (data[username] = password)
  }
  return false
}
