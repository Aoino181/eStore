import React, { useContext } from 'react';
import { Context } from '../index';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import { NavLink, useNavigate  } from 'react-router-dom';
import {ADMIN_ROUTE, SHOP_ROUTE, LOGIN_ROUTE} from '../utils/consts';
import { observer } from 'mobx-react-lite';

const NavBar = observer( () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    return (
    <Navbar bg="dark" variant="dark">
        <Container>
            <NavLink to={SHOP_ROUTE}>eStore</NavLink>
            {user.isAuth ?
                <Nav className="ml-auto">
                    <Button
                        variant={'outline-light'}
                        onClick={() => navigate(ADMIN_ROUTE)}
                    >
                        Админ панель
                    </Button>
                    <Button
                        variant={'outline-light'}
                        onClick={() => navigate(LOGIN_ROUTE)}
                        style={{"marginLeft": "10px"}}
                    >
                        Выйти
                    </Button>
                </Nav>
                :
                <Nav className="ml-auto">
                    <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                </Nav>
            }
        </Container>
    </Navbar>
    );
})

export default NavBar;