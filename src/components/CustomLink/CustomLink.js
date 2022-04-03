import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const activeStyle = {
    textDecoration: 'none',
    backgroundColor: 'rgb(29, 78, 216)',
    margin: '0 10px',
    padding: '6px 12px',
    color: 'white',
    fontWeght: '600',
    borderRadius: '8px'
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