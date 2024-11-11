import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import Error from "../helpers/Error";
import Loading from "../helpers/Loading";
import styles from "./FeedPhotos.module.css";
import { useSelector } from "react-redux";

const FeedPhotos = ({ setModalPhoto }) => {
  const { list } = useSelector((state) => state.feed);
  return (
    <div>
      <ul className={`${styles.feed} animeLeft`}>
        {list.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    </div>
  );
};

export default FeedPhotos;
