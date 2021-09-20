function getMockApi(event) {
  event.preventDefault()

  fetch(`http://.../test`, {
        method: 'GET',
        credentials: 'same-origin',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({url: url})
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('irony').innerHTML = res.message
    }).catch(e => {
        console.log('Error of fetching data', e);
    })
}

export {getMockApi}