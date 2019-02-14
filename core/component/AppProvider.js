import React from 'react'
import createDeepstream from 'deepstream.io-client-js';

const AppContext = React.createContext();

class AppProvider extends React.Component {

    state = {
        client: null
    };

    pushEvent = (eventName, data) => {
        this.state.client.event.emit(eventName, data);
    };
    subscribeEvent = (eventName, callback) => {
        this.state.client.event.subscribe(eventName, callback);
    };

    constructor(props) {
        super(props);
        this.ds = createDeepstream('localhost:6020');
        this.client = this.ds.login();
        console.log("Connected");
    }

    componentWillMount(): void {
        this.setState({
            client: this.client
        })
    }

    componentWillUnmount(): void {
        this.client.close();
        this.ds = null;
        this.client = null;
    }

    render(): React.ReactNode {
        return (
            <AppContext.Provider value={{
                obj: this.state,
                publish: this.pushEvent,
                subscribe: this.subscribeEvent
            }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

const AppConsumer = AppContext.Consumer;
export default AppProvider
export {AppConsumer}