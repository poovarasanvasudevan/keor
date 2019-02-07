import React, { Component } from 'react'
import TextMessage from './TextMessage'
import EmojiMessage from './EmojiMessage'
import FileMessage from './FileMessage'
import chatIconUrl from './../../assets/chat-icon.png'
import css from '../../styles/chat.css'

class Message extends Component {

  _renderMessageOfType(type) {
    switch(type) {
      case 'text':
        return <TextMessage {...this.props.message} />
      case 'emoji':
        return <EmojiMessage {...this.props.message} />
      case 'file':
        return <FileMessage {...this.props.message} />
      default:
        console.error(`Attempting to load message with unsupported file type '${type}'`)
    }
  }

  render () {
    let contentClassList = [];
    return (
      <div className={css["sc-message"]}>
        <div className={[ css["sc-message--content"] , css[(this.props.message.author === "me" ? "sent" : "received")]].join(' ')}>
          <div className={css["sc-message--avatar"]} style={{
  backgroundImage: `url(${chatIconUrl})`
}}/>
          {this._renderMessageOfType(this.props.message.type)}
        </div>
      </div>)
  }
}

export default Message