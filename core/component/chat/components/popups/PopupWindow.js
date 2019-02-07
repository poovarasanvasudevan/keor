import React, { Component } from 'react';
import css from '../../styles/chat.css'

class PopupWindow extends Component {

  componentDidMount() {
    this.scLauncher = document.querySelector('#sc-launcher');
    this.scLauncher.addEventListener('click', this.interceptLauncherClick);
  }

  componentWillUnmount() {
    this.scLauncher.removeEventListener('click',this.interceptLauncherClick);
  }

  interceptLauncherClick = (e) => {
    const { isOpen } = this.props;
    const clickedOutside = !this.emojiPopup.contains(e.target) && isOpen;
    clickedOutside && this.props.onClickedOutside(e);
  };

  render() {
    const { isOpen, children } = this.props;
    return (
      <div className={css["sc-popup-window"]} ref={e => this.emojiPopup = e}>
        <div className={ [ css['sc-popup-window--cointainer'] , css[`${isOpen ? '' : 'closed'}`]].join(' ')}>
          <input
            onChange={this.props.onInputChange}
            className= { css["sc-popup-window--search"]}
            placeholder="Search emoji..."
          />
          {children}
        </div>
      </div>
    )
  }
}

export default PopupWindow;