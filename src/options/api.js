import apiUrl from '../apiConfig'

export const handleErrors = res => {
  if (res.ok) {
    return res
  } else  {
    throw new Error('Recieved status in 400 or 500 range.')
  }
}

export const createOption = (surveyId, name) => {
  return fetch(apiUrl + '/options', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      option: {
        surveyId,
        name
      }
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
      option: {
        name,
        voteCount
      }
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
