import AppLayout from '../core/component/layout'
import {BreadcrumbsStateless, BreadcrumbsItem} from '@atlaskit/breadcrumbs';
import PageHeader from '@atlaskit/page-header';
import Router from 'next/router'
import React from 'react'

const breadcrumbs = (
    <BreadcrumbsStateless onExpand={() => {
    }}>
        <BreadcrumbsItem text="Home" key="Some project" onClick={() => Router.push("/home")}/>
        <BreadcrumbsItem text="Reports" key="Parent page" onClick={() => Router.push("/reports")}/>
    </BreadcrumbsStateless>
);

const Divider = () => (
    <div style={{borderBottom: "1px solid #eaeaea", marginTop: "8px"}}>
    </div>
);

const HeaderDiv = () => (
    <PageHeader breadcrumbs={breadcrumbs}>
        Reports & Papers
    </PageHeader>
);

export default () => (
    <AppLayout>
        <HeaderDiv/>
    </AppLayout>
)
