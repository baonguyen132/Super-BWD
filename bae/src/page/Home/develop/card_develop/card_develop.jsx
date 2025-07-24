import { useState } from "react";
import styles from "./card_develop.module.scss";

function CardDevelop({ card }) {

    const [state , setState] = useState(false);

    const handClick = () => {
        setState(!state);
    }

  return (
    <div
      className={`card ${styles.card} ${card.animate}`}
      style={{ width: "20rem" }}
    >
      <img
        src={card.img}
        className={`card-img-top ${styles.card_img_top}`}
        alt="..."
      />
      <div className={`card-body ${styles.card_body}`}>
        <h5 className={`card-title ${styles.card_title}`}>{card.title}</h5>
        <p className={`card-text ${styles.card_text}`}>{card.text}</p>
        <div className={styles.card_button}>
          <button class={styles.glass_button} onClick={handClick}>
            <span>Yêu thích</span>
            <label htmlFor="heart" className={state ? styles.like : ""}>❤</label>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardDevelop;
