const createLesson = (moduleId, lesson) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001269144/modules/${moduleId}/lessons`, {
        method: 'POST',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const findLessonsForModule = (moduleId) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/001269144/modules/${moduleId}/lessons`)
        .then(response => response.json())
}

const findLesson = (lessonId) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/001269144/lessons/${lessonId}`)
        .then(response => response.json())
}

const updateLesson = (lessonId, lesson) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001269144/lessons/${lessonId}`, {
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const deleteLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001269144/lessons/${lessonId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    createLesson,
    findLesson,
    findLessonsForModule,
    updateLesson,
    deleteLesson
}