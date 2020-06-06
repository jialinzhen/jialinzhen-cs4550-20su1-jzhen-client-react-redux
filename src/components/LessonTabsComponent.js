import React from 'react'
import {Link} from 'react-router-dom'


class LessonTabsComponent extends React.Component {

    state = {
        editingLesson: {},
        selectedLessonId: null
    }

    componentDidMount() {
        this.props.findLessonForModule(this.props.modulesId)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.modulesId != this.props.modulesId) {
            this.props.findLessonForModule(nextProps.modulesId)
        }
    }

    changeLessonName = (e) => {
        const newTitle = e.target.value
        this.setState(prevState => ({
            editingLesson: {
                ...prevState.editingLesson,
                title: newTitle
            }
        }))
    }

    updateLesson = () => {
        this.props.updateLessonForModule(this.state.editingLesson._id,
            this.state.editingLesson);
        this.setState({
            editingLesson: {}
        })
    }

    render() {

        let lessonList = this.props.lessons;
        lessonList.forEach(lesson => {
            if(lesson._id === this.state.selectedLessonId) {
                lesson['css'] = "nav-item bg-primary"
            } else {
                lesson['css'] = "nav-item"
            }
        })


        return (
            <ul className="nav nav-tabs wbdv-lesson-tabs">
                {
                    lessonList.map(lesson =>
                            <li className={lesson.css} onClick={() =>
                                this.setState({selectedLessonId: lesson._id})}>

                                {
                                    this.state.editingLesson._id === lesson._id &&
                                    <span>
                    <input onChange={(e) => this.changeLessonName(e)}
                           value={this.state.editingLesson.title}/>
                                            <div className="float-right">
                                               <i className="fa fa-times"
                                                  onClick={() => this.props.deleteLessonForModule(lesson._id)}>
                                               </i>
                        <i className="fa fa-check" onClick={() => this.updateLesson()}>

                        </i>
                                            </div>
                    </span>

                                }
                                {
                                    this.state.editingLesson._id != lesson._id &&
                                    <a className="nav-link">
                                        <Link to={`/course/${this.props.courseId}/module/${this.props.modulesId}/lesson/${lesson._id}`}>
                                            {lesson.title}
                                        </Link>
                                        <i className="fa fa-pencil"
                                           onClick={() => this.setState({
                                               editingLesson: lesson
                                           })}>

                                        </i></a>

                                }
                            </li>
                    )
                }
                <i className="fa fa-plus fa-2x" onClick={() => this.props.createLessonForModule(this.props.modulesId,
                    {title: 'Some Lesson'})}></i>
            </ul>
        )
    }
}

export default LessonTabsComponent
