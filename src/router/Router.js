import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import NotFound from "../components/NotFound";
import Resume from "../components/Resume/ResumeNew";
import { Learning } from "../components/Learning/Learning";
import ProjectPage from "../components/Projects/ProjectPage/ProjectPage";
import LearningPage from "../components/Learning/LearningPage/LearningPage";
import LearningIdx from "../components/Learning/LearningPage/LearningIdx";

import App from "../App";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/project",
          element: <Projects />,
        },
        {
          path: "/project/projectpage/:id",
          element: <ProjectPage />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/learning",
          element: <Learning />,
        },
        {
          path: "/learning/learningIdx/:id",
          element: <LearningIdx />,
        },
        {
          path: "/learningpage/:id/:fileName",
          element: <LearningPage />,
        },
        {
          path: "/resume",
          element: <Resume />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
    {
      path: "*",
      element: <Home />,
    },
  ]);

  return router;
};
export default Router;
