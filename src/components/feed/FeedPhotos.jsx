import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import styles from "./FeedPhotos.module.css";
import { useSelector } from "react-redux";

const FeedPhotos = () => {
  const { list } = useSelector((state) => state.feed);
  return (
    <div>
      <ul className={`${styles.feed} animeLeft`}>
        {list.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} />
        ))}
      </ul>
    </div>
  );
};

export default FeedPhotos;
