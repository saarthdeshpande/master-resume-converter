import React from "react";
import { withRouter } from 'react-router-dom'
import DetailedCard from "../../components/detailed-card/detailed-card.component";
import {Breadcrumb} from "react-bootstrap";

const ExperiencePage = (props) => {
    return (
        <>
            <Breadcrumb style={{marginBottom: '20px'}}>
                <Breadcrumb.Item onClick={() => {
                    props.history.push('/home')
                }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Experience</Breadcrumb.Item>
            </Breadcrumb>
            <div align={'center'} >
                <DetailedCard name={'SudoLMS'} completed={true} techStack={['NodeJS', 'ReactJS']} domain={['Web Development', 'Full Stack Web']} description={'SUDO Desc'} url={'https://sudolms.in/'} />
                <DetailedCard name={'GRE Verbal Prep'} completed={false} techStack={[]} domain={['Web Development', 'Full Stack Web']} description={'GRE Desc'} />
                <DetailedCard name={'PICT Attendance Bot'} completed={true} techStack={[]} domain={['Web Development', 'Full Stack Web']} description={'PICT Desc'} />
            </div>
        </>
    )
}

export default withRouter(ExperiencePage);