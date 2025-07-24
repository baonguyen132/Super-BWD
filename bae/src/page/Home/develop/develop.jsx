import React, { useEffect, useState } from "react";
import styles from "./develop.module.scss";
import CardDevelop from "./card_develop/card_develop.jsx";

const cardData = [
  {
    img: "../../../src/assets/image/User/item1.jpg",
    title: "Chung tay bảo vệ môi trường",
    text: `Chung tay bảo vệ môi trường: Đây là một mục tiêu rất quan trọng của chúng ta trong thời đại
        hiện nay. Bảo vệ môi trường không chỉ giúp giảm thiểu các tác động xấu đến môi trường như ô
        nhiễm, mất rừng, mất đất, mất nước mà còn giúp cải thiện chất lượng cuộc sống của con người.
        Chúng ta có thể chung tay bảo vệ môi trường bằng cách tham gia các hoạt động như phân loại
        rác, sử dụng các sản phẩm thân thiện với môi trường, giảm thiểu sử dụng nhựa, trồng cây, hạn
        chế sử dụng ô tô và sử dụng các hình thức đi lại thân thiện hơn với môi trường như xe đạp,
        đi bộ.`,
    animate: styles.animate1,
    
  },
  {
    img: "../../../src/assets/image/User/item2.jpg",
    title: "Nâng cao nhận thức của con người",
    text: `Việc nâng cao nhận thức của con người về các vấn đề môi trường là rất quan
        trọng. Chúng ta cần giúp mọi người hiểu rõ hơn về tác động của các hoạt động của con người
        đến môi trường, cũng như cách để giảm thiểu tác động này. Việc tăng cường giáo dục và truyền
        thông về môi trường không chỉ giúp nâng cao nhận thức của mọi người, mà còn khuyến khích họ
        tham gia vào các hoạt động bảo vệ môi trường.`,
    animate: styles.animate2,
    
  },
  {
    img: "../../../src/assets/image/User/item3.jpg",
    title: "Hợp tác cùng chúng tôi",
    text: `Để đạt được những mục tiêu bảo vệ môi trường, chúng ta cần hợp tác với
        nhau. Chúng tôi luôn hoan nghênh mọi sự đóng góp và hỗ trợ từ mọi người để cùng nhau tạo ra
        một môi trường sống tốt đẹp hơn. Chúng tôi sẵn sàng hợp tác với các tổ chức, cộng đồng và cá
        nhân để thực hiện các hoạt động bảo vệ môi trường.`,
    animate: styles.animate3,
    
  },
  {
    img: "../../../src/assets/image/User/item5.jpg",
    title: "Chúng tôi cần sự giúp đỡ của bạn",
    text: `Việc bảo vệ môi trường không thể thành công nếu chỉ có chúng tôi làm một
        mình. Chúng tôi cần sự hỗ trợ của mọi người để có thể đạt được mục tiêu bảo vệ môi trường.
        Nếu bạn quan tâm đến các vấn đề môi trường và muốn đóng góp vào công cuộc bảo vệ môi trường,
        hãy tham gia các hoạt động của chúng tôi. Bạn có thể tham gia vào các chiến dịch bảo vệ môi
        trường, hoặc đóng góp bằng cách tài trợ hoặc tình nguyện tham gia vào các hoạt động bảo vệ
        môi trường. Mọi sự đóng góp của bạn đều sẽ được đánh giá cao và giúp ích rất nhiều cho môi
        trường và cộng đồng.`,
    animate: styles.animate4,
   
  },
];

export default function Develop() {
  

  // animate của development

  useEffect(() => {
    const handleScroll = () => {
      [1, 2, 3, 4].forEach((num) => {
        const content = document.querySelector(`.${styles[`animate${num}`]}`);
        if (content) {
          const contentPosition = content.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.7;
          if (screenPosition > contentPosition) {
            content.classList.add(styles[`active${num}`]);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.development}>
      <h2 className={styles.slogan_battery}>Hướng phát triển</h2>
      <hr />
      <div
        className={`content_grid p-3 m-0 border-0 ${styles.bd_example} bd-example-cssgrid row`}
      >
        {cardData.map((card, idx) => (<CardDevelop key={idx} card={card} />))}
      </div>
    </div>
  );
}
