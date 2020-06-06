import React from "react";
import ModuleList from "./ModuleList";
import LessonTabsContainer from '../containers/LessonTabsContainer'
import {Link} from "react-router-dom";
import ModuleListContainer from "../containers/ModuleListContainer";
import TopicPillsContainer from "../containers/TopicPillsContainer";

const CourseEditor = (props) => {

    console.log(props);

    return (
        <div>
            <Link to="/courses">
                Back
            </Link>
            <h2>Course Editor</h2>

            <div className="row">
                <div className="col-4">
                    <ModuleListContainer courseId={props.match.params.courseId}/>
                </div>
                <div className="col-8">
                    {(props.match.params.courseId && props.match.params.modulesId) &&
                    <LessonTabsContainer courseId={props.match.params.courseId}
                                         modulesId={props.match.params.modulesId}/>}
                    {(props.match.params.courseId && props.match.params.modulesId &&
                        props.match.params.lessonId) &&
                    <TopicPillsContainer
                        courseId={props.match.params.courseId}
                        modulesId={props.match.params.modulesId}
                        lessonId={props.match.params.lessonId}/>}
                </div>
            </div>
        </div>
    )
}

export default CourseEditor
