import { Card } from "react-bootstrap";
import { withRouter } from 'react-router-dom'
import React from "react";

const OneLineCard = (props) => {
    return (
        <Card onClick={() => {
            props.history.push('/' + props.category.toLowerCase())
        }} bg={'primary'} style={{ cursor: 'pointer', color: 'white', marginTop: '10px', marginBottom: '10px', width: '18rem', textAlign: 'center' }}>
            <Card.Body>
                <Card.Title>{props.category}</Card.Title>
                {/*<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>*/}
                {/*<Card.Text>*/}
                {/*    Some quick example text to build on the card title and make up the bulk of*/}
                {/*    the card's content.*/}
                {/*</Card.Text>*/}
                {/*<Card.Link href="#">Card Link</Card.Link>*/}
                {/*<Card.Link href="#">Another Link</Card.Link>*/}
            </Card.Body>
        </Card>
    )
}

export default withRouter(OneLineCard);