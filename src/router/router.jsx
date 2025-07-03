import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../components/pages/page/Home";
import ClassRequirement from "../components/pages/page/ClassRequirement";
import Students from "../components/pages/page/Students";
import Teachers from "../components/pages/page/Teachers";
import Results from "../components/pages/page/Results";
import Fees from "../components/pages/page/Fee";
import Notices from "../components/pages/page/Notifications";
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../components/pages/admin/Dashboard";
import ManageStudents from "../components/pages/admin/ManageStudents";
import ManageTeachers from "../components/pages/admin/ManageTeachers";
import ManageResults from "../components/pages/admin/ManageResults";
import ManageFees from "../components/pages/admin/ManageFees";
import ManageClassRequirements from "../components/pages/admin/ManageClassRequirements";
import ManageNotifications from "../components/pages/admin/ManageNotifications";
import ErrorPage from "../components/pages/page/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "classrequire", element: <ClassRequirement /> },
      { path: "students", element: <Students /> },
      { path: "teachers", element: <Teachers /> },
      { path: "results", element: <Results /> },
      { path: "fees", element: <Fees /> },
      { path: "notifications", element: <Notices /> },
      // { path: "login", element: <Login /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "students", element: <ManageStudents /> },
      { path: "teachers", element: <ManageTeachers /> },
      { path: "results", element: <ManageResults /> },
      { path: "fees", element: <ManageFees /> },
      { path: "class-requirements", element: <ManageClassRequirements /> },
      { path: "notifications", element: <ManageNotifications /> },
    ],
  },
]);
