import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../componenst/TypeBar";
import BrandBar from "../componenst/BrandBar";
import DeviceList from "../componenst/DeviceList";

const Shop = () => {
    return (
        <Container>
            <Row className="mt-3">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;