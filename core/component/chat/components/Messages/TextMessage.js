import React, { Component } from 'react';
import Linkify from 'react-linkify';
import css from '../../styles/chat.css'

const TextMessage = (props) => {
  return <div className={css["sc-message--text"]}>{
    <Linkify properties={{ target: '_blank' }}>{props.data.text}</Linkify>
  }</div>
}

export default TextMessage
