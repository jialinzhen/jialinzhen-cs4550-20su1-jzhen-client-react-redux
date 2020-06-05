import {connect} from "react-redux";
import ModuleListComponent from "../components/ModuleListComponent";
import ModuleService from "../services/ModuleService";

const stateToPropertyMapper = (state) => {
    return {
        modules: state.moduleReducer.modules,
        newModuleTitle: state.moduleReducer.newModuleTitle
    }
}


const dispatchToPropertyMapper = (dispatch) => {
    return {
        findModuleForCourse: (courseId) => {
            ModuleService.findModulesForCourse(courseId)
                .then(newModuleForCourse => dispatch({
                    type: "FIND_MODULE_FOR_COURSE",
                    newModule: newModuleForCourse
                }))
        },
        findAllModules: () => {
            ModuleService.findAllModules()
                .then(actualModules => dispatch({
                    type: 'FIND_ALL_MODULES',
                    modules: actualModules
                }))
        },
        updateModule: (moduleId, newModuleData) => {
            ModuleService.updateModule(moduleId, newModuleData)
                .then(status => dispatch({
                    type: 'UPDATE_MODULE',
                    updatedModule: newModuleData
                }))
        },
        createModule: (courseId, newModule) => {
            ModuleService.createModule(courseId, newModule)
                .then(actualNewModule => dispatch({
                    type: "CREATE_MODULE",
                    newModule: actualNewModule
                }))
        },
        deleteModule: (moduleId) => {
            ModuleService.deleteModule(moduleId)
                .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleId: moduleId
                }))
        }
    }
}

const ModuleListContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(ModuleListComponent)

export default ModuleListContainer
