import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/rating-star.png'
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {

    const navigate = useNavigate()
    console.log(navigate)

    return (
        <Col
            md={3}
            className="px-3 mt-3"
            onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
        >
            <Card style={{width: 150, cursor: "pointer"}} border={"light"} className="m-auto">
                <Image width={150} height={150} src={device.img} />
            </Card>
            <div className="text-black-50 d-flex justify-content-between align-items-center">
                <div>Samsung..</div>
                <div className="mt-2 d-flex align-items-center">
                    <div>{device.rating}</div>
                    <Image src={star} width={24} height={24}/>
                </div>
            </div>
            <div>
                {device.name}
            </div>
        </Col>
    );
};

export default DeviceItem;