import AppLayout from '../core/component/layout'
import {BreadcrumbsStateless, BreadcrumbsItem} from '@atlaskit/breadcrumbs';
import PageHeader from '@atlaskit/page-header';
import Router from 'next/router'
import React from 'react'

const breadcrumbs = (
    <BreadcrumbsStateless onExpand={() => {}}>
        <BreadcrumbsItem text="Home" key="Some project" onClick={() => Router.push("/home")}/>
        <BreadcrumbsItem text="Approval" key="Parent page" onClick={() => Router.push("/approval")}/>
    </BreadcrumbsStateless>
);

const Divider = () => (
    <div style={{borderBottom: "1px solid #eaeaea", marginTop: "8px"}}>
    </div>
);

const HeaderDiv = () => (
    <PageHeader breadcrumbs={breadcrumbs}>
        All Approval
    </PageHeader>
);


export default () => (
    <AppLayout>
        <HeaderDiv/>
    </AppLayout>
)
