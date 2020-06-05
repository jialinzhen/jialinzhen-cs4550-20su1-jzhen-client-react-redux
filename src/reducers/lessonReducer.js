const initialStateLesson = {
    newLessonTitle: 'Some Lesson',
    lessons: []
}

const lessonReducer = (state=initialStateLesson, event) => {
    switch (event.type) {
        case "UPDATE_LESSON":
            return {
                ...state,
                lessons: state.lessons.map(
                    lesson => lesson._id === event.updatedLesson._id ?
                        event.updatedLesson : lesson )
            }
            break
        case "CREATE_LESSON":
            return {
                lessons: [
                    ...state.lessons,
                    event.newLesson
                ]
            }
            break
        case "FIND_LESSON_FOR_MODULE":
            return {
                ...state,
                lessons: event.newLesson
            }
        case "DELETE_LESSON":
            return {
                lessons: state.lessons.filter(lesson => lesson._id !== event.lessonId)
            }
            break
        default:
            return state
    }
}

export default lessonReducer