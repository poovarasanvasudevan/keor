import AppLayout from '../core/component/layout'
import {BreadcrumbsStateless, BreadcrumbsItem} from '@atlaskit/breadcrumbs';
import PageHeader from '@atlaskit/page-header';
import Router from 'next/router'
import React from 'react'
import {DropdownCheckboxContainer, DropdownCheckboxItemContainer} from '../core/component/utils'

import Dropdown, {
    DropdownItemCheckbox,
    DropdownItemGroupCheckbox,
    DropdownItemRadio,
    DropdownItemGroupRadio,
} from '@atlaskit/dropdown-menu';
import styled from "styled-components";


const actionContent = (
    <Dropdown trigger="Diagram" triggerType="button" position="bottom right">
        <DropdownCheckboxItemContainer id="Diagram2">
            <DropdownCheckboxContainer id="dbQuery">DB Query</DropdownCheckboxContainer>
            <DropdownCheckboxContainer id="executionGraph">Execution Graph</DropdownCheckboxContainer>
            <DropdownCheckboxContainer id="timedQuery">Timed Query</DropdownCheckboxContainer>
            <DropdownCheckboxContainer id="openedConnection">Open Connections</DropdownCheckboxContainer>
        </DropdownCheckboxItemContainer>
    </Dropdown>
);

const breadcrumbs = (
    <BreadcrumbsStateless onExpand={() => {
    }}>
        <BreadcrumbsItem text="Home" key="Some project" onClick={() => Router.push("/home")}/>
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
