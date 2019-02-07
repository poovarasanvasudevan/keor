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
                    <div className={[grid['col-md-8'] , grid['col-md-offset-2']].join(' ')} style={{ marginTop: '35%'}}>

                        <Form
                            onSubmit={data => {
                                console.log('form data', data);
                                return new Promise(resolve => setTimeout(resolve, 2000)).then(() =>
                                    data.username === 'error' ? {username: 'IN_USE'} : undefined,
                                );
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
                                            <Button type="submit" appearance="primary" isLoading={submitting}>
                                                Login
                                            </Button>
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
