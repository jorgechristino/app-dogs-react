import React from "react";
import Error from "../helpers/Error";
import Loading from "../helpers/Loading";
import PhotoContent from "../photo/PhotoContent";
import styles from "./FeedModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/ui";

const FeedModal = () => {
  const { data, loading, error } = useSelector((state) => state.photo);
  const { modal } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) dispatch(closeModal());
  }

  React.useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);

  if (!modal) return null;
  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
