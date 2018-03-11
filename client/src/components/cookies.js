export function set (name, value, exdays = 365, exhours = 0) {
  const date = new Date()
  date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000) + (exhours * 60 * 60 * 1000))
  const expires = 'expires=' + date.toUTCString()
  document.cookie = `${name}=${value};${expires};path=/`
}

export function get (name) {
  const nameKey = name + '='
  const cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i]
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1)
    }
    if (cookie.indexOf(nameKey) === 0) {
      return cookie.substring(nameKey.length, cookie.length)
    }
  }
  return null
}
