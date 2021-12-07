import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {
    Button,
    ButtonGroup, Card, Col,
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
    Offcanvas,
    Row, Stack
} from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
import ShoppingNavBar from "./components/ShoppingNavBar";
import ItemFilter from "./components/ItemFilter";
import MenuItems from "./components/MenuItems";
import {ShoppingCartContext} from "./contexts/ShoppingCartContext";
import {MenuItem} from "./models/MenuItem";
import CardHeader from "react-bootstrap/CardHeader";

function App() {

    const [cartItems, setCartItems] = useState<MenuItem[]>([]);
    const [filter, setFilter] = useState("Breakfast");

    return (
        <Container fluid style={{height:"100%"}}>
            <ShoppingCartContext.Provider value={{cartItems, setCartItems}}>
                <ShoppingNavBar/>

                <Row>
                    <Col xs={2}>
                        <ItemFilter setFilteredCategory={setFilter}> </ItemFilter>
                    </Col>
                    <Col xs={10}>
                        <Container fluid>
                            <Row>
                                <MenuItems filteredCategory={filter}></MenuItems>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </ShoppingCartContext.Provider>
        </Container>
    );
}

export default App;
