import React from "react";
import "./header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar">
                    <div className="navbar__row">
                        <p className="main__title">MY CASH&amp;TIME</p>
                        <ul className="navbar__list">
                            <li className="navbar__item">
                                <p
                                    className="main__desc"
                                    style={{ fontWeight: "700" }}
                                >
                                    Cash
                                </p>
                            </li>
                            <li className="navbar__item">
                                <p className="main__desc">Time</p>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
