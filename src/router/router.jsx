import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../components/pages/page/Home";
import ClassRequirement from "../components/pages/page/ClassRequirement";
import Students from "../components/pages/page/Students";
import Teachers from "../components/pages/page/Teachers";
import Results from "../components/pages/page/Results";
import Fees from "../components/pages/page/Fee";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<p>error</p>,
    children:[
        {index:true, Component:Home},
        {path:'/classrequire', Component:ClassRequirement},
        {path:"/students", Component:Students},
        {path:'/teachers', Component:Teachers},
        {path:'/results', Component:Results},
        {path:'/fees', Component:Fees},
    ]
  },
]);
