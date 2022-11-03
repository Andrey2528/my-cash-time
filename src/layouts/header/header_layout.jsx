import React from "react";
import "./header_layout.scss";

const Header_layout = () => {
    return (
        <nav className="navbar">
            <div className="navbar__row">
                <p className="main__title">MY CASH&amp;TIME</p>
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <p className="main__desc" style={{ fontWeight: "700" }}>
                            Cash
                        </p>
                    </li>
                    <li className="navbar__item">
                        <p className="main__desc">Time</p>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header_layout;
