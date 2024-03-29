import React, { useContext } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Context } from '../index';
import { Admin_Route, Login_Route, Shop_Route } from '../utils/consts';
import { observer } from 'mobx-react-lite'; // Import observer if you are using MobX
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    };

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav.Link style={{ color: 'white' }} to={Shop_Route}>КупиГаджет</Nav.Link>
                {user.isAuth ? (
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant="outline-light" onClick={() => navigate(Admin_Route)}>Админ панель</Button>
                        <Button variant="outline-light" onClick={logOut} className='ml-2'>Выйти</Button>
                    </Nav>
                ) : (
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant="outline-light" onClick={() => navigate(Login_Route)}>Авторизация</Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
});

export default NavBar;