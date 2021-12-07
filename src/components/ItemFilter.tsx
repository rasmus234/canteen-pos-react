import React, {FunctionComponent} from 'react';
import {Button, Col, Row} from "react-bootstrap";

interface OwnProps {

    setFilteredCategory: (item: string) => void;
}

type Props = OwnProps;

const ItemFilter: FunctionComponent<Props> = (props) => {

    const setFilter = props.setFilteredCategory;

    return (
            <div id="buttongroup-itemfilter">
                <Button id="itemfilter-breakfast" onClick={() => setFilter("Breakfast")}>Breakfast</Button>
                <Button id="itemfilter-fruit" onClick={() => setFilter("Fruit")} >Fruit</Button>
                <Button id="itemfilter-cake" onClick={() => setFilter("Cake")}>Cake</Button>
            </div>
    );
};

export default ItemFilter;
