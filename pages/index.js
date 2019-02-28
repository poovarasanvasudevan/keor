import grid from '../static/grid.css'
import React from 'react'

import TextField from '@atlaskit/textfield';
import Button, {ButtonGroup} from '@atlaskit/button';
import {Checkbox} from '@atlaskit/checkbox';
import Form, {
    CheckboxField,
    Field,
    FormFooter,
    HelperMessage,
    ErrorMessage,
    ValidMessage,
} from '@atlaskit/form';
import {PrimaryButton} from "../core/component/utils";
import axios from 'axios';
import Router from 'next/router'

export default class Login extends React.Component {

    state = {
        winheight: 0
    };

    updateDimensions = () => {
        this.setState({
            winheight: window.innerHeight
        })
    };

    componentDidMount(): void {
        this.setState({
            winheight: window.innerHeight
        })
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount(): void {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {
        return (
            <div style={{height: this.state.winheight + `px`}}>
                <div className={grid['col-md-8']} style={{height: '100%', borderRight: "1px solid #eaeaea"}}>1/4</div>
                <div className={grid['col-md-4']} style={{height: '100%', padding: "20px"}}>
                    <div className={[grid['col-md-8'], grid['col-md-offset-2']].join(' ')} style={{marginTop: '35%'}}>

                        <Form
                            onSubmit={data => {
                                console.log('form data', data);

                                return axios.post('/authenticate', {
                                    username: data.susername,
                                    password: data.spassword
                                }).then(function (response) {

                                    if(response.data.userInfo && response.data.userInfo.sessionToken) {
                                        localStorage.setItem("loginResponse", JSON.stringify(response.data));
                                        localStorage.setItem("sessionToken", response.data.userInfo.sessionToken)
                                        //console.log(response.data);
                                        Router.push('/home')
                                    }

                                }).catch(function (error) {
                                    console.log(error);
                                });
                            }}
                        >
                            {({formProps, submitting}) => (
                                <form {...formProps}>
                                    <Field name="susername" defaultValue="" label="Username" isRequired>
                                        {({fieldProps}) => <TextField {...fieldProps} />}
                                    </Field>

                                    <Field name="spassword" defaultValue="" label="Password" isRequired>
                                        {({fieldProps}) => <TextField type="password" {...fieldProps} />}
                                    </Field>
                                    <CheckboxField name="remember" defaultIsChecked>
                                        {({fieldProps}) => (
                                            <Checkbox {...fieldProps} label="Remember me"/>
                                        )}
                                    </CheckboxField>
                                    <FormFooter>
                                        <ButtonGroup>
                                            <PrimaryButton type="submit" appearance="primary" isLoading={submitting}>
                                                Login
                                            </PrimaryButton>
                                        </ButtonGroup>
                                    </FormFooter>
                                </form>
                            )}
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
