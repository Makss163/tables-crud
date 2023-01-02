import React, { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import HeaderPage from "./HeaderPage/HeaderPage";

const Layout: FC = () => {
    return (
        <>
            <HeaderPage/>

            <Outlet/>

            <div className="footer"></div>
        </>
    );
};

export { Layout };
