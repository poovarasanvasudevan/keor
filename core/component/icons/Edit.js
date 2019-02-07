import React from "react";
import Icon from '@atlaskit/icon';

const edit = () => (
    <svg version="1.1" width="24"
         height="24" viewBox="0 0 24 24">
        <path
            d="M20.04,12.13C19.9,12.13 19.76,12.19 19.65,12.3L18.65,13.3L20.7,15.35L21.7,14.35C21.92,14.14 21.92,13.79 21.7,13.58L20.42,12.3C20.31,12.19 20.18,12.13 20.04,12.13M18.07,13.88L12,19.94V22H14.06L20.12,15.93L18.07,13.88M10,19L11,18C9.9,18 9,17.1 9,16C9,14.9 9.9,14 11,14C12.1,14 13,14.9 13,16L14.64,14.36C14,12.97 12.62,12 11,12C8.79,12 7,13.79 7,16C7,17.19 7.5,18.27 8.35,19H4V9H14V5H15.17L18,7.83V11L20,9V7L16,3H4C2.9,3 2,3.9 2,5V19C2,20.1 2.9,21 4,21H10V19M4,5H12V7H4V5Z"/>
    </svg>
)

class EditIcon extends React.Component {
    render() {
        return <Icon glyph={edit} label="Custom icon"/>;
    }
}

export default EditIcon;