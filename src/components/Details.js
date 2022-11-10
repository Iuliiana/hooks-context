import React, {useEffect, useState} from 'react';
import {getUserDetail} from "../data/users";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const Details = (props) => {
    const id = props.info.id;
    const [userData, setUserserData] = useState({});

    useEffect(() => {
        getUserDetail(id).then((userData) => {
            setUserserData(userData);
        }).catch((error) => console.log("не удалось загрузить польователя. ", error));
    }, [id]);

    return (
        <>
            {
                userData.id && <Card style={{width: '18rem'}} id={id}>
                    <Card.Img variant="top" src={userData.avatar}/>
                    <Card.Body>
                        <Card.Title>{userData.name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{userData.details.city}</ListGroup.Item>
                        <ListGroup.Item>{userData.details.company}</ListGroup.Item>
                        <ListGroup.Item>{userData.details.position}</ListGroup.Item>
                    </ListGroup>
                </Card>
            }
        </>
    );
}
export {Details};