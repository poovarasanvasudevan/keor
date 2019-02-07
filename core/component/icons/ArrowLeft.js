import React from "react";
import Icon from '@atlaskit/icon';
import icon from '@mdi/svg/svg/arrow-left.svg'

const arrowLeft = () => (
    <svg width="24"
         height="24" viewBox="0 0 24 24">
        <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"/>
    </svg>
)

class ArrowLeftIcon extends React.Component {
    render() {
        return <Icon glyph={arrowLeft} {...this.props} label="Custom icon"/>;
    }
}

export default ArrowLeftIcon;