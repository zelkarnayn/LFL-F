import React from "react";
import { Link } from "react-router-dom";
import style from "../GetNews/NewsGet.module.css";

export default function NewsCard({ image, title, _id }) {
  return (
    <div className={style.card}>
      <Link to={`/news/${_id}`} className={style.alink}>
        <div className={style.cardNews}>
          <img
            width={"100%"}
            src={`http://mysite.na4u.ru/${image}`}
            alt="news-ima"
            className={style.image}
          />
          <div className={style.title}>{title}</div>
        </div>
      </Link>
    </div>
  );
}
