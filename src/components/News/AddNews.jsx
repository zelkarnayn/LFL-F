import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNews } from "../../features/news.slice";
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

  console.log(process.env.BACK_URL);

  return (
    <>
      <div className={style.createSheltersMainBox}>
        <div className={style.createSheltersPosition}>
          <div className={style.createSheltersFlex}>
            <div className={style.createSheltersFileUpload}>
              <div className={style.createSheltersImage}>
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
          <div className={style.createSheltersDetails}>
            <div className={style.createSheltersTitle}>
              <span>Добавить новость</span>
            </div>
            <div className={style.createSheltersFuncional}>
              {/* TITLE */}
              <div className={style.createSheltersFuncionalInfo}>
                <h6>Заголовок</h6>
                <input
                  value={title}
                  onChange={(e) => handleTitle(e)}
                  type="text"
                  placeholder="Введите заголовок новости..."
                />
              </div>

              {/* DISCRIOTION */}
              <div className={style.createSheltersFuncionalInfo}>
                <h6>Описание</h6>
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
            <div className={style.buttonPositionCreateShelters}>
              <button
                onClick={saveForm}
                variant="primary"
                className={style.buttonForm}
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNews;
