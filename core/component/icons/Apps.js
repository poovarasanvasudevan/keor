import React from "react";
import Icon from '@atlaskit/icon';
const customGlyph = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation">
        <g fill="currentColor" fillRule="evenodd">
            <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>
    </svg>
);

class AppsIcon extends React.Component {
    render() {
        return <Icon glyph={customGlyph} label="Custom icon" />;
    }
}

export default AppsIcon;