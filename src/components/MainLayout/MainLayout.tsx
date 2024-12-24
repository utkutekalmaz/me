"use client";
import React from "react";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

type MainLayoutProps = {
    children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <>
                <ThemeSwitcher />
                {children}
            </>
        </>
    );
};

export default MainLayout;
