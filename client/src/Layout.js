import React from "react";
import Header from "./Header";
import Post from "./post";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
            <main>
              <Header />
              <Outlet />
            </main> 
    );
}