import React from 'react';
import classes from './Translate.module.scss';

function Translate() {
  return (
    <ul className={classes.translate}>
    <li>
      {i18n.language === "en" && (
        <button
        className={classes.translate_btn}
          onClick={() => {
            i18n.changeLanguage("ar");
          }}
        >
          ar
        </button>
      )}
      {i18n.language === "ar" && (
        <button
        className={classes.translate_btn}
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          en
        </button>
      )}
    </li>
  </ul>
  )
}

export default Translate