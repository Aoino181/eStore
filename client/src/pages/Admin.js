import React from 'react';
import {Button, Container} from "react-bootstrap";

const Admin = () => {
    return (
        <Container className="d-flex flex-column">
            <Button
                variant="outline-dark"
                className="mt-3 p-3"
            >
                Добавить Бренд
            </Button>
            <Button
                variant="outline-dark"
                className="mt-3 p-3"
            >
                Добавить Тип
            </Button>
            <Button
                variant="outline-dark"
                className="mt-3 p-3"
            >
                Добавить Девайс
            </Button>
        </Container>
    );
};

export default Admin;