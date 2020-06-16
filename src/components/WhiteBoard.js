import React from 'react'
import CourseListContainer from "../containers/CourseListContainer";
import CourseEditor from "./CourseEditor";
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import LoginComponent from "./LogicComponent";
import WidgetList from "../containers/WidgetListContainer";

class WhiteBoard extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <h1>WhiteBoard !!!!</h1>

          <Route path="/login" exact={true} component={LoginComponent}/>

          {/*TODO: port over registraion, profile components*/}

          <Route
            path='/'
            exact={true}
            component={HomeComponent}
          />

          <Route
            path='/courses'
            exact={true}
            component={CourseListContainer}/>

          <Route
            path='/:layout/courses'
            exact={true}
            component={CourseListContainer}/>

          <Route
            path='/editor'
            exact={true}
            component={CourseEditor}
          />

          <Route
            path='/course/:courseId'
            exact={true}
            component={CourseEditor}

          />

          <Route
              path='/course/:courseId/module/:modulesId'
              exact={true}
              component={CourseEditor}
          />

          <Route
              path='/course/:courseId/module/:modulesId/lesson/:lessonId'
              exact={true}
              component={CourseEditor}
          />

          <Route
              path='/course/:courseId/module/:modulesId/lesson/:lessonId/topic/:topicId'
              exact={true}
              component={CourseEditor}
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default WhiteBoard
