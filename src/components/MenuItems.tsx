import React, {FunctionComponent, useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {MenuItem} from "../models/MenuItem";
import {ShoppingCartContext} from "../contexts/ShoppingCartContext";

interface OwnProps {
    filteredCategory: string;
}

type Props = OwnProps;

const MenuItems: FunctionComponent<Props> = (props) => {

    const {cartItems, setCartItems} = useContext(ShoppingCartContext);

    const item1: MenuItem = {
        itemId: 1,
        name: "Pizza",
        price: 10,
        category: "Pizza",
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    };


    const [fetchedItems, setFetchedItems] = useState<MenuItem[]>([]);
    const blobPrefix= "data:image/png;base64,"

    // useEffect(() => {
    //     fetch("https://canteen-easv.herokuapp.com/api/Items")
    //         .then(res => res.json())
    //         .then(data => setFetchedItems(data));
    // }, []);
    return (
        <>
            {fetchedItems.filter(value => value.category == props.filteredCategory)
                .map(value => {
                        return (
                            <Col xs={2}>
                                <Card onClick={() => setCartItems([...cartItems, value])}>
                                    <Card.Img variant="top" src={"data:image/png;base64," + value.image}/>
                                    <Card.Body>
                                        <Card.Title>{value.name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                )}
        </>)
}

export default MenuItems;
