const findAllModules = () => {
  return fetch("https://wbdv-generic-server.herokuapp.com/api/001269144/modules")
    .then(response => response.json())
}

const findModule = (moduleId) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/001269144/modules/${moduleId}`)
        .then(response => response.json())
}

const deleteModule = (moduleId) => {
  return fetch(`https://wbdv-generic-server.herokuapp.com/api/001269144/modules/${moduleId}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
}

const findModulesForCourse = (courseId) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/001269144/courses/${courseId}/modules`)
        .then(response => response.json())
}

const updateModule = (moduleId, newModule) =>
  fetch(`https://wbdv-generic-server.herokuapp.com/api/001269144/modules/${moduleId}`, {
    method: 'PUT',
    body: JSON.stringify(newModule),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())

const createModule = (courseId, module) =>
  fetch(`https://wbdv-generic-server.herokuapp.com/api/001269144/courses/${courseId}/modules`, {
    method: 'POST',
    body: JSON.stringify(module),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())


export default {
  findAllModules,
  deleteModule,
  createModule,
  updateModule,
    findModule,
    findModulesForCourse
}
