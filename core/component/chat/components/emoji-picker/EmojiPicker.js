import React, { Component } from 'react';
import EmojiConvertor from 'emoji-js';
import emojiData from './emojiData';
import css from '../../styles/chat.css'

const emojiConvertor = new EmojiConvertor();
emojiConvertor.init_env();

export default ({ onEmojiPicked, filter }) => (
<div className={css["sc-emoji-picker"]}>
  {emojiData.map((category) => {
    const filteredEmojis = category.emojis.filter(({ name }) => name.includes(filter));
    return (
      <div className={css["sc-emoji-picker--category"]} key={category.name}>
        {
          filteredEmojis.length > 0 &&
          <div className={css["sc-emoji-picker--category-title"]}>{category.name}</div>
        }
        {filteredEmojis.map(({ char, name }) => {
          return (
            <span
              key={char}
              className={css["sc-emoji-picker--emoji"]}
              onClick={() => onEmojiPicked(char)}
            >
              {char}
            </span>
          );
        })}
      </div>
    );
  })}
</div>
);
