import OneLineCard from "../../components/one-line-card/one-line-card.component";
import React from "react";
import {Breadcrumb} from "react-bootstrap";

const HomePage = () => {
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="/home" active>Home</Breadcrumb.Item>
            </Breadcrumb>
            <div align={'center'}>
                <OneLineCard category={'Experience'} />
                <OneLineCard category={'Projects'} />
                <OneLineCard category={'Education'} />
            </div>
        </>
    )
}

export default HomePage;