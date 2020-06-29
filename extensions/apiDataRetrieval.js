import fetch from 'node-fetch'

export function retrieveAll () {
  return browser.call(async () => {
    return await fetch(`${browser.config.baseUrl}/peps`, { method: 'GET' })
      .then(response => response.json())
      .catch(error => console.log('Unable to retrieve all entries', error))
  })
}

export function retrieveId (id) {
  return browser.call(async () => {
    return await fetch(`${browser.config.baseUrl}/peps/${id}`, { method: 'GET' })
      .then(response => response.json())
      .catch(error => console.log('Unable to retrieve all entries', error))
  })
}
