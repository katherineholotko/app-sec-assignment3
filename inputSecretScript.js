if (!validateUser()) {
  location.assign(
    window.location.pathname.replace('secret.html', '') + 'index.html'
  )
}

const secretArray = new Array()

document.querySelector('#submit-secret').addEventListener('click', e => {
  const secretText = replaceHTMLCharacters(
    document.querySelector('#input').value
  )
  if (secretText.length > 0) {
    secretArray.push(secretText)
    renderSecretArray()
    document.querySelector('#input').value = ''
  }
})

const renderSecretArray = () => {
  document.querySelector('#secrets').innerHTML = ''
  secretArray.forEach((secret, index) => {
    const secretDiv = document.createElement('div')
    const secretText = 'User ' + (index + 1) + ' said: ' + secret
    secretDiv.appendChild(document.createTextNode(secretText))
    document.querySelector('#secrets').appendChild(secretDiv)
  })
}
