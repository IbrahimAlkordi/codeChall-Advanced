import React from "react";
import classes from "./Welcome.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Translate from "../../molecules/Translate/Translate";

function Welcome() {
  const [t, i18n] = useTranslation();
  return (
    <header className={classes.header}>

      <Translate></Translate>
      {/* <ul className={classes.translate}>
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
      </ul> */}

      <div className={classes.header_text_box}>
        <h1 className={classes.heading_primary}>
          <span className={classes.heading_primary_main}>{t("welcome")}</span>
          <span className={classes.heading_primary_sub}>
            {t("to our website")}
          </span>
        </h1>

        <Link
          to="/Login"
          className={`${classes.btn}  ${classes.btn_white} ${classes.btn_animated} `}
        >
          {t("discover")}
        </Link>
      </div>
    </header>
  );
}

export default Welcome;
