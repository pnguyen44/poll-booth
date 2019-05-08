import apiUrl from '../apiConfig'

export const getSurveys = () => {
  return fetch(apiUrl + '/surveys', {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

export const getSurvey = (id) => {
  return fetch(apiUrl + '/surveys/' + id, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

export const createSurvey = (title, question) => {
  return fetch(apiUrl + '/surveys', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      question
    })
  })
}

export const updateSurvey = (id, newTitle, newQueston) => {
  return fetch(apiUrl + '/surveys/' + id, {
    method:'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: newTitle,
      question: newQueston
    })
  })
}

export const deleteSurvey = (id) => {
  return fetch(apiUrl + '/surveys/' + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
