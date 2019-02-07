import React from "react";
import Icon from '@atlaskit/icon';

const plus = () => (
    <svg width="24"
         height="24" viewBox="0 0 24 24">
        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
    </svg>
);

class AddIcon extends React.Component {
    render() {
        return <Icon glyph={plus} label="Custom icon"/>;
    }
}

export default AddIcon;