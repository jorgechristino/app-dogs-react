import React from "react";
import Error from "../helpers/Error";
import Loading from "../helpers/Loading";
import PhotoContent from "../photo/PhotoContent";
import styles from "./FeedModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../../store/photo";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, loading, error } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhoto(photo.id));
  }, [dispatch, photo]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
