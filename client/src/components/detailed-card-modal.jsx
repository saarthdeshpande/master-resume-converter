import {Button, Modal} from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {withRouter} from 'react-router-dom'

class ProjectModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            background: localStorage.theme === 'light' ? '#FAFAFA' : '#363537',
            borderColor: localStorage.theme !== 'light' ? '#FAFAFA' : '#363537',
            variant: localStorage.theme,
            project: this.props.history.location.pathname === '/projects' ? true : false
        }
    }

    render() {
        if (this.state.variant !== localStorage.theme) {
            this.setState({variant: localStorage.theme})
            this.setState({background: localStorage.theme === 'light' ? '#FAFAFA' : '#363537'})
            this.setState({borderColor: localStorage.theme !== 'light' ? '#FAFAFA' : '#363537'})
        }
        console.log(this.props)
        return (
            <>
                <Modal className={'pModal'}
                       show={this.state.show}
                       onHide={() => this.setState({show: !this.state.show})}
                       aria-labelledby="contained-modal-title-vcenter"
                       centered
                >
                    <Modal.Header closeButton as="h3"
                                  style={{textAlign: 'center', background: this.state.background}}>About &nbsp;
                        <strong>{this.props.name}</strong></Modal.Header>
                    <Modal.Body style={{
                        background: this.state.background
                    }}>
                        <Container>
                            <Row>
                                <Col xs={12} lg={12}>
                                    <center><strong>Description</strong></center>
                                    {this.props.description}
                                </Col>
                            </Row>
                            <hr style={{backgroundColor: this.state.borderColor}}/>
                            {
                                this.state.project && (
                                    <>
                                        <Row>
                                            <Col xs={12} lg={12}>
                                                <center>
                                                    <strong>URL: </strong>
                                                    {this.props.url && <a href={this.props.url}>{this.props.url}</a>}
                                                    {!this.props.url && "Not Hosted Yet"}
                                                </center>
                                            </Col>
                                        </Row>
                                    </>
                                )
                            }
                            {
                                !this.state.project && (
                                    <>
                                        <Row>
                                            <Col xs={12} lg={12}>
                                                <strong style={{textAlign: 'left'}}>Start Date: <span style={{color: 'green'}}>{this.props.startDate}</span></strong>
                                                <strong style={{right: '1vw', position: 'absolute'}}>End Date: <span style={{color: 'red'}}>{this.props.endDate}</span></strong>
                                            </Col>
                                        </Row>
                                    </>
                                )
                            }
                            <hr style={{backgroundColor: this.state.borderColor}}/>

                            <Row>
                                <Col xs={6} lg={6}>
                                    <center><strong>Domain</strong></center>
                                    <ListGroup>
                                        {this.props.domain.map(element => (
                                            <ListGroup.Item key={element} style={{
                                                background: this.state.background,
                                                borderColor: this.state.borderColor,
                                                textAlign: 'center'
                                            }}>{element}</ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Col>
                                <Col xs={6} lg={6}>
                                    <center><strong>Tech Stack</strong></center>
                                    <ListGroup>
                                        {this.props.techStack.map(element => (
                                            <ListGroup.Item key={element} style={{
                                                background: this.state.background,
                                                borderColor: this.state.borderColor,
                                                textAlign: 'center'
                                            }}>{element}</ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
                <Button variant={this.state.variant} style={{marginBottom: '10px'}} onClick={() => {
                    this.setState({show: !this.state.show});
                    setTimeout(() => {
                        document.querySelector('.close').style.color = localStorage.theme !== 'light' ? '#FAFAFA' : '#363537'
                    }, 1)
                }}>About</Button>
            </>
        )
    }
};

export default withRouter(ProjectModal);