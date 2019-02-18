import AppLayout from '../core/component/layout'
import {BreadcrumbsStateless, BreadcrumbsItem} from '@atlaskit/breadcrumbs';
import PageHeader from '@atlaskit/page-header';
import Router from 'next/router'
import React from 'react'
import {CustomDropdownItem, DropdownContainer, NormalButton} from "../core/component/utils";
import DropdownMenu from "@atlaskit/dropdown-menu";
import AddIcon from "../core/component/icons/Add";
import Modal, {ModalTransition} from '@atlaskit/modal-dialog';
import {withContext} from "../core/component/context";

import TextField from '@atlaskit/textfield';
import TextArea from '@atlaskit/textarea';
import Button, {ButtonGroup} from '@atlaskit/button';
import {Checkbox} from '@atlaskit/checkbox';
import Form, {
    CheckboxField,
    Field,
    FormFooter,
    HelperMessage,
    ErrorMessage,
    Fieldset,
    ValidMessage,

} from '@atlaskit/form';

const Divider = () => (
    <div style={{borderBottom: "1px solid #eaeaea", marginTop: "8px"}}>
    </div>
);

class ApplicationPage extends React.Component {

    state = {
        isTableModelOpen: false,
        isFunctionModelOpen: false,
    };

    tableModelOpen = () => this.setState({isTableModelOpen: true});
    tableModelClose = () => this.setState({isTableModelOpen: false});


    functionModelOpen = () => this.setState({isFunctionModelOpen: true});
    functionModelClose = () => this.setState({isFunctionModelOpen: false});


    tableModelAction = [
        {text: 'Save'},
        {text: 'Close', onClick: this.tableModelClose},
    ];

    functionModelAction = [
        {text: 'Save'},
        {text: 'Close', onClick: this.functionModelClose},
    ];


    breadcrumbs = (
        <BreadcrumbsStateless onExpand={() => {
        }}>
            <BreadcrumbsItem text="Home" key="Some project" onClick={() => Router.push("/")}/>
            <BreadcrumbsItem text="Applications" key="Parent page" onClick={() => Router.push("/applications")}/>
        </BreadcrumbsStateless>
    );

    actionContent = (
        <DropdownMenu
            trigger="New"
            triggerType="button"
            shouldFlip={false}
            position="bottom right"
            onOpenChange={e => console.log('dropdown opened', e)}>

            <DropdownContainer>
                <CustomDropdownItem onClick={this.tableModelOpen}>Table</CustomDropdownItem>
                <CustomDropdownItem onClick={this.functionModelOpen}>Function</CustomDropdownItem>
                <CustomDropdownItem>Trigger</CustomDropdownItem>
                <CustomDropdownItem>Endpoint</CustomDropdownItem>
            </DropdownContainer>
        </DropdownMenu>
    )

    createTable = (data) => {

    };


    render(): React.ReactNode {
        return (
            <AppLayout>
                <PageHeader breadcrumbs={this.breadcrumbs} actions={this.actionContent}>
                    Applications & Triggers
                </PageHeader>


                <ModalTransition>
                    {this.state.isTableModelOpen && (
                        <Modal actions={this.tableModelAction}
                               onClose={this.close} heading="New Table">
                            <div>
                                <Form onSubmit={this.createTable}>
                                    {({formProps, submitting}) => (
                                        <form {...formProps}>
                                            <Field name="tablename" label="Table Name" isRequired defaultValue="">
                                                {({fieldProps, error}) => (
                                                    <React.Fragment>
                                                        <TextField autoComplete="off" {...fieldProps} />
                                                        {!error && (
                                                            <HelperMessage>
                                                                You can use letters, numbers
                                                            </HelperMessage>
                                                        )}
                                                        {error && (
                                                            <ErrorMessage>
                                                                This Table name is already in use, try another one.
                                                            </ErrorMessage>
                                                        )}
                                                    </React.Fragment>
                                                )}
                                            </Field>

                                            <Field name="tableDescription" label="Table Description" isRequired
                                                   defaultValue="">
                                                {({fieldProps, error}) => (
                                                    <React.Fragment>
                                                        <TextArea autoComplete="off" {...fieldProps} />
                                                    </React.Fragment>
                                                )}
                                            </Field>

                                            <Fieldset legend="Properies & Attributes">
                                                <CheckboxField name="properties" value="audit">
                                                    {({fieldProps}) => <Checkbox {...fieldProps} label="Audit"/>}
                                                </CheckboxField>
                                                <CheckboxField name="properties" value="backup">
                                                    {({fieldProps}) => (
                                                        <Checkbox {...fieldProps} label="Backup"/>
                                                    )}
                                                </CheckboxField>
                                            </Fieldset>
                                        </form>
                                    )}
                                </Form>

                            </div>
                        </Modal>
                    )}


                    {this.state.isFunctionModelOpen && (
                        <Modal actions={this.functionModelAction}
                               onClose={this.close} heading="New Function">
                            <div>
                                <Form onSubmit={this.createTable}>
                                    {({formProps, submitting}) => (
                                        <form {...formProps}>
                                            <Field name="functionname" label="Function Name" isRequired defaultValue="">
                                                {({fieldProps, error}) => (
                                                    <React.Fragment>
                                                        <TextField autoComplete="off" {...fieldProps} />
                                                        {!error && (
                                                            <HelperMessage>
                                                                You can use letters, numbers
                                                            </HelperMessage>
                                                        )}
                                                        {error && (
                                                            <ErrorMessage>
                                                                This Funcion name is already in use, try another one.
                                                            </ErrorMessage>
                                                        )}
                                                    </React.Fragment>
                                                )}
                                            </Field>

                                            <Field name="functionDescription" label="Function Description" isRequired
                                                   defaultValue="">
                                                {({fieldProps, error}) => (
                                                    <React.Fragment>
                                                        <TextArea autoComplete="off" {...fieldProps} />
                                                    </React.Fragment>
                                                )}
                                            </Field>

                                            <Fieldset legend="Properies & Attributes">
                                                <CheckboxField name="properties" value="audit">
                                                    {({fieldProps}) => <Checkbox {...fieldProps} label="Audit"/>}
                                                </CheckboxField>
                                                <CheckboxField name="properties" value="backup">
                                                    {({fieldProps}) => (
                                                        <Checkbox {...fieldProps} label="Backup"/>
                                                    )}
                                                </CheckboxField>
                                                <CheckboxField name="properties" value="secure">
                                                    {({fieldProps}) => (
                                                        <Checkbox {...fieldProps} label="Secure"/>
                                                    )}
                                                </CheckboxField>
                                            </Fieldset>
                                        </form>
                                    )}
                                </Form>

                            </div>
                        </Modal>
                    )}

                </ModalTransition>

            </AppLayout>
        )
    }
}

export default withContext(ApplicationPage)