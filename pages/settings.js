import AppLayout from '../core/component/layout'
import {BreadcrumbsStateless, BreadcrumbsItem} from '@atlaskit/breadcrumbs';
import PageHeader from '@atlaskit/page-header';
import Router from 'next/router'
import Button, {ButtonGroup} from '@atlaskit/button';

import {Checkbox} from '@atlaskit/checkbox';
import {RadioGroup} from '@atlaskit/radio';
import Form, {Field, CheckboxField, FormFooter, Fieldset} from '@atlaskit/form';
import EditIcon from "../core/component/icons/Edit";
import {PrimaryButton, WarningButton, NormalButton} from "../core/component/utils";
import React from "react";
import styled from "styled-components";
import {withContext} from "../core/component/context";

const actionsContent = (
    <ButtonGroup>
        <WarningButton>Edit</WarningButton>
        <PrimaryButton>Save</PrimaryButton>
        <PrimaryButton>Refresh</PrimaryButton>
        <NormalButton>...</NormalButton>
    </ButtonGroup>
);
const breadcrumbs = (
    <BreadcrumbsStateless onExpand={() => {
    }}>
        <BreadcrumbsItem text="Home" key="Some project" onClick={() => Router.push("/")}/>
        <BreadcrumbsItem text="Application Settings" key="Parent page" onClick={() => Router.push("/settings")}/>
    </BreadcrumbsStateless>
);

const HeaderDiv = () => (
    <PageHeader breadcrumbs={breadcrumbs} actions={actionsContent}>Application Settings</PageHeader>
);


const CustomFieldset = styled(Fieldset)`
    padding : 20px;
`;


class SettingsPage extends React.Component {

    componentDidMount(): void {
        console.log(this.props.context);

        this.props.context.subscribe('test', this.testData.bind(this));
        this.props.context.publish('test', "testdata");
    }

    testData = (data) => {
        console.log(data)
    };

    render(): React.ReactNode {
        return (
            <AppLayout>
                <HeaderDiv/>
                <Form onSubmit={data => console.log(data)}>
                    {({formProps}) => (
                        <form {...formProps}>
                            <CustomFieldset legend="Notifications">
                                <CheckboxField name="notifications" value="APPROVAL">
                                    {({fieldProps}) => <Checkbox {...fieldProps}
                                                                 label="Approval Notifications"/>}
                                </CheckboxField>
                                <CheckboxField name="notifications" value="MEMORY">
                                    {({fieldProps}) => (
                                        <Checkbox {...fieldProps} label="Memory Notifications"/>
                                    )}
                                </CheckboxField>
                                <CheckboxField name="notifications" value="LOGS">
                                    {({fieldProps}) => (
                                        <Checkbox {...fieldProps} label="System Logs"/>
                                    )}
                                </CheckboxField>
                            </CustomFieldset>
                        </form>
                    )}
                </Form>
            </AppLayout>
        )
    }
}


export default withContext(SettingsPage)
