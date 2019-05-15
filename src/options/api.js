import apiUrl from '../apiConfig'


export const createOption = name => {
  return fetch(apiUrl + '/options', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name
    })
  })
}

export const updateOption = (id, name, voteCount = 0) => {
  return fetch(apiUrl + '/options/' + id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      voteCount
    })
  })
}

export const deleteOption = id => {
  return fetch(apiUrl + '/options/' + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
