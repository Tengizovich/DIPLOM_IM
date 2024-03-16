import React, { useContext } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Context } from '../index';
import { Admin_Route, Login_Route, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite'; // Import observer if you are using MobX
import {useHistory} from 'react-router-dom'

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const history = useHistory

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav.Link style={{ color: 'white' }} to={SHOP_ROUTE}>КупиГаджет</Nav.Link>
                {user.isAuth ? (
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant={"outline-light"} onClick={() => history.push(Admin_Route)}>Админ панель</Button>
                        <Button variant={"outline-light"} onClick={() => logOut()} className='ml-2'>Выйти</Button>
                    </Nav>
                ) : (
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant="outline-light" onClick={() => history.push(Login_Route)}>Авторизация</Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
});

export default NavBar;