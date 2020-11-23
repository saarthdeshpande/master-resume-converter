import React from "react";
import { withRouter } from 'react-router-dom'
import DetailedCard from "../../components/detailed-card/detailed-card.component";
import {Breadcrumb} from "react-bootstrap";
import {MdAddBox} from "react-icons/md";

const EducationPage = (props) => {
    return (
        <>
            <Breadcrumb style={{marginBottom: '20px'}}>
                <Breadcrumb.Item onClick={() => {
                    props.history.push('/home')
                }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Education</Breadcrumb.Item>
            </Breadcrumb>
            <div align={'center'} >
                <DetailedCard name={'SudoLMS'} completed={true} techStack={['NodeJS', 'ReactJS']} domain={['Web Development', 'Full Stack Web']} description={'SUDO Desc'} url={'https://sudolms.in/'} />
                <DetailedCard name={'GRE Verbal Prep'} completed={false} techStack={[]} domain={['Web Development', 'Full Stack Web']} description={'GRE Desc'} />
                <DetailedCard name={'PICT Attendance Bot'} completed={true} techStack={[]} domain={['Web Development', 'Full Stack Web']} description={'PICT Desc'} />
            </div>
            <MdAddBox style={{position: 'absolute', right: '2vw', bottom: '2vh'}} size={'100'} />
        </>
    )
}

export default withRouter(EducationPage);