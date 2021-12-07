import {FunctionComponent, useContext} from 'react';
import {Button, Card, CardGroup, Container, Offcanvas, Row} from "react-bootstrap";
import {ShoppingCartContext} from "../contexts/ShoppingCartContext";
import CardHeader from "react-bootstrap/CardHeader";

interface OwnProps {
    show: boolean;
    setShow: (show: boolean) => void;
}

type Props = OwnProps;

const ShoppingCart: FunctionComponent<Props> = (props) => {

    const {cartItems, setCartItems} = useContext(ShoppingCartContext);

    return (
        <Offcanvas placement="bottom" onShow={() => props.setShow(true)} show={props.show}
                   onHide={() => props.setShow(false)}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                <Button> Checkout</Button>
            </Offcanvas.Header>


            <Container fluid className="overflow-auto">
                <Row xs={6}>
                    {cartItems.map((item, index) => (
                        <Card key={index}
                              onClick={() => setCartItems(cartItems.filter((item2, index2) => index != index2))}>
                            <Card.Header> {item.name}</Card.Header>
                            <Card.Img variant="bottom" src={"data:image/png;base64," + item.image}/>
                        </Card>

                    ))}
                </Row>
            </Container>

        </Offcanvas>
    );
};

export default ShoppingCart;
