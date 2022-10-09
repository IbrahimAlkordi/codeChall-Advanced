import React from "react";
import { useSelector } from "react-redux";
import Highlighter from "react-highlight-words";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { useTranslation } from "react-i18next";
import classes from "./ArticleItem.module.scss";
import Moment from 'react-moment';
import 'moment-timezone';

const Article = ({ abstract, lead_paragraph,image }) => {
  const { searchInput } = useSelector((state) => state.article);
  const [t] = useTranslation();
  const dateToFormat = '1976-04-19T12:59-0500';
  

  if (abstract && lead_paragraph) {
    return (
      <div className={classes.card}>
        <div className={classes.imgParent}>
          <img
            className={classes.compImg}
            src={image}
            alt="articles "
          ></img>
        </div>
        <div className={classes.impDetails}>
          <h2 className={classes.impDetails__h2}>{t('Title')}</h2>

          <Highlighter
            searchWords={[searchInput]}
            autoEscape={true}
            textToHighlight={abstract}
          />
          <h3 className={classes.impDetails__h3}>{t("Description")}</h3>
          <ReactReadMoreReadLess
            charLimit={200}
            readMoreText= {"Read more ▼"}
            readLessText={"Read less ▲"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
          >
            {lead_paragraph}
          </ReactReadMoreReadLess>
          <Moment element="span">{dateToFormat}</Moment>
        </div>
       
      </div>
    );
  }

  return null;
};
export default Article;
