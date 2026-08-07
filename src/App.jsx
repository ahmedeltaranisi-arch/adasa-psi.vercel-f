import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

// Layout & Core Pages
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import About from "./About/About";
import Privacy from "./privacy/privacy";
import NotFound from "./NoFound/NoFound";

// Blog & Categories
import Blog from "./Blog/Blog";
import AllArticles from "./AllArticles/AllArticles";
import Lighting from "./Lighting/Lighting";
import Portrait from "./Portrait/Portrait";
import Naturallandscapes from "./Naturallandscapes/Naturallandscapes";
import Technologies from "./Technologies/Technologies";
import Equipment from "./Equipment/Equipment";
import ArticleDetails from "./ArticleDetails/ArticleDetails";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "Home", element: <Home /> },
      { path: "About", element: <About /> },
      {
        path: "Blog",
        element: <Blog />,
        children: [
          { index: true, element: <AllArticles /> },
          { path: "AllArticles", element: <AllArticles /> },
          { path: "Lighting", element: <Lighting /> },
          { path: "Portrait", element: <Portrait /> },
          { path: "Naturallandscapes", element: <Naturallandscapes /> },
          { path: "Technologiesweb", element: <Technologies /> },
          { path: "Equipment", element: <Equipment /> },
        ],
      },
      // مسار تفاصيل المقال منفصل تحت /Blog/:id مع الحفاظ على Layout الرئيسي فقط
      { path: "Blog/:id", element: <ArticleDetails /> },
      { path: "privacy", element: <Privacy /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
