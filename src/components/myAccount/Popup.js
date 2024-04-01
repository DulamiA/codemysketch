import React from "react";
import styles from "./myAccount.module.css";
import CancelIcon from '@material-ui/icons/Cancel';

const Popup = props => {
  return (
    <div className={styles.popupBox}>
      <div className={styles.box}>
        <CancelIcon className={styles.closeIcon} onClick={props.handleClose} color="primary" />
        {props.content}
      </div>
    </div>
  );
};

export default Popup;