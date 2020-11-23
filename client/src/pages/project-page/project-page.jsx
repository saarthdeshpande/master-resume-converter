import React from "react";
import {withRouter} from 'react-router-dom'
import DetailedCard from "../../components/detailed-card/detailed-card.component";
import {Breadcrumb} from "react-bootstrap";
import { MdAddBox } from 'react-icons/md'

class ProjectPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }
    async componentDidMount() {
        await fetch('/api/project')
            .then(res => res.json())
            .then(projects => this.setState({ projects }))
    }
    render() {
        console.log(this.state)
        return (
            <>
                <Breadcrumb style={{marginBottom: '20px'}}>
                    <Breadcrumb.Item onClick={() => {
                        this.props.history.push('/home')
                    }}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Projects</Breadcrumb.Item>
                </Breadcrumb>
                <div align={'center'} >
                    {
                        this.state.projects.map(({ projectName, projectDomain, projectCompleted, projectTechStack, projectDescription, projectURL, _id }) => (
                            <DetailedCard key={_id} name={projectName} completed={projectCompleted} techStack={projectTechStack} domain={projectDomain} description={projectDescription} url={projectURL} />
                        ))
                    }
                </div>
                <MdAddBox style={{position: 'absolute', right: '2vw', bottom: '2vh'}} size={'100'} />
            </>
        )
    }
}

export default withRouter(ProjectPage);