import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNews } from "../../../features/news.slice";
import style from "./News.module.css";

const AddNews = () => {
  const [photo, setPhoto] = useState("");
  const [preview, setPreview] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (photo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(photo);
    } else {
      setPreview(null);
    }
  }, [photo]);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  const saveForm = () => {
    dispatch(addNews({ photo, title, description }));
    alert("Новость добавлена!");
    setPhoto("");
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <div className={style.MainBox}>
        <div className={style.Position}>
          <div className={style.Flex}>
            <div className={style.FileUpload}>
              <div className={style.Image}>
                <input
                  type="file"
                  id="upload"
                  hidden
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file && file.type.substring(0, 5) === "image") {
                      setPhoto(file);
                    } else {
                      setPhoto(null);
                    }
                  }}
                />
                {preview ? (
                  <>
                    <img src={preview} alt="" />
                    <label htmlFor="upload">
                      <ion-icon name="create-outline"></ion-icon>Изменить
                    </label>
                  </>
                ) : (
                  <label htmlFor="upload">
                    <img
                      className={style.imageIcon}
                      src="https://www.babypillowth.com/images/templates/upload.png"
                      alt="img"
                    />
                  </label>
                )}
              </div>
            </div>
          </div>
          <div className={style.Details}>
            <div className={style.Title}>
              <h2>ДОБАВИТЬ НОВОСТЬ</h2>
            </div>
            <div className={style.Funcional}>
              {/* TITLE */}
              <div className={style.FuncionalInfo}>
                <h1>Заголовок</h1>
                <input
                  value={title}
                  onChange={(e) => handleTitle(e)}
                  type="text"
                  placeholder="Введите заголовок новости..."
                />
              </div>

              {/* DISCRIOTION */}
              <div className={style.FuncionalInfo}>
                <h1>Описание</h1>
                <textarea
                  value={description}
                  onChange={(e) => handleDescription(e)}
                  placeholder="Текст новости..."
                  name="text"
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div className={style.buttonPosition}>
              <button
                onClick={saveForm}
                variant="primary"
                className={style.buttonForm}
              >
                СОХРАНИТЬ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNews;
