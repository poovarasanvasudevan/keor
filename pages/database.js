import AppLayout from '../core/component/layout'
import {BreadcrumbsStateless, BreadcrumbsItem} from '@atlaskit/breadcrumbs';
import PageHeader from '@atlaskit/page-header';
import Router from 'next/router'
import React from 'react'

import Dropdown, {
    DropdownItemCheckbox,
    DropdownItemGroupCheckbox,
    DropdownItemRadio,
    DropdownItemGroupRadio,
} from '@atlaskit/dropdown-menu';
import styled from "styled-components";


const DropdownCheckboxContainer = styled(DropdownItemCheckbox)`
    text-align : left !important;
    font-family: 'Work Sans', sans-serif;
`;
const DropdownCheckboxItemContainer = styled(DropdownItemGroupCheckbox)`
    text-align : left !important;
    font-family: 'Work Sans', sans-serif;
`;

const actionContent = (
    <Dropdown trigger="Diagram" triggerType="button"  position="bottom right">
        <DropdownCheckboxItemContainer id="Diagram2">
            <DropdownCheckboxContainer id="dbQuery">DB Query</DropdownCheckboxContainer>
            <DropdownCheckboxContainer id="executionGraph">Execution Graph</DropdownCheckboxContainer>
            <DropdownCheckboxContainer id="timedQuery">Timed Query</DropdownCheckboxContainer>
            <DropdownCheckboxContainer id="openedConnection">Open Connections</DropdownCheckboxContainer>
        </DropdownCheckboxItemContainer>
    </Dropdown>
);

const breadcrumbs = (
    <BreadcrumbsStateless onExpand={() => {}}>
        <BreadcrumbsItem text="Home" key="Some project" onClick={() => Router.push("/")}/>
        <BreadcrumbsItem text="Data Store" key="Parent page" onClick={() => Router.push("/database")}/>
    </BreadcrumbsStateless>
);


const HeaderDiv = () => (
    <PageHeader breadcrumbs={breadcrumbs} actions={actionContent}>
        Data Store & Metrics
    </PageHeader>
);


export default () => (
    <AppLayout>
        <HeaderDiv/>

    </AppLayout>
)
