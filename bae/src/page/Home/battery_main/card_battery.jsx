import styles from "./card_battery.module.scss"

function CardBattery({element , value}) {

  return (
    <div className={styles.battery}>
      {/* 1. Điểm thưởng */}
      <div className={styles.child_img_battery}>
        <span>{element.point}</span>
      </div>

      {/* 2. Hình ảnh */}
      <div className={styles.img_battery}>
        <img
          src={`http://127.0.0.1:8000/storage/image/Battery/${element.image}.jpg`}
          alt={element.name_battery}
        />
      </div>

      {/* 3. Thông tin */}
      <div className={styles.infor_battery}>
        <div className={styles.infor_battery_content}>
          <span className={styles.name_battery}>{element.name_battery}</span>
          <ul>
            <li>
              <b>Size: </b> {element.size}
            </li>
            <li>
              <b>Shape: </b> {element.shape}
            </li>
          </ul>

          <div className={styles.number_battery}>
            <div>
              <label htmlFor={`count_${element.id}`}>Số lượng:&nbsp;</label>
              <input
                type="number"
                id={`count_${element.id}`}
                name={`count_${element.id}`}
                value={value}
                min="0"
                max="100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBattery;
