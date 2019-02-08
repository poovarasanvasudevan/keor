import AppLayout from '../core/component/layout'
import {BreadcrumbsStateless, BreadcrumbsItem} from '@atlaskit/breadcrumbs';
import PageHeader from '@atlaskit/page-header';
import Router from 'next/router'
import Button, {ButtonGroup} from '@atlaskit/button';

import {Checkbox} from '@atlaskit/checkbox';
import {RadioGroup} from '@atlaskit/radio';
import Form, {Field, CheckboxField, FormFooter, Fieldset} from '@atlaskit/form';
import EditIcon from "../core/component/icons/Edit";
import {SFButton} from "../core/component/utils";

const actionsContent = (
    <ButtonGroup>
        <SFButton warning>Edit</SFButton>
        <SFButton primary>Save</SFButton>
        <SFButton primary>Refresh</SFButton>
        <Button>...</Button>
    </ButtonGroup>
);
const breadcrumbs = (
    <BreadcrumbsStateless onExpand={() => {}}>
        <BreadcrumbsItem text="Home" key="Some project" onClick={() => Router.push("/")}/>
        <BreadcrumbsItem text="Application Settings" key="Parent page" onClick={() => Router.push("/settings")}/>
    </BreadcrumbsStateless>
);

const HeaderDiv = () => (
    <PageHeader breadcrumbs={breadcrumbs} actions={actionsContent}>
        Application Settings
    </PageHeader>
);


export default () => (
    <AppLayout>
        <HeaderDiv/>
        <Form onSubmit={data => console.log(data)}>
            {({formProps}) => (
                <form {...formProps}>
                    <Fieldset legend="Notifications">
                        <CheckboxField name="notifications" value="APPROVAL">
                            {({fieldProps}) => <Checkbox {...fieldProps} label="Approval Notifications"/>}
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
                    </Fieldset>

                </form>
            )}
        </Form>
    </AppLayout>
)
