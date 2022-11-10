import React from 'react';
import {ListItem} from "./ListItem";
import uuid from "react-uuid";
import ListGroup from 'react-bootstrap/ListGroup';

const List = (props) => {
    const handleClickGetDetail = props.onClick;
    return (
        <ListGroup as="ul">
            {
                (!props.usersList.isLoading)
                    ? 'Данные загружаются'
                    : props.usersList.users.map((user) => {
                            return (
                                 <ListItem key={uuid()} user={user} current={props.currentUser.id} onClick={handleClickGetDetail}/>
                            )
                        }
                    )
            }
        </ListGroup>
    );
}

export {List};
