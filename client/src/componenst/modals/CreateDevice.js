import React, {useContext, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Col, Dropdown, Form, FormControl, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Context} from "../../index";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: "", description: "", number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter( i => i.number !== number))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className={"my-2"}>
                        <DropdownToggle>Выберете тип</DropdownToggle>
                        <DropdownMenu>
                            {device.types.map(type =>
                                <DropdownItem key={type.id}>{type.name}</DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown >
                        <DropdownToggle>Выберете брэнд</DropdownToggle>
                        <DropdownMenu className={"my-2"}>
                            {device.brands.map(brand =>
                                <DropdownItem key={brand.id}>{brand.name}</DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <FormControl
                        className={"mt-3"}
                        placeholder="Введите название утроства.."
                    />
                    <FormControl
                        className={"mt-3"}
                        placeholder="Введите стоимость утроства.."
                        type={"number"}
                    />
                    <FormControl
                        className={"mt-3"}
                        type={"file"}
                    />
                    <hr/>
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row key={i.number} className={"mt-3"}>
                            <Col md={4} >
                                <FormControl
                                    placeholder="Введите название характеристики"
                                />
                            </Col>
                            <Col md={4}>
                                <FormControl
                                    placeholder="Введите описание характеристики"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    variant={"danger"}
                                    onClick={() => removeInfo(i.number)}
                                >Удалить</Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;