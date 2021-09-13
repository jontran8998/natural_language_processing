var validUrl = require('valid-url');
  
const checkUrl = (url) => {
  if (!validUrl.isUri(url)) {
    return true
  }
}

export {checkUrl}