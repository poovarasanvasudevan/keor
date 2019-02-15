import React from "react";
import Icon from '@atlaskit/icon';

const report = () => (
    <svg width="24"
         height="24" viewBox="0 0 24 24">
        <path d="M14,10V4.5L19.5,10M5,3C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V9L15,3H5Z"/>
    </svg>
)

class ReportIcon extends React.Component {
    render() {
        return <Icon glyph={report} label="Custom icon"/>;
    }
}

export default ReportIcon;