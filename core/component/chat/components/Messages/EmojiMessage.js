import React, { Component } from 'react'
import css from '../../styles/chat.css'

const EmojiMessage = (props) => {
  return <div className={css["sc-message--emoji"]}>{props.data.emoji}</div>
}

export default EmojiMessage