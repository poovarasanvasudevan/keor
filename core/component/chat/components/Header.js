import React, { Component } from 'react';
import closeIcon from './../assets/close-icon.png';
import css from '../styles/chat.css'

class Header extends Component {

  render() {
    return (
      <div className={css["sc-header"]}>
        <img className={css["sc-header--img"]} src={this.props.imageUrl} alt="" />
        <div className={ css["sc-header--team-name"]}> {this.props.teamName} </div>
        <div className={css["sc-header--close-button"]} onClick={this.props.onClose}>
          <img src={closeIcon} alt="" />
        </div>
      </div>
    );
  }
}

export default Header;
