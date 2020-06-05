import React from "react";
import ModuleList from "./ModuleList";
import LessonTabsContainer from '../containers/LessonTabsContainer'
import {Link} from "react-router-dom";
import ModuleListContainer from "../containers/ModuleListContainer";
import TopicPillsContainer from "../containers/TopicPillsContainer";
import LessonTabsComponent from "./LessonTabsComponent";
import LessonTabs from "./LessonTabs";

// stateless component
const CourseEditor = ({match}) => {
    return (
        <div>
            <Link to="/courses">
                Back
            </Link>
            <h2>Course Editor</h2>

            <div className="row">
                <div className="col-4">
                    <ModuleListContainer courseId={match.params.courseId}/>
                </div>
                <div className="col-8">
                    <LessonTabsContainer/>
                    <TopicPillsContainer/>
                </div>
            </div>
        </div>
    )
}

export default CourseEditor
