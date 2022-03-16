import NameMainContainer from "./Components/Main/Main/NameMainContainer.jsx";
import NameHeaderContainer from "./Components/Main/Header/NameHeaderContainer.jsx";
import ProfileHeader from "./Components/Main/Header/ProfileHeader.jsx";
import WorkspaceHeader from "./Components/Main/Header/WorkspaceHeader.jsx";
import ProfileMainContainer from "./Components/Main/Main/ProfileMainContainer.jsx";
import CourseDescriptionContainer from "./Components/Courses/CoursesMenu/CourseDescriptionContainer.jsx";
import CoursesStepsContainer from "./Components/Courses/CoursesMenu/CoursesPersonal/CoursesStepsContainer.jsx";

import AuthenticationContainer from "./Components/Authentication/AuthenticationContainer.jsx";
import LoginContainer from "./Components/Authentication/LoginContainer.jsx";
import CoursesMenuContainer from "./Components/Courses/CoursesMenu/CoursesMenuContainer.jsx";
import CoursesAdminContainer from "./Components/Courses/CoursesAdmin/CoursesAdminContainer.jsx";
//import CoursesPersonalContainer from "./Components/Courses/CoursesMenu/CoursesPersonal/CoursesPersonalContainer.jsx";
import CoursesLessonsContainer from "./Components/Courses/CoursesMenu/CoursesLessonsContainer.jsx";
import "./App.css";
import ProfileContainer from "./Components/Profile/ProfileContainer.jsx";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <NameMainContainer />
        <Switch>
          <Route
            exact
            path="/auth/registration"
            render={() => <AuthenticationContainer />}
          />
          <Route exact path="/" render={() => <LoginContainer />} />
          <Route
            exact
            path="/courses"
            render={() => <CoursesMenuContainer />}
          />
          <Route exact path="/admin" render={() => <CoursesAdminContainer />} />

          <Route
            exact
            path="/courses/description/"
            render={() => <CourseDescriptionContainer />}
          />
          <Route
            exact
            path="/courses/lessons/steps"
            render={() => <CoursesStepsContainer />}
          />
          <Route
            exact
            path="/courses/lessons"
            render={() => <CoursesLessonsContainer />}
          />
          <Route exact path="/profile" render={() => <ProfileContainer />} />

          <Redirect to="/" />
        </Switch>

        <ProfileMainContainer />
      </Router>
    </div>
  );
}

export default App;
