import React from 'react'
import {MdMessage} from 'react-icons/md';
import styles from "./Button.module.css";

function Button() {
  return (
    <Button calssName = {styles.primary_btn}>
      <MdMessage />
      VIA SUPPORT CHAT
    </Button>
  )
}

export default Button
