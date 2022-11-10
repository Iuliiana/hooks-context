import React from 'react';

import {List} from "../components/List";
import {useEffect, useState} from "react";
import {Details} from "../components/Details";
import {getUsersList} from "../data/users";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Users = () => {

    const [usersList, setUsersList] = useState({
            isLoading: false,
            users: []
        }),
        [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        const controller = new AbortController();
        getUsersList().then((data) => {
            setUsersList((prevState) => ({...prevState, isLoading: true, users: data}));
        }).catch((error) => console.log("не удалось загрузить список пользователей. ", error));
        return () => controller.abort();
    }, [])

    const handleClickGetDetail = (event, info) => {
        setCurrentUser((prevState) => ({...prevState, ...info}))
    }
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <List usersList={usersList} currentUser={currentUser} onClick={handleClickGetDetail}/>
                    </Col>
                    <Col>
                        {currentUser.id && <Details info={currentUser}/>}
                    </Col>
                </Row>
            </Container>
        </>
    );


}

export {Users};
//     а не при каждом рендере. То есть если на одного и того же пользователя кликнуть дважды, то загрузка произойдёт только в первый раз.