import React from 'react'
import App, {Container} from 'next/app'
import Head from 'next/head'
import Launcher from "../core/component/chat/components/Launcher";

class Layout extends React.Component {

    state = {
        messageList: []
    };

    _onMessageWasSent = (message) => {
        this.setState({
            messageList: [...this.state.messageList, message]
        })
    };

    _sendMessage = (text) => {
        if (text.length > 0) {
            this.setState({
                messageList: [...this.state.messageList, {
                    author: 'them',
                    type: 'text',
                    data: { text }
                }]
            })
        }
    };
    render() {
        const {children} = this.props;
        return <div className='layout'>
            {children}

            <Launcher
                agentProfile={{
                    teamName: 'Carebot',
                    imageUrl: '/static/img/bot.png'
                }}
                onMessageWasSent={this._onMessageWasSent.bind(this)}
                messageList={this.state.messageList}
                showEmoji
            />
        </div>
    }
}

export default class MyApp extends App {
    render() {
        const {Component, pageProps} = this.props;
        return <Container>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Barlow" rel="stylesheet" />
                <link rel="stylesheet" href="/static/app.css" />
                <script src='/static/js/polyfills.js'></script>

                <title>Service Focus</title>

                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Container>
    }
}