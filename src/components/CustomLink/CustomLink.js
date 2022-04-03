import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const activeStyle = {
    textDecoration: 'none',
}

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link
            style={match && activeStyle}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;