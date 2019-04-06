import React from 'react'
import PropTypes from "prop-types";

const Header = (props) => {
    const title = props.title;
    return (
        <nav>
            <div className="nav-wrapper light-blue darken-3">
                <a href="" className="brand-logo center"> {title} </a>
            </div>
        </nav>
    )
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};
export default Header;
