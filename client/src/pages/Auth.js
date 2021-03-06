import React from 'react';
import {Button, Card, Container, Form, FormControl} from 'react-bootstrap';
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регстрация"}</h2>
                <Form className="d-flex flex-column">
                    <FormControl
                        className="mt-3"
                        placeholder="Введите ваш email.."
                    />
                    <FormControl
                        className="mt-3"
                        placeholder="Введите ваш пароль.."
                    />
                    <div className="d-flex justify-content-between mt-3">
                        {isLogin ?
                            <div>
                                нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                есть аккаунт? <NavLink to={LOGIN_ROUTE}>Залогинься!</NavLink>
                            </div>
                        }
                        <Button variant="outline-success">
                            {isLogin ? "Войти" : "Зарегистрироваться"}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;