class HttpError extends Error {
  constructor (status, message = 'HTTP Error') {
    super(message)
    this.status = status
  }
}

async function request (url, path, query = {}, options = {}) {
  let queryString = ''
  if (Object.keys(query).length > 0) {
    queryString = '?' + Object.keys(query).map(param => `${param}=${query[param]}`).join('&')
  }
  const response = await fetch(url + '/' + path + queryString, options)
  if (response.status >= 400) {
    throw new HttpError(response.status)
  }
  return response.json()
}

class Resource {
  constructor (url, name) {
    this.url = url
    this.name = name
  }

  find (query = {}, options = {}) {
    return request(this.url, this.name, query, Object.assign({ method: 'get' }, options))
  }

  get (id, query = {}, options = {}) {
    return request(this.url, this.name + '/' + id, query, Object.assign({ method: 'get' }, options))
  }

  create (data = {}, options = {}) {
    const defaultOptions = { method: 'post', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }
    return request(this.url, this.name, {}, Object.assign(defaultOptions, options))
  }

  update (id, data = {}, options = {}) {
    const defaultOptions = { method: 'put', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }
    return request(this.url, this.name + '/' + id, {}, Object.assign(defaultOptions, options))
  }

  remove (id, options = {}) {
    return request(this.url, this.name + '/' + id, {}, Object.assign({ method: 'delete' }, options))
  }
}

class ApiClient {
  constructor (url) {
    this.url = url
  }

  resource (name) {
    return new Resource(this.url, name)
  }
}

export { ApiClient }
export default new ApiClient(process.env.API_URL)
