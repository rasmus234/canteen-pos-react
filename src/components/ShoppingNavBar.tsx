import React, {FunctionComponent, useContext, useEffect, useState} from 'react';
import {Button, Container, Navbar, Offcanvas} from "react-bootstrap";
import logo from "../logo.svg";
import ShoppingCart from "./ShoppingCart";
import {ShoppingCartContext} from "../contexts/ShoppingCartContext";

interface OwnProps {
}

type Props = OwnProps;

const ShoppingNavBar: FunctionComponent<Props> = (props) => {
    const [show, setShow] = useState(false);
    const {cartItems, setCartItems} = useContext(ShoppingCartContext);

    const amount = cartItems.length;
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);


    return (
        <Navbar sticky="top" expand={false} id="shopping-navbar" className="bg-light">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                Canteen
            </Navbar.Brand>
            <h2>Items amount:{amount}</h2>
            <h2>Price: {totalPrice}</h2>
            <Button variant="primary" onClick={() => setShow(!show)}>Shopping Cart</Button>

            <ShoppingCart show={show} setShow={setShow}></ShoppingCart>
        </Navbar>
    );
};

export default ShoppingNavBar;
