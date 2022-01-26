import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
    const { setIsAuth } = useContext(AuthContext);
    
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <div className="navbar__btns">
                <MyButton onClick={logout}>Exit</MyButton>
            </div>
            <div className="navbar__links">
                <div className="navbar__btns">
                    <MyButton>
                        <Link to="/about">About</Link>
                    </MyButton>
                </div>
                <div className="navbar__btns">
                    <MyButton>
                        <Link to="/posts">Posts</Link>
                    </MyButton>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
