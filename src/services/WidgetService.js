const createWidget = (tid, widget) =>
    fetch(`https://localhost:8080/api/topics/${tid}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())


const findWidgetForTopic = (tid) => {
    return fetch(`https://localhost:8080/api/topics/${tid}/widgets`)
        .then(response => response.json())
}

const updateWidget = (wid, widget) =>
    fetch(`https://localhost:8080/api/widgets/${wid}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const deleteWidget = (wid) =>
    fetch(`https://localhost:8080/api/widgets/${wid}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export default {
    createWidget,
    findWidgetForTopic,
    updateWidget,
    deleteWidget
}