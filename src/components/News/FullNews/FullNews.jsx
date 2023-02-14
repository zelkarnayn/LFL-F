import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./NewsFull.module.css";
import { useParams } from "react-router-dom";
import { getNews } from "../../../features/news.slice";


function NewsFull() {
  const { id } = useParams();

  const news = useSelector((state) => state.news.news).find(
    (item) => item._id === id
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews);
  }, [dispatch]);

  if (!news) {
    return "Loading...";
  }

  return (
    <div className={style.newsFull}>
      <div>
        <h1>{news.title}</h1>
          <img
            src={`http://mysite.na4u.ru/${news.image}`}
            alt=""
            width={"500px"}
            className={style.image}
          />
        <div className={style.text}>
          <span>{news.text}</span>
        </div>
      </div>
    </div>
  );
}

export default NewsFull;
