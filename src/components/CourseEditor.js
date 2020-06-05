import React from "react";
import ModuleList from "./ModuleList";
import LessonTabsContainer from '../containers/LessonTabsContainer'
import {Link} from "react-router-dom";
import ModuleListContainer from "../containers/ModuleListContainer";
import TopicPillsContainer from "../containers/TopicPillsContainer";

const CourseEditor = ({match}) => {

    console.log(match);

    return (
        <div>
            <Link to="/courses">
                Back
            </Link>
            <h2>Course Editor</h2>

            <div className="row">
                <div className="col-4">
                    <ModuleListContainer courseId={match.courseId}/>
                </div>
                <div className="col-8">
                    <LessonTabsContainer />
                    <TopicPillsContainer />
                </div>
            </div>
        </div>
    )
}

export default CourseEditor
