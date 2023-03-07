/*import { Navigator } from "../components/Navbar";
import {createBrowserRouter} from "react-router-dom";

import {Tarjet} from "../components/Tarjet";


 export const rutas = createBrowserRouter([
    {
        path: "/",
        element: <Navigator/>,
      },
      {
        path: "/",
        element: <Tarjet/>
      }
  ]);*/
/*
import { Navigator } from "../components/Navigator";
import { Tarjet } from "../components/Tarjet";
import { createBrowserRouter, Routes, Route, Switch } from "react-router-dom";

export const rutas = createBrowserRouter([
  {
    path: "/",
    element: (
      <Switch>
        <Route exact path="/">
          <Navigator />
          <Tarjet />
        </Route>
      </Switch>
    ),
  },
]);*/
import React from "react";
import { Navigator } from "../components/Navigator";
import { Tarjet } from "../components/Tarjet";
import { createBrowserRouter} from "react-router-dom";

export const rutas = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Fragment>
        <Navigator />
        <Tarjet />
      </React.Fragment>
    ),
  },
]);



