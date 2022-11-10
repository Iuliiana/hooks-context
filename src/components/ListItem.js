import React from 'react';


const ListItem = (props) => {
    const handleClick = props.onClick;
    return (
        <>
            <li className={`list-group-item ${(props.user.id === props.current) ? 'active' : ''}`}
                onClick={(event) => handleClick(event, props.user)}>{props.user.name}</li>
        </>
    );
}

export {ListItem};
