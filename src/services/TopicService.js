const createTopic = (lessonId, topic) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001269144/lessons/${lessonId}/topics`, {
        method: 'POST',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const findTopicsForLesson = (lessonId) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/001269144/lessons/${lessonId}/topics`)
        .then(response => response.json())
}

const findTopic = (topicId) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/001269144/topics/${topicId}`)
        .then(response => response.json())
}

const updateTopic = (topicId, topic) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001269144/topics/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const deleteTopic = (topicId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001269144/topics/${topicId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    createTopic,
    findTopicsForLesson,
    findTopic,
    updateTopic,
    deleteTopic
}