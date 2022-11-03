import React from "react";
import Header_layouts from "@/layouts/header/header_layout.jsx";
import "./header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Header_layouts></Header_layouts>
            </div>
        </header>
    );
};

export default Header;
