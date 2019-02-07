import React, { Component } from 'react';
import FileIcon from './../icons/FileIcon'
import css from '../../styles/chat.css'

const FileMessage = (props) => {
    return (
        <a className={css["sc-message--file"]} href={props.data.url} download={props.data.fileName}>
            <FileIcon />
            <p>{props.data.fileName}</p>
        </a>
    )
}

export default FileMessage
