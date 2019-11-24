const HTMLCharacterMap = {
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#039;',
  '&': '&amp;'
}

const replaceHTMLCharacters = input =>
  input.replace(/[<>"'&]/g, t => HTMLCharacterMap[t])
