import React from "react";
import styles from "./introduce.module.scss"; // Import SCSS for styles

const contentItems = [
    {
        img: "../../../src/assets/image/User/6262710.png",
        title: "Bảo vệ sự sống",
        desc:
            "Nếu chỉ được chôn lấp, các kim nặng trong pin thấm vào đất và nguồn nước ngầm, gây ra ô nhiễm nguồn nước. Hoặc khi đốt, các thành phần nguy hại trong pin sẽ bốc lên thành khói độc, hay chất độc còn đọng lại trong tro sẽ gây ô nhiễm không khí.",
        link: "http://moitruonganhduong.vn/tac-hai-cua-pin-thai",
    },
    {
        img: "../../../src/assets/image/User/3740135.png",
        title: "Hãy cứu lấy Trái Đất",
        desc:
            "Nếu vứt pin cũ đã sử dụng một cách bừa bãi, không được thu gom và xử lý đúng cách thì thì tác hại của chúng sẽ giống “viên đạn nguyên tử” nằm ẩn mình trong lòng đất.",
        link: "http://moitruonganhduong.vn/tac-hai-cua-pin-thai",
    },
    {
        img: "../../../src/assets/image/User/89102.png",
        title: "Xây Trái Đất Xanh",
        desc:
            "Thay vào đó, bạn có thể giữ lại hết những viên pin đã qua sử dụng, cho chúng vào chiếc lọ thủy tinh hoặc túi kín, để xa tầm với của trẻ nhỏ. Khi lượng pin đã nhiều, bạn hãy đem chúng đến các địa điểm hoặc những kho chuyên dụng để xử lý.",
        link: "http://moitruonganhduong.vn/tac-hai-cua-pin-thai",
    },
];

const Introduce = () => {
    React.useEffect(() => {
        if (window.ScrollReveal) {
            window.ScrollReveal({
                distance: "60%",
                duration: 2500,
                delay: 400,
            });
            window.ScrollReveal().reveal(".protect_head-title", {
                delay: 300,
                origin: "bottom",
            });
            window.ScrollReveal().reveal(".protect_content_item1", {
                delay: 400,
                origin: "bottom",
            });
            window.ScrollReveal().reveal(".protect_content_item2", {
                delay: 500,
                origin: "bottom",
            });
            window.ScrollReveal().reveal(".protect_content_item3", {
                delay: 600,
                origin: "bottom",
            });
        }
    }, []);

    return (
        <div id={styles.protect}>
            <div className="grid wide">
                <div className={styles.protect_container}>
                    <div className={styles.protect_head}>
                        <div className={`hidden ${styles.protect_head_title} protect_head-title`}>
                            <h1>Hiểm hoạ từ pin cũ</h1>
                        </div>
                        <div className={styles.protect_head_nav}>
                            <a href="#" className="hidden">
                                Khám phá
                            </a>
                            <a href="#" className="hidden">
                                Tham gia cùng chúng tôi
                            </a>
                        </div>
                    </div>
                    <div className={styles.protect_content}>
                        {contentItems.map((item, idx) => (
                            <div
                                key={idx}
                                className={`hidden ${styles.protect_content_item} protect_content_item${idx + 1}`}
                            >
                                <div className={styles.protect_content_image}>
                                    <img src={(`${item.img}`)} alt="" style={idx === 0 ? { height: 200 } : {}} />
                                </div>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    Đọc thêm <i className="fa-solid fa-circle-arrow-right"></i>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduce;