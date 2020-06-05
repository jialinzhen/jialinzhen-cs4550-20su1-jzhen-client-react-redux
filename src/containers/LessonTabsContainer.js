import {connect} from 'react-redux';
import LessonTabsComponent from '../components/LessonTabsComponent'
import LessonService from '../services/LessonService'


const stateToPropertyMapperLesson = (state) => {

    console.log(state);

    return {
        lessons: state.lessonReducer.lessons,
        newLessonTitle: state.lessonReducer.newLessonTitle
    }
}

const dispatchToPropertyMapperLesson = (dispatch) => {
    return {
        createLessonForModule : (moduleId, lesson) => {
            LessonService.createLesson(moduleId, lesson).then(newLesson => dispatch({
                type: "CREATE_LESSON",
                newLesson: newLesson
            }))
        },
        findLessonForModule : (moduleId) => {
            LessonService.findLessonsForModule(moduleId).then(lessons => dispatch({
                type: "FIND_LESSON_FOR_MODULE",
                newLesson: lessons
            }))
        },
        updateLessonForModule : (lessonId, lesson) => {
            LessonService.updateLesson(lessonId, lesson).then(lesson => dispatch({
                type: "UPDATE_LESSON",
                updatedLesson: lesson
            }))
        },
        deleteLessonForModule : (lessonId) => {
            LessonService.deleteLesson(lessonId).then(status => dispatch({
                type: 'DELETE_LESSON',
                lessonId: lessonId
            }))
        }
    }
}

const LessonTabsContainer = connect(stateToPropertyMapperLesson, dispatchToPropertyMapperLesson)(LessonTabsComponent)
export default LessonTabsContainer;


