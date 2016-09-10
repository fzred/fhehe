export default class Url {
  constructor(url, options) {
    if (!url.match(/^(https?:)\//)) {
      url = options.root + '/' + url
    }
    const el = document.createElement('a')
    el.href = url
    this.uri = el
  }

  addParams(params) {
    const uri = this.uri
    let paramsUrl
    if (typeof params === 'object') {
      paramsUrl = Object.keys(params).map(key => {
        return key + '=' + encodeURIComponent(params[key])
      }).join('&')
    }
    if (uri.search.length > 0) {
      uri.search += '&' + paramsUrl
    } else {
      uri.search = paramsUrl
    }
    return this
  }

  getUrl() {
    return this.uri.href
  }
}
