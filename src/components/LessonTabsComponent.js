import React from 'react'

class LessonTabsComponent extends React.Component {

    state = {

    }

    componentDidMount() {

        console.log(this.props);

    }

    render() {
        return (
            <ul className="nav nav-tabs wbdv-lesson-tabs">
                <li className="nav-item">
                    <a className="nav-link active">Topic 1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Topic 2</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Topic 3</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Topic 4</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Topic 5</a>
                </li>

                {
                    this.props.lessons.map(lesson =>
                        <li className="nav-item">
                            <a className="nav-link">{lesson.title}</a>
                            <i className="fa fa-pencil" onClick={() => this.props.createLessonForModule(
                                '', {title: this.props.newLessonTitle}
                            )}></i>
                        </li>
                    )
                }


                <i className="fa fa-plus fa-2x"></i>
            </ul>
        )
    }
}
export default LessonTabsComponent