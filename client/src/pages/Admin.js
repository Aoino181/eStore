import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../componenst/modals/CreateBrand";
import CreateType from "../componenst/modals/CreateType";
import CreateDevice from "../componenst/modals/CreateDevice";

const Admin = () => {

    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant="outline-dark"
                className="mt-3 p-3"
                onClick={() => setBrandVisible(true)}
            >
                Добавить Бренд
            </Button>
            <Button
                variant="outline-dark"
                className="mt-3 p-3"
                onClick={() => setTypeVisible(true)}
            >
                Добавить Тип
            </Button>
            <Button
                variant="outline-dark"
                className="mt-3 p-3"
                onClick={() => setDeviceVisible(true)}
            >
                Добавить Девайс
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>
    );
};

export default Admin;