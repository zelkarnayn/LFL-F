import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../../features/news.slice";
import { NavLink } from "react-router-dom";
import NewsCard from "./NewsCard";
import style from "./NewsGet.module.css";

export default function NewsGet() {
  const news = useSelector((state) => state.news.news);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  if (loading) {
    return <h3>....LOADIND</h3>;
  }
  if (error) {
    return <h3>ERROR:</h3>;
  }

  return (                
    <div className={style.newsPages}>
      <div className={style.header}>
        <div className={style.filter}>
          <NavLink to={'/news'} className={style.link}>Последние | </NavLink>
          <NavLink to={'/news'} className={style.link}>Обсуждаемые | </NavLink>
          <NavLink to={'/news'} className={style.link}>Популярные |</NavLink>
        </div>
      </div>
      <div className={style.outputNews}>
        {news.map((item, index) => <NewsCard {...item} key ={index}/>)}
      </div>
    </div>
  );
}
