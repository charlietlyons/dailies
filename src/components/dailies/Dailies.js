import Daily from "../daily/Daily";
import { LOAD_DAILIES } from "../../reducers/Actions";
import styles from "./Dailies.module.css";
import usePads from "../common/hooks/usePads";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Percentage from "../percentage/Percentage";
import { Navigate } from "react-router-dom";

const Dailies = () => {
  const { retrieveDailies } = usePads();
  const dailies = useSelector((store) => { return store.dailies.dailies });
  const isLoggedIn = useSelector((store) => { return store.login.isLoggedIn })
  const dispatch = useDispatch();

  useEffect(() => {
    retrieveDailies((data) => {
      dispatch({
        type: LOAD_DAILIES,
        dailiesFromPads: data.dailies
      });
    });
  }, [retrieveDailies]);

  return (
    <>
      <Percentage />
      {isLoggedIn && (
        <section className={styles.dailiesContainer}>
        <ul className={styles.dailies}>
          {dailies.length > 0 &&
            dailies.map((daily, index) => {
              return (
                (
                  <li key={index}>
                    <Daily id={daily._id} title={daily.title}>
                      {daily.children ? daily.children : null}
                    </Daily>
                  </li>

                )
              );
            })}
        </ul>
      </section>
      ) }
      {!isLoggedIn && <Navigate to="/login" /> }
    </>
      
  );
};

export default Dailies;
