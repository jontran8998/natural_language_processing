function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let url = document.getElementById('name').value
    // console.log(typeOf formText);
    if (url == '' || Client.checkUrl(url) ) {
        return alert('Please enter a valid url')
    } 

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/meaningCloud', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({url: url})
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res
    })
}

export { handleSubmit }
