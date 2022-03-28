import React from 'react';
import {Button, Card, Col, Image, Row, Container} from "react-bootstrap";
// import Container from "react-bootstrap/Container";
import bigStar from "../assets/rating-star-big.png"

const DevicePage = () => {

    const device = {id: 1, name: 'Nord CE', price: 49990, rating: 5, img: 'http://localhost:5000/a08ba195-6483-4cb0-8ef3-c1b991df0dc5.webp'}
    const description = [
        {id: 1, title: 'Оперативная память', description: '12 ГБ'},
        {id: 2, title: 'Встроенная память', description: '256 ГБ'},
        {id: 3, title: 'Процессор', description: 'Snapdragon 750G (8 ядер), 2.2 ГГц'},
        {id: 4, title: 'Емкость аккумулятора, мАч', description: '4500'},
        {id: 5, title: 'Диагональ экрана, дюймы', description: '6.43'},
    ]

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4} className="align-items-center">
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2 className="text-center">{device.name}</h2>
                        <div
                            className="d-flex flex-column align-items-center justify-content-center"
                            style={
                                {
                                    background: `url(${bigStar}) no-repeat center center`,
                                    width: 240,
                                    height: 240,
                                    backgroundSize: "cover",
                                    fontSize: 64
                                }
                            }
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4} className="align-items-center">
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around m-auto"
                        style={{fontSize: 32, width: 300, height: 300, border: "5px solid lightgrey"}}
                    >
                        <h3>от {device.price} &#8381;</h3>
                        <Button variant={'outline-dark'}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column mt-3">
                <h1>Характерисики:</h1>
                {description.map((info, index) =>
                    <Row
                        key={info.id}
                        style={{background: index % 2 === 0 ? 'lightgray' : 'transparent'}}
                        className="px-4 py-2"
                    >
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;