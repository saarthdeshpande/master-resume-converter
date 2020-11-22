import { Card} from "react-bootstrap";
import React from "react";
import ProjectModal from "../detailed-card-modal";

const boolToHuman = (val) => {
    return val ? 'Completed' : 'Ongoing';
}

const DetailedCard = (props) => {

    return (
        <Card bg={props.completed ? 'primary' : 'danger'} style={{ color: 'white', marginTop: '10px', marginBottom: '10px', width: '18rem', textAlign: 'center' }}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    <ProjectModal url={props.url} name={props.name} domain={props.domain} techStack={props.techStack} description={props.description} />
                    <br />
                    {boolToHuman(props.completed)}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default DetailedCard