import Url from './url'

export const options = {
  root: '/api',
  method: 'GET',
  headers: {},
}

export default function http(url, data, opts) {
  opts = Object.assign({}, options, opts)

  const uri = new Url(url, options)
  if (opts.method === 'GET') {
    if (data) uri.addParams(data)
  }
  return fetch(uri.getUrl(), opts).then(res => res.json())
}

export function get(url, data, options) {
  return http(url, data, Object.assign({ method: 'GET' }, options))
}

export function post(url, data, options) {
  return http(url, {}, Object.assign({
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }, options))
}

http.get = get
http.post = post
