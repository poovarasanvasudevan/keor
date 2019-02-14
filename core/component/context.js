import React from 'react';
import {AppConsumer} from "./AppProvider";

export function withContext(Component) {
    return class extends React.Component {
        render(): React.ReactNode {
            return (
                <AppConsumer>
                    {context => <Component context={context}/>}
                </AppConsumer>
            )
        }
    }
}