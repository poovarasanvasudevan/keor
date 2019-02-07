import AppLayout from '../core/component/layout'
import {BreadcrumbsStateless, BreadcrumbsItem} from '@atlaskit/breadcrumbs';
import PageHeader from '@atlaskit/page-header';
import Router from 'next/router'
import React from 'react'

const breadcrumbs = (
    <BreadcrumbsStateless onExpand={() => {
    }}>
        <BreadcrumbsItem text="Home" key="Some project" onClick={() => Router.push("/")}/>
        <BreadcrumbsItem text="Data Store" key="Parent page" onClick={() => Router.push("/database")}/>
    </BreadcrumbsStateless>
);


const HeaderDiv = () => (
    <PageHeader breadcrumbs={breadcrumbs}>
        Data Store & Metrics
    </PageHeader>
);


export default () => (
    <AppLayout>
        <HeaderDiv/>

    </AppLayout>
)
